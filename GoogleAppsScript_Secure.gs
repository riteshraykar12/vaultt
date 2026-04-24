const sheetName = 'Sheet1'; 
const scriptProp = PropertiesService.getScriptProperties();

/**
 * SECURE INITIAL SETUP
 * Run this once in the editor after pasting to link your spreadsheet.
 */
function initialSetup () {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
}

/**
 * SECURE POST HANDLER
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait up to 10 seconds for a lock

  const cache = CacheService.getScriptCache();

  try {
    const params = e.parameter;
    const email = params.email || "";
    const honeypot = params.website || "";

    // 1. HONEYPOT CHECK (Bot protection)
    if (honeypot.length > 0) {
      return createJsonResponse('success', 'Transmission processed'); // Silent fail
    }

    // 2. RATE LIMITING (1 submission per 60s per email)
    const lockKey = "throttle_" + Utilities.base64Encode(email);
    if (cache.get(lockKey)) {
      return createJsonResponse('error', 'Too many requests. Please wait 60 seconds.');
    }

    // 3. SERVER-SIDE VALIDATION
    if ((params.fullName || "").length < 2) throw "Invalid Name";
    if (email.indexOf("@") === -1) throw "Invalid Email Address";
    if ((params.message || "").length < 10) throw "Message is too short";

    // 4. SPREADSHEET ACCESS
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    const sheet = doc.getSheetByName(sheetName);
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    // 5. DATA SANITIZATION & MAPPING
    const newRow = headers.map(function(header) {
      if (header === 'Date') return new Date();
      
      const rawValue = params[header] || "";
      return sanitize(rawValue); // Cleans data before writing to sheet
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    // 6. SET RATE LIMIT LOCK
    cache.put(lockKey, "1", 60);

    return createJsonResponse('success', 'Transmission logged');

  } catch (error) {
    return createJsonResponse('error', error.toString());
  } finally {
    lock.releaseLock();
  }
}

/**
 * Sanitizes input to prevent basic XSS or malformed data
 */
function sanitize(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/[<>]/g, ""); // Strips < and > tags
}

/**
 * Standardized JSON response
 */
function createJsonResponse(result, message) {
  return ContentService
    .createTextOutput(JSON.stringify({ 'result': result, 'message': message }))
    .setMimeType(ContentService.MimeType.JSON);
}

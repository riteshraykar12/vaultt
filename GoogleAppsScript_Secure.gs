/**
 * SECURE GOOGLE APPS SCRIPT HANDLER FOR VAULTT.
 * 
 * Instructions:
 * 1. Open your Google Apps Script editor.
 * 2. Replace your existing code with this secure implementation.
 * 3. Deploy as a Web App (Access: Anyone, even anonymous).
 * 
 * Features:
 * - Server-side validation (Length & Format)
 * - Server-side rate limiting (Email-based via CacheService)
 * - Honeypot verification
 * - XSS prevention (Input sanitization)
 */

function doPost(e) {
  var cache = CacheService.getScriptCache();
  
  try {
    var params = e.parameter;
    var name = params.fullName || "";
    var email = params.email || "";
    var message = params.message || "";
    var honeypot = params.website || ""; // Hidden field from UI

    // 1. Honeypot check (Server-side)
    if (honeypot.length > 0) {
      console.warn("Honeypot triggered");
      return createResponse("Transmission Successful", 200); // Silent fail
    }

    // 2. Rate Limiting via Cache (Based on Email)
    var lockKey = "throttle_" + Utilities.base64Encode(email);
    if (cache.get(lockKey)) {
      return createResponse("Too Many Requests", 429);
    }

    // 3. Server-Side Validation (CRITICAL)
    if (name.length < 2 || name.length > 100) throw "Invalid Name";
    if (email.indexOf("@") === -1 || email.length > 100) throw "Invalid Email";
    if (message.length < 10 || message.length > 2000) throw "Invalid Message";

    // 4. Data Sanitization
    name = sanitize(name);
    email = sanitize(email);
    message = sanitize(message);

    // 5. Record to Sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      new Date(),
      name,
      params.contactNumber || "N/A",
      email,
      message,
      params.package || "None",
      params.time || "N/A"
    ]);

    // Set cache lock for 60 seconds
    cache.put(lockKey, "1", 60);

    return createResponse("Success", 200);

  } catch (err) {
    console.error("Submission Error: " + err);
    return createResponse("System Error: " + err, 400);
  }
}

function sanitize(str) {
  // Basic XSS prevention: remove potential tags
  return str.replace(/[<>]/g, ""); 
}

function createResponse(msg, code) {
  return ContentService.createTextOutput(msg).setMimeType(ContentService.MimeType.TEXT);
}

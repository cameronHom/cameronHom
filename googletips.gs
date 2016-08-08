 var sheet = SpreadsheetApp.getActiveSheet();
sheet.appendRow(['Cotton Sweatshirt XL', 'css004']);


var sheetControl = ss.getSheetByName(SHEET_PLAYERS);

 var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Expenses");
 if (sheet != null) {
   Logger.log(sheet.getIndex());
 }
function UpdateThis() {
   
  var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet2 = ss.getSheets()[1];
 var range = sheet2.getRange("A2");
 var ITEM_DESCRIPTION = range.getValues()
  var range = sheet2.getRange("B2");
 var ITEM_CATEGORY = range.getValues()
   var range = sheet2.getRange("C2");
 var Building = range.getValues()
  
   
  var sql = "UPDATE test_table Set "
   sql = sql + "ITEM_CATEGORY = "
   sql = sql + "'"
   sql = sql + ITEM_CATEGORY
   sql = sql + "'"
   sql = sql + ","   
   sql = sql + " "
      sql = sql + "BUILDING = "
   sql = sql + "'"
   sql = sql + Building
   sql = sql + "'"
   sql = sql + " WHERE ITEM_DESCRIPTION = "
   sql = sql + "'"
   sql = sql + ITEM_DESCRIPTION
   sql = sql + "'"
                                                                     
  var conn = Jdbc.getConnection("jdbc:mysql://db4free.net:3306/testdataj", "Username", "Password");
  var stmt = conn.createStatement();
  var count = stmt.executeUpdate(sql,1)
 
   
 var rs = stmt.getGeneratedKeys();
 while(rs.next())
{
  Logger.log(rs.getString(1));
  stmt.close();
  conn.close();
}
   
}

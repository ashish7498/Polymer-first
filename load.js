

{ 
    dsn: "DATABASE=SKYLINE;HOSTNAME=9.3.171.21;PORT=50000;PROTOCOL=TCPIP;UID=db2inst1;PWD=skyl1ne;", 
    schema : "SMS_APP_WEB" 
  }


  var retrive_DB = select *from LANG_PROFILE;


  
  app.get('/getProfile', function (req, res) {
    appStorage.getProfile( function (data) {
        res.send(data);
     }); 


     
var http = require('http');
var file = require('fs');
const MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/domotique';

http.createServer((req,res) =>{
  //Base de donnees 
  /* MongoClient.connect(url,(err,db)=>{
    if (err) throw err;
    db.collection('user').find({}).toArray((err,data) =>{
      if (err) throw err;
      res.writeHead(200,{"Content-Type":"text/html"});
      res.write();
      console.log(data)
      res.end();
      console.log('Server is running on 8080... '+req.url);
  
    })
    db.close();
  }) */

  file.readFile('../src/index.html',(error,data) =>{
    if (error) throw error; 
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(data);
    res.end();

  });
}).listen(8080,() => console.log('Server is running on 8080...'));
//Object client de la base de donnees
    const MongoClient = require('mongodb').MongoClient;
//Url de la base de donnees
    var url='mongodb://127.0.0.1:27017/domotique';
  
//Connection a la base de donnees
    MongoClient.connect(url,(err,db)=>{
        if (err) throw err;
        console.log('Connection a la base de donnees reussie...');
        //Recuperer les donnees
        db.collection('user').find().toArray((err,data)=>{
        if (err) throw err;
        console.log(data)
        })
        db.close();
    });
  
  
  
  
  
  
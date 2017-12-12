
class MongoClientMethod {
    constructor(){
        require('mongodb').MongoClient.connect("mongodb://localhost:27017/kezida", (error, db)=>{
            this.db = db;
        })
    }

    insert(tableName, data, callback){
        let table = this.db.collection(tableName);
        table.insert(data, callback);
    }
}

module.exports = new MongoClientMethod();


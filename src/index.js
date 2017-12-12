

let config = require('./config');
let mongodb = require("./config/mongodb");

let express = require('express');
let app = express();

//app.js
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get('/', (req, res)=>{
    mongodb.insert("kezida", [{"name": "kezida"},{"name": "kezida1"},{"name": "kezida2"}], function(err, result){
        console.log(err, result)
        let data = {
            code: 200,
            data: result.ops
        }
        res.send(200, data);
    })
})

// let arr = [121,0,2,1,25,2,45,2,45,2,2,2,45,45,45,45,45,2,12,654,0,0,0,0,0,0,0,645,12]

// for(let i=0; i<arr.length; i++){
//     if(i !== arr.indexOf(arr[i])){
//         arr.splice(i, 1);
//         i--;
//     }
// }
// console.log(arr)


app.listen(config.port, function(){
    
})
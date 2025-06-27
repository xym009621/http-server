var fs = require('fs')
var url = require('url')
var controller = require('./controller')        
module.exports = (req,res)=>{
    // console.log(666)
    // res.setHeader('Content-Type','text/html;charset=utf-8')
    // res.write('<h1>你好，世界！<h1/>')
    // res.end()
    if(req.method=='GET')
    {
        // 请求头传参
        // console.log(req.url);
        // console.log(url.parse(req.url,true).query.id);
        if(req.url == '/'){
            controller.index(res)
        }else{
            fs.readFile('./preview.jpg',function(err,data){
                res.end(data);
            })
        }
    }else if(req.method=='POST'){
        //请求体中1
        // console.log("ppp");
        var data = ''
        req.on('data',function(d){
            data += d
        })
        req.on('end',function(){
            controller.user(require('querystring').parse(data),res)
        })
    }
}
// 导入http模块
const { log } = require('console');
var http = require('http')
// 创建http服务器
// 调用http.createServer()方法，返回一个http.Server对象
var server = http.createServer()
server.listen(8080,function(){
    console.log('http://127.0.0.1:8080');
})

server.on('request',function(req,res){
    console.log(666);
    res.write('8888');
    res.end();
})
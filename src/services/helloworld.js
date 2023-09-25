// 学习nodejs的第一个程序
console.log("Hello World");

/*
// 简单服务器
const http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World.\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
*/
/*
let fs = require("fs");


// 阻塞代码实例 一句一句执行
let data = fs.readFileSync('../assets/test.txt');

console.log(data.toString());
console.log("程序执行结束!");*/

/*
// 非阻塞代码实例
fs.readFile('../assets/test.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");


// 引入 events 模块
let events = require('events');
// 创建 eventEmitter 对象
let eventEmitter = new events.EventEmitter();

// 创建事件处理程序
let connectHandler = function connected() {
    console.log('连接成功。');
    eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
    console.log('数据接收成功。');
});

// 触发 connection 事件
eventEmitter.emit('connection');

console.log("程序执行完毕。");*/
console.log( __dirname );
console.log( __filename );
function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
setInterval(printHello, 2000);
const net = require("net");

//var client = net.connect({path: '/tmp/nodejs.sock'},function() { // UNIX domain sockets  사용시
const client = net.connect({ port: 8124 }, function () {
  //'connect' listener
  console.log("Connected To Server!");
  const data = "world!";
  console.log(`Client Send Data: ${data}`);
  client.write(data);
});

//서버로 부터 받은 데이터
client.on("data", function (data) {
  console.log("Client Get data: ${} " + data.toString());
  client.end();
});

client.on("end", function () {
  console.log("disconnected from server");
});

client.on("error", function (err) {
  console.log(err);
});

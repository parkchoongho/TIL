var net = require("net"),
  fs = require("fs");
var sockFile = "/tmp/nodejs.sock";

var server = net.createServer(function (client) {
  console.log("client connected");
  //client.write('hello\r\n'); //클라이언트에게 최초 접속시 데이터전달

  //클라이언트에게 받은 데이터
  client.on("data", function (data) {
    console.log("client In Data : " + data);
    var sendData = "hello " + data;
    console.log("client Send Data : " + sendData);
    client.write(sendData); //클라이언트에게 추가로 데이터를 보냄
  });

  client.on("end", function () {
    console.log("client disconnected");
  });

  //client.on('data') 이벤트에서 client.write된 데이터와 클라이언트에서 받은 데이터해서 클라이언트에게 보냄
  //client.pipe(client);
});

server.on("error", function (e) {
  //unix sock 사용시
  if (e.code == "EADDRINUSE") {
    var clientSocket = new net.Socket();
    // handle error trying to talk to server
    clientSocket.on("error", function (e) {
      // No other server listening
      if (e.code == "ECONNREFUSED") {
        fs.unlinkSync(sockFile);
        //'listening' listener
        server.listen(sockFile, function () {
          console.log("server recovered");
        });
      }
    });
    clientSocket.connect({ path: sockFile }, function () {
      console.log("Server running, giving up...");
      process.exit();
    });
  }
});

//server.listen(sockFile, function() { //UNIX domain sockets  사용시
server.listen(8124, function () {
  //'listening' listener
  console.log("PID [" + process.pid + "] TCP Server listening");
});

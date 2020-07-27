const net = require("net");

const client = net.connect({ port: 3000 }, function () {
  console.log("Connected To Server!");

  const data =
    "GET / HTTP/1.1\nContent-Type: choongho/form\nChoongHo-Message: I am Choongho!";
  console.log(`Client Send Data: ${data}`);
  client.write(data);
});

client.on("data", function (data) {
  console.log(`Client Get Data: ${data.toString()}`);
  client.end();
});

client.on("end", function () {
  console.log("disconnected from server");
});

client.on("error", function (err) {
  console.log(err);
});

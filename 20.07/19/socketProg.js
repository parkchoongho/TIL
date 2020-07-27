const net = require("net");

class HTTPMethodCheck {
  check(method) {
    if (method === "GET") {
      return (
        "HTTP/1.1 200 OK\nContent-Type: text/html\n\n" +
        "<html><h1>Hello!! Iam ChoongHo Welcome My Server</h1></html>"
      );
    }
  }
}

class ChoonghoWebframework {
  constructor() {
    this.filePath = "/tmp/node.sock";
    this.serverSocket = net.createServer();
    this.handlerMap = {};
  }

  add_handler(path, handler) {
    this.handlerMap[path] = handler;
  }

  httpStartLineParse(httpStartLine) {}

  checkMethod(method) {
    const methodChecker = new HTTPMethodCheck();
    return methodChecker.check(method);
  }

  run() {
    this.serverSocket.address({ address: "", port: 3000 });

    this.serverSocket.listen(3000, () => {
      console.log("Listening On Port: 3000...");
    });

    this.serverSocket.on("connection", (socket) => {
      socket.on("data", (data) => {
        console.log(`Client Seding Data: ${data}`);
        const stringData = data.toString();
        const method = stringData.split("\n")[0].split(" ")[0];
        const serverSendingData = this.checkMethod(method);
        socket.write(serverSendingData);
        socket.end();
      });
    });
  }
}

const choongho = new ChoonghoWebframework();
choongho.run();

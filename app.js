const http = require('http');

let count = 0;

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    count++;
    res.end(`Visit count: ${count}`);
  } else {
    res.end(); // 其他請求直接結束
  }

});

server.listen(3000);
const http = require('http');
//這行程式碼是把 Node.js 內建的 HTTP 模組載進來，讓我們可以用它來建立一個 Web 伺服器
let count = 0;
//這裡我們用一個全域變數 count 來存每次有人訪問首頁的次數，一開始初始化為 0
const server = http.createServer((req, res) => {
//這行程式碼建立一個 HTTP 伺服器，並定義了一個回呼函式。每當有使用者連到這個伺服器時，Node.js 就會執行這個函式
  if (req.url === "/") { 
    //我們只想計算首頁 / 的訪問次數，所以用 if 判斷使用者的 request URL 是否等於 '/'
    count++;
    //每次有人訪問首頁，我們就把 count 加 1
    res.end(`Visit count: ${count}`);
    //用 res.end() 把文字回傳給使用者，顯示目前的訪問次數
  } else {
    res.end(); // 其他請求直接結束
    //如果 request 不是首頁，例如 /favicon.ico 或其他網址，我們就直接結束回應，不做任何計數
  }

});

server.listen(3000);
//最後這行讓伺服器開始監聽 3000 port，代表我們可以在瀏覽器輸入 http://localhost:3000訪問這個伺服器

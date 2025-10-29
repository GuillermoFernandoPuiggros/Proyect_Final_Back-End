const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`--- request ---`);
  console.log(req);
  console.log(`--- response ---`);
  console.log(res);

  // Responder al cliente para que la petición no quede pendiente
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello World");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

var a="hello ayush";
console.log(a);
// const searchbar =document.getElementById('searchbar');
// console.log(searchbar);
// searchbar.addEventListener('keyup', (e) => {
// console.log(e);
// });
let time= new Date();
console.log(time);
let newdate=new Date(4024,1,20,8,34);
console.log(newdate);
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const http = require("http");
const fs = require("fs");
const _= require('lodash');

const server = http.createServer((req, res) => {
  //lodash
  const num= _.random(0,20)
  console.log(num);

  const greet = _.once(()=>{
    console.log('hello');
  
  })
    greet();

  // //set header content type
  // res.setHeader('Content-Type', 'text/html')
  // let path = './views'
  // switch(req.url){
  //   case '/':
  //     path +='index.html';
  //     res.statusCode= 200;
  //     break;
  //     case'/about':
  //     path +='about.html'
  //     res.statusCode= 200;
  //     break;
  //     case'/about-me':
  //     res.statusCode= 301;
  //     break;
  //     default:
  //       path+= '404.html'
  //       break;

  //}

  // send an html file
  // fs.readFile('./views/index.html', (err,data) => {
  //   if (err){
  //     console.log(err);
  //     res.end();
  //   } else{
  //res.write(data);
  
  //res.end(data);
  //   }
  // });

  //res.write('<head><link rel="stylesheet" href="#"></head>')
  // res.write('<p>hello ninjas</p>');
  // res.write('<p>hello  again ninjas</p>');
  // res.end();

  // set header content type
//   res.setHeader("Content-Type", "text/html");
//   res.write("<p>Hello ninjas</p>");
//   res.end();
// });

server.listen(3500, "localhost", () => {
  console.log("listening for requests on port 3000");
});

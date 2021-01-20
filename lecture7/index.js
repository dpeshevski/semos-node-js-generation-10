const http = require('http');

const { StringDecoder } = require('string_decoder');

const util = require('util');
const url = require('url');
// const path = require('path');

// let path = url.parse(req.url, true);
const PORT = process.env.PORT || 3000;

// process.env.NODE_ENV (dev, test, prod)

const server = http.createServer((req, res) => {
  let decoder = new StringDecoder('utf-8');
  
  let buffer = '';
  req.on('data', chunk => {
    buffer += decoder.write(chunk); 
    // ''+'hello'
    // 'hello' + 'world'
  });
  
  // TODO: check this next class
  console.log(req.url);
  console.log(req.headers);
  console.log(http.METHODS);
  

  let path = url.parse(req.url, true);

  req.on('end', () => {
    buffer += decoder.end();
    // 'hello wolrd'

    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.write('The response\n\n');
    res.write(util.inspect(path.query) + '\n\n');
    res.write(buffer + '\n\n');
    res.end('End of Message to Response');
  });

  //127.0.0.1
  // localhost://3000/api/courses/nodejs
  // if (req.url === '/') {
  //   res.write('Hello World to Home Page');
  //   res.end();
  // } else if (req.url === '/api/courses/nodejs') {
  //   res.write('The response\n\n');
    // res.write('Node js Course @ Gen 10\n\n');
  //   res.write(JSON.stringify([1, 2, 3]) + '\n\n');
  //   res.end('End of Message to Response');
  // } else {
  //   res.write('Please visit to /api/courses/nodejs');
  //   res.end();
  // }


});

//443 - https
//80, 8080 - http

server.listen(PORT, () => {
  console.log(`The HTTP Server is running/listening at ${PORT}`);
});

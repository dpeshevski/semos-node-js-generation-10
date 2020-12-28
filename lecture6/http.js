// HTTP Methods
// GET
// POST
// PUT
// DELETE

const https = require('https');

const baseURL = 'https://jsonplaceholder.typicode.com/users';

const request = https.get(baseURL, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Nothing found! ${response.statusCode}`);
    response.resume();
    return;
  }

  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('close', () => {
    console.log('Retrieved all data');
    console.log(JSON.parse(data));
  });
});

request.on('error', (err) => {
  console.error(`An error trying to make a request ${err.message}`);
});

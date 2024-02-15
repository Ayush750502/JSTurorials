const http = require('http');
const url = require('url');
const fs = require('fs');
const dt = require('./selfModules/sampleModule');
var inhtml;
var name = '';
fs.readFile('testCase.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  inhtml = data;
  console.log('Data is fetched');
});
function checkLink(link){
  lk = link.search;
  if(lk != null){
    console.log(lk);
  }
}
http.createServer(function (req, res) {
  let link = url.parse(req.url , true);
  /**let result = */ checkLink(link);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(inhtml);
  res.end(`<h3>Thanks for visiting!${name}</h3>
  <p>Date:${dt.myDateTime().toLocaleDateString()}</p>`);
}).listen(8080 , function(){
  console.log(`Server is running at -

    'http://localhost:8080'
                 or
    'http://127.0.0.1:8080' `);
});



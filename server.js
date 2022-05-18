const express = require('express');
const app = require('express')();
const fs = require('fs');
var obj;
const path = require('path');
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  fs.readFile('./database/network.json', 'utf8', function (err, data) {
    if (err) throw err;
    api = JSON.parse(data);
    res.render('index.ejs', { ip: api.ip, port: api.port })
  });
});

app.get('/home', (req, res) => {
  fs.readFile('./database/network.json', 'utf8', function (err, data) {
    if (err) throw err;
    api = JSON.parse(data);
    res.render('index.ejs', { ip: api.ip, port: api.port })
  });
});

app.get('/live', (req, res) => {
  fs.readFile('./database/network.json', 'utf8', function (err, data) {
    if (err) throw err;
    api = JSON.parse(data);
    res.render('live.ejs', { ip: api.ip, port: api.port })
  });
});

app.get('/stage', (req, res) => {
  fs.readFile('./database/network.json', 'utf8', function (err, data) {
    if (err) throw err;
    api = JSON.parse(data);
    res.render('stagedisplay.ejs', { ip: api.ip, port: api.port })
  });
});

app.get('/changeapi', (req, res) => {
  fs.readFile('./database/network.json', 'utf8', function (err, data) {
    if (err) throw err;
    api = JSON.parse(data);
    res.render('changeApi.ejs', { ip: api.ip, port: api.port })
  });
});

app.post('/changeapi/:ip/:port', async (req, res) => {
  //try {
    //readfile
    var JsonString = '{"ip": "192.168.0.73", "port": "49531"}';
    fs.readFile('./database/network.json', 'utf8', function (err, data) {
      if (err) throw err;
      const api = JSON.parse(data);
      
      api.ip = req.params.ip;
      api.port = req.params.port;

      JsonString = JSON.stringify(api);
      
      //write file
      fs.writeFile('./database/network.json', JsonString, function (err) {
      if (err) throw err;
    });
    });
    
  //} catch {
  //  res.redirect('/')
  //}
  res.redirect('/changeip')
})


app.listen(port, () => {
  console.log('Server is listening on port ' + port)
});

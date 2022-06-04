const express = require('express');
const app = require('express')();
const fs = require('fs');
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

app.get('/clicker', (req, res) => {
  fs.readFile('./database/network.json', 'utf8', function (err, data) {
    if (err) throw err;
    api = JSON.parse(data);
    res.render('clicker.ejs', { ip: api.ip, port: api.port })
  });
});

app.get('/presentation', (req, res) => {
  fs.readFile('./database/network.json', 'utf8', function (err, data) {
    if (err) throw err;
    api = JSON.parse(data);
    res.render('presentation.ejs', { ip: api.ip, port: api.port })
  });
});

app.get('/live', (req, res) => {
  fs.readFile('./database/network.json', 'utf8', function (err, data) {
    if (err) throw err;
    api = JSON.parse(data);
    res.render('live.ejs', { ip: api.ip, port: api.port })
  });
});

app.get('/fullscreen', (req, res) => {
  fs.readFile('./database/network.json', 'utf8', function (err, data) {
    if (err) throw err;
    api = JSON.parse(data);
    res.render('fullscreen.ejs', { ip: api.ip, port: api.port })
  });
});

app.get('/control', (req, res) => {
  fs.readFile('./database/network.json', 'utf8', function (err, data) {
    if (err) throw err;
    api = JSON.parse(data);
    res.render('control.ejs', { ip: api.ip, port: api.port })
  });
});

app.get('/settings', (req, res) => {
  fs.readFile('./database/network.json', 'utf8', function (err, data) {
    if (err) throw err;
    api = JSON.parse(data);
    res.render('settings.ejs', { ip: api.ip, port: api.port })
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

const electron = require('electron');
const url = require('url');
const path = require('path');

const app = electron.app;
let janela;

app.on('ready', function() {
  janela = new electron.BrowserWindow({
    width: 1050,
    height: 600,
    'node-integration': false
  });

  janela.webContents.openDevTools();

  janela.loadURL(url.format({
    pathname: path.join(__dirname, "/app/index.html"),
    protocol: "file"
  }));
});

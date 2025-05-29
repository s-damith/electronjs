const { app, BrowserWindow } = require('electron/main')

const { readFileSync } = require('fs');
const { Client } = require('ssh2');
const url = require("url");
const path = require("path");
const {ipcMain, shell} = require('electron')

// const conn = new Client();
// conn.on('ready', () => {
//   console.log('Client :: ready');
//   conn.exec('ls; git clone https://github.com/s-damith/electronjs.git', (err, stream) => {
//     if (err) throw err;
//     stream.on('close', (code, signal) => {
//       console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
//       conn.end();
//     }).on('data', (data) => {
//       console.log('STDOUT: ' + data);
//     }).stderr.on('data', (data) => {
//       console.log('STDERR: ' + data);
//     });
//   });
// }).connect({
//   host: '192.168.50.233',
//   port: 22,
//   username: 'root',
//   privateKey: readFileSync('./id_rsa_ice2'),
//   passphrase: 'Sameera1996@'
// });



const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('./web_app/dist/index.html')

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on('close',()=>app.quit())

ipcMain.on('openIDTApp',() => {
  shell.openExternal("https://idt-portal.ds2.icelab.cloud");
})
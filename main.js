const { app, BrowserWindow, globalShortcut, Menu, MenuItem } = require('electron');
const { ipcMain } = require('electron');

const path = require('path');
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js'
            webviewTag: true,
            protocol: 'file:',
            slashes: true,
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    win.maximize();
    win.setMenuBarVisibility(false);
    //win.webContents.openDevTools();
    win.loadFile('index.html');

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
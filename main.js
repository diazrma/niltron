const { app, BrowserWindow, globalShortcut, Menu, MenuItem } = require('electron');

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
            frame: false,
        }
    });
    win.maximize();
    win.setMenuBarVisibility(false);
    win.loadFile('index.html');
    globalShortcut.register('Alt+CommandOrControl+I', () => {
        win.webContents.openDevTools();
    });


    var menu = new Menu();

    //Basic Menu For Testing
    menu.append(new MenuItem({
        label: 'Voltar',
        click: function() {

        }
    }));

    menu.append(new MenuItem({
        label: 'Avançar',
        click: function() {


        }
    }));
    menu.append(new MenuItem({
        label: 'Recarregar',
        click: function() {

        }
    }));
    menu.append(new MenuItem({ type: 'separator' }));
    menu.append(new MenuItem({
        label: 'Inspecionar Elemento    CRTL+SHIFT+I',
        click: function() {
            win.webContents.openDevTools();
        }
    }));
    menu.append(new MenuItem({
        label: 'Sair',
        click: function() {
            win.close();

        }
    }));

    app.on("web-contents-created", (...[ /* event */ , webContents]) => {
        webContents.on("context-menu", (event, click) => {
            event.preventDefault();
            menu.popup(webContents);
        }, false);
    });



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
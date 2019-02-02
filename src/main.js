const {app, BrowserWindow} = require('electron')

let win

app.on('ready', _ => {
    win = new BrowserWindow({
        width: 800,
        height: 600
    })
    
    win.loadFile('src/index.html')
    win.on('closed', _ => {
        win = null
    })
})

app.on('window-all-closed', _ => {
    app.quit()
})
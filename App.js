const {app,BrowserWindow, ipcMain} = require("electron")
const path = require("path")

let root;

const AppWindow = () => {
    root = new BrowserWindow({
        webPreferences:{
            webSecurity:true,
            nodeIntegration:false,
            preload:path.join(app.getAppPath(),"Renderer.js")
        },
        minHeight:600,
        minWidth:500,
        frame:false
    })
    root.loadFile("Index.html")
}

// hardware acceleration
app.disableHardwareAcceleration()

// Initial Start Up
app.on("ready", () => {AppWindow()})

// Close Button Event
ipcMain.on("closeaction", () => {app.quit()})

// Maximize Button Event
ipcMain.on("maxaction", () => {root.isMaximized()?root.unmaximize():root.maximize()})

// Minimize Button Event
ipcMain.on("minaction", () => {root.minimize()})
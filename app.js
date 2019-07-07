// Libs
const electron = require("electron");
const app = electron.app;
const ipc = electron.ipcMain;

// Vars
let win;

// Code
function createWindow(){
  win = new electron.BrowserWindow({
    width: 300,
    height: 600,
    minHeight: 400,
    minWidth: 300,
    frame: false,
    backgroundColor: "#222",
    icon: "assets/favicon.ico",
    show: false,
    title: "Emote",
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
    },
  });

  win.once("ready-to-show", () => {
    win.show();
  });

  // and load the index.html of the app.
  win.loadFile("pageMain/index.html");
  win.on("closed", () => {
    win = null;
    app.quit();
  });

  win.isResizable(true);
}

app.on("ready", () => {
  createWindow();
  win.setOpacity(0.9);
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

function createAboutWindow() {
  // Criar uma janela de navegação.
  let abt;

  abt = new electron.BrowserWindow({
    width: 600,
    height: 300,
    frame: false,
    resizable: false,
    backgroundColor: "#222",
    icon: "assets/favicon.ico",
    maximizable: false,
    skipTaskbar: true,
    show: false,
    title: "About",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  abt.once("ready-to-show", () => {
    abt.show();
  });

  // and load the index.html of the app.
  abt.loadFile("pageAbout/index.html");
  abt.on("closed", () => {
    abt = null;
  });

  abt.setMenu(null);
  abt.setOpacity(0.9);
}

ipc.on("about", () => {
  createAboutWindow();
});

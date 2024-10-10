import { BrowserWindow } from "electron";
import { ipcMain } from "electron";

export function IPC(window: BrowserWindow) {
  ipcMain.on("window-control", async (_, params) => {
    switch (params) {
      case "minimize":
        window.minimize();
        break;
      case "maximize":
        if (window.isMaximized()) {
          window.unmaximize();
        } else {
          window.maximize();
        }
        break;
      case "close":
        window.close();
        break;
    }
  });
}

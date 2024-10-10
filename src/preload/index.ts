import { contextBridge, ipcRenderer } from "electron";
import { ElectronAPI, electronAPI } from "@electron-toolkit/preload";

declare global {
  export interface Window {
    electronAPI: ElectronAPI;
    api: typeof api;
  }
}

// Custom APIs for renderer
const api = {
  fetch(params: any) {
    return ipcRenderer.send("window-control", params);
  },
};

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
    // contextBridge.exposeInMainWorld("electronAPI", {
    //   minimize: () => ipcRenderer.send("window-control", "minimize"),
    //   maximize: () => ipcRenderer.send("window-control", "maximize"),
    //   close: () => ipcRenderer.send("window-control", "close"),
    // });
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}

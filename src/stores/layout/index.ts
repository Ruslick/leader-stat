import { makeAutoObservable } from "mobx";
import { View } from "./models";

class Layout {
  public isSidebarOpen = false;

  public view: View = "columns";

  public get columns(): number {
    if (this.view === "rows") {
      return 1;
    }
    if (this.isSidebarOpen) {
      return 2;
    }
    return 3;

  }

  constructor() {
    makeAutoObservable(this);
  }

  public toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  public toggleView() {
    this.view = this.view === "rows" ? "columns" : "rows";
  }
}

export const layoutStore = new Layout();

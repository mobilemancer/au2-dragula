// import "dragula/dist/dragula.css";
import dragula from "dragula";

export class MyApp {
  public container: Element;

  constructor() {}

  public afterBind(): void {
    dragula([this.container], {});
  }
}

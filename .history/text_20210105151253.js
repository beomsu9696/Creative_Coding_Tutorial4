export class Text {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.style.position = "absolute";
    this.canvas.style.left = "0";
    this.canvas.style.top = "0";
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d");
  }

  setText(str, density, stageWidth, stageHeight) {
    this.canvas.width = stageWidth;
  }
}

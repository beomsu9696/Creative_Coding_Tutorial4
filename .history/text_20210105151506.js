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
    this.canvas.height = stageHeight;

    const myText = str;
    const fontWidth = 700;
    const fontSize = 800;
    const fontName = "Hind";

    this.ctx.clearRect(0, 0, stageWidth, stageHeight);
    this.ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;
    this.ctx.fillStyle = `rgba(0, 0, 0, 0.3)`;
    this.ctx.textBaseline = `middle`;
    const fontPos = this.ctx.measureText(myText);
  }
}

class Paddle {
  constructor(x, y, width, height, name) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.name = name;
    this.points = 0;
  }

  show() {
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }

  move(dir) {
    this.y -= dir * 4;
  }
}

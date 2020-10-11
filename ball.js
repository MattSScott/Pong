class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-0.1, 0.1));
    this.vel.setMag(5);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.y - this.r < 0 || this.pos.y + this.r > height) {
      this.vel.y *= -1;
    }
    if (this.pos.x - this.r < 0) {
      this.pos = createVector(this.x, this.y);
      this.vel = createVector(random(-1, 1), random(-0.1, 0.1));
      this.vel.setMag(5);
      player2.points++;
    } else if (this.pos.x + this.r > width) {
      this.pos = createVector(this.x, this.y);
      this.vel = createVector(random(-1, 1), random(-0.1, 0.1));
      this.vel.setMag(5);
      player1.points++;
    }
  }

  show() {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 2 * this.r, 2 * this.r);
  }

  bounce(paddle) {
    if (paddle == player1) {
      if (this.pos.x - this.r < paddle.x + paddle.w / 2 && this.pos.y < paddle.y + paddle.h / 2 && this.pos.y > paddle.y - paddle.h / 2) {
        if (this.pos.y > paddle.y - paddle.h / 6 && this.pos.y < paddle.y + paddle.h / 6) {
          this.vel = createVector(5, 0);
        } else if (this.pos.y >= paddle.y + paddle.h / 6 && this.pos.y < paddle.y + paddle.h / 3) {
          this.vel = p5.Vector.fromAngle(radians(15), 5);
        } else if (this.pos.y >= paddle.y + paddle.h / 3) {
          this.vel = p5.Vector.fromAngle(radians(30), 5);
        } else if (this.pos.y <= paddle.y - paddle.h / 6 && this.pos.y >= paddle.y - paddle.h / 3) {
          this.vel = p5.Vector.fromAngle(radians(-15), 5);
        } else {
          this.vel = p5.Vector.fromAngle(radians(-30), 5);
        }
      }
    }
    if (paddle == player2) {
      if (this.pos.x + this.r > paddle.x - paddle.w / 2 && this.pos.y < paddle.y + paddle.h / 2 && this.pos.y > paddle.y - paddle.h / 2) {
        if (this.pos.y > paddle.y - paddle.h / 6 && this.pos.y < paddle.y + paddle.h / 6) {
          this.vel = createVector(-5, 0);
        } else if (this.pos.y >= paddle.y + paddle.h / 6 && this.pos.y < paddle.y + paddle.h / 3) {
          this.vel = p5.Vector.fromAngle(radians(165), 5);
        } else if (this.pos.y >= paddle.y + paddle.h / 3) {
          this.vel = p5.Vector.fromAngle(radians(150), 5);
        } else if (this.pos.y <= paddle.y - paddle.h / 6 && this.pos.y >= paddle.y - paddle.h / 3) {
          this.vel = p5.Vector.fromAngle(radians(-165), 5);
        } else {
          this.vel = p5.Vector.fromAngle(radians(-150), 5);
        }
      }
    }
  }
}

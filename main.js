let players = [];
let ball;
let player1;
let player2;

function setup() {
  createCanvas(800, 400);
  ball = new Ball(width / 2, height / 2, 8);
  player1 = new Paddle(30, height / 2, 20, 125, 'player1 wins!');
  player2 = new Paddle(width - 30, height / 2, 20, 125, 'player2 wins!');
  players.push(player1);
  players.push(player2);
}

function draw() {
  textAlign(CENTER);
  background(0);
  ball.show();
  ball.move();
  for (let p of players) {
    p.show();
    ball.bounce(p);
    if (p.points == 5) {
      text(p.name, width/2, height-20);
      noLoop();
    }
  }

  if (keyIsDown(UP_ARROW)) {
    player2.move(1);
  }

  if (keyIsDown(DOWN_ARROW)) {
    player2.move(-1);
  }

  if (keyIsDown(87)) {
    player1.move(1);
  }

  if (keyIsDown(83)) {
    player1.move(-1);
  }
  textSize(32)
  text(player1.points, 30, height - 20);
  text(player2.points, width - 30, height - 20);
}

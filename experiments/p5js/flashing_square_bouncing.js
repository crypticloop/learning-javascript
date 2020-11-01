let x_pos;
let y_pos;
let x_speed = 1;
let y_speed;
let size;

function setup() {
  let width = 600;
  let height = 600;
  
  size = 100;
  
  x_pos = width/2;
  y_pos = height/2;
  
  createCanvas(600, 600);
  background(240);
  
  x_speed = random(10);
  y_speed = random(-10);
}

function draw() {
  
  red_val = random(0,255);
  green_val = random(0,255);
  blue_val = random(0,255);
  
  fill(red_val, red_val, red_val);
  square(x_pos, y_pos, size);
  
  x_pos = x_pos + x_speed;
  y_pos = y_pos + y_speed;
  
  if (x_pos > width - size || x_pos < 0) {
    x_speed = -x_speed;
  }
  
  if (y_pos > height - size || y_pos < 0) {
    y_speed = -y_speed;
  } 
}
let x_pos;
let y_pos;
let x_speed;
let y_speed;
let size;
let time_reduct_x;
let time_reduct_y;
let red_col;
let blue_col;
let green_col;


function setup() {
  let width = 600;
  let height = 600;
  
  size = 50;
  time_reduct_x = 0;
  time_reduct_y = 0;
  
  x_pos = width/2;
  y_pos = height/2;
  
  createCanvas(600, 600);
  background(0);
  
  x_speed = random(-2,2);
  y_speed = random(-2,2);
}

function draw() {
  
  let red_col = random(0, 255);
  let blue_col = random(0, 255);
  let green_col = random(0, 255);
  
  translate(x_pos, y_pos)
  rotation = map(x_pos, 0,  width, 0, 2* TWO_PI);
  rotate(rotation);
  stroke(red_col, blue_col, green_col);
  line(-size, 0, +size, 0);
  
  x_pos = x_pos + x_speed;
  y_pos = y_pos + y_speed;
  
  if (x_pos > width - size * abs(cos(rotation)) || x_pos < size * abs(cos(rotation))) {
    if ((millis() - time_reduct_x) > 2000) {
      x_speed = -x_speed;
      time_reduct_x = millis()
      print("Reversing x")
    }
    else {
      print("Not reversing x based on time.")
    }
  }
  
  if (y_pos > height - size * abs(sin(rotation)) || y_pos < size * abs(sin(rotation))) {
    if ((millis() - time_reduct_y) > 2000) {
      y_speed = -y_speed;
      time_reduct_y = millis();
      print("Reversing y");
      print("x_pos: " + x_pos);
      print("y_pos: " + y_pos);
    }
    else {
      print("Not reversing y on time.")
    }
  }
  
}
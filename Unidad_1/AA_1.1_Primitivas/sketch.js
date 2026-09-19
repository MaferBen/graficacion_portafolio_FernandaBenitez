function setup() {
  createCanvas(400, 400);

  background(179, 217, 255);

  // cuerpo
  stroke(25);
  strokeWeight(4);
  fill(180, 190, 200);
  rect(126, 161, 149, 129);

  // cabeza
  stroke(25);
  strokeWeight(4);
  fill(180, 190, 200);
  rect(104, 71, 191, 89);

  // ojo izq
  stroke(25);
  strokeWeight(3);
  fill(255, 0, 0);
  ellipse(150, 116, 35, 36);

  // ojo der
  stroke(25);
  strokeWeight(3);
  fill(255, 0, 0);
  ellipse(245, 116, 35, 36);

  // boca
  stroke(25);
  strokeWeight(4);
  line(161, 141, 239, 140);
  
  // brazo
  stroke(25);
  strokeWeight(7);
  line(126, 184, 76, 241);

  stroke(25);
  strokeWeight(8);
  line(274, 185, 324, 239);
  
  // mano
  stroke(25);
  strokeWeight(3);
  fill(0, 255, 0);
  circle(65, 250, 30);

  stroke(25);
  strokeWeight(3);
  fill(0, 255, 0);
  circle(335, 250, 30);

  // rect central
  stroke(25);
  strokeWeight(3);
  fill(60, 70, 90);
  rect(154, 191, 91, 59);

  stroke(25);
  strokeWeight(3);
  fill(255, 200, 50);
  triangle(200, 200, 181, 230, 220, 229);

  // pierna
  stroke(25);
  strokeWeight(5);
  fill(180, 190, 200);
  rect(144, 291, 41, 69);

  stroke(25);
  strokeWeight(5);
  fill(180, 190, 200);
  rect(215, 290, 40, 70);

  // pie
  stroke(25);
  strokeWeight(4);
  fill(0, 255, 0);
  ellipse(164, 365, 56, 25);

  stroke(25);
  strokeWeight(4);
  fill(0, 255, 0);
  ellipse(236, 365, 54, 26);
}
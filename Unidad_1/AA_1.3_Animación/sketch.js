function setup() {
  createCanvas(400, 400);
}

function draw() {

  // Fondo
  background(51, 34, 0);

  // Mesa
    // r,   g,   b
  fill(153, 102, 0);
  rect(0, 300, 400, 100);
    // x,  y, ancho, largo
  
  // Biblia

  // Marco de la Biblia
  fill(70, 45, 30);
  rect(100, 140, 120, 160);

  // Páginas
  fill(210, 190, 145);
  rect(110, 150, 100, 140);

  // Líneas del texto
  stroke(100, 80, 60);
  strokeWeight(1);
  
  // Izquierda
  line(120, 160, 150, 160);
  line(120, 170, 150, 170);
  line(120, 180, 150, 180);
  line(120, 190, 150, 190);
  line(120, 200, 150, 200);
  line(120, 210, 150, 210);
  line(120, 220, 150, 220);
  line(120, 230, 150, 230);
  line(120, 240, 150, 240);
  line(120, 250, 150, 250);
  line(120, 260, 150, 260);
  line(120, 270, 150, 270);
  
  // Derecha
  line(170, 160, 200, 160);
  line(170, 170, 200, 170);
  line(170, 180, 200, 180);
  line(170, 190, 200, 190);
  line(170, 200, 200, 200);
  line(170, 210, 200, 210);
  line(170, 220, 200, 220);
  line(170, 230, 200, 230);
  line(170, 240, 200, 240);
  line(170, 250, 200, 250);
  line(170, 260, 200, 260);
  line(170, 270, 200, 270);

  // Borde de la Biblia
  noFill();
  stroke(80, 55, 35);
  strokeWeight(3);
  rect(100, 138, 120, 160);

  // // VELA

  // VELA - CANDELABRO DE UNA SOLA VELA

  noStroke();
  fill(190, 170, 120);

  // Inicio del candelabro
  ellipse(302, 295, 30, 18);
  ellipse(302, 285, 25, 15);
  
  // Fin del candelabro
  ellipse(302, 265, 28, 45);
  ellipse(302, 240, 25, 20);
  
  // Soporte de la vela
  ellipse(302, 225, 25, 14);
  
  // Vela
  ellipse(302, 210, 20, 35);
  
  // Parte superior de la vela
  ellipse(302, 193, 20, 8);
  
  // Mecha
  stroke(30);
  strokeWeight(2);
  line(302, 193, 302, 183);

  // TRES PALITOS VERTICALES

  noStroke();
  fill(190, 170, 120);
  
  rect(250, 230, 6, 70);
  rect(335, 240, 6, 60);

  // Libro pequeño

  // Sombra
  fill(45, 30, 20);
  rect(250, 335, 55, 12);

  // Portada
  fill(153, 102, 0);
  rect(250, 250, 55, 90);

  // Páginas
  fill(190, 165, 115);
  rect(255, 255, 45, 80);

  // Líneas del libro
  stroke(110, 80, 50);
  strokeWeight(1);

  line(260, 270, 290, 270);
  line(260, 280, 290, 280);
  line(260, 290, 290, 290);
  line(260, 300, 290, 300);
  line(260, 310, 290, 310);
  line(260, 320, 290, 320);

}
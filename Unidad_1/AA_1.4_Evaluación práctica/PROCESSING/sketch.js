function setup() {
  createCanvas(604, 600);
  smooth();
  textAlign(CENTER);
}

function draw() {
  // Fondo
  background(43, 11, 63);

  // Órbitas
  stroke(190, 175, 200);
  strokeWeight(1);

  // Centro de las órbitas
  let cx = 12;
  let cy = 315;

  // Órbitas
  orbita(cx, cy, 140);
  orbita(cx, cy, 180);
  orbita(cx, cy, 220);
  orbita(cx, cy, 260);
  orbita(cx, cy, 300);
  orbita(cx, cy, 350);
  orbita(cx, cy, 400);
  orbita(cx, cy, 450);
  orbita(cx, cy, 500);

  // Sol
  noStroke();

  // Borde naranja
  fill(255, 165, 0);
  ellipse(12, 315, 230, 230);

  // Centro amarillo
  fill(255, 255, 0);
  ellipse(12, 315, 205, 205);

  // Mercurio
  fill(190, 165, 150);
  ellipse(148, 257, 16, 16);

  fill(255);
  textSize(12);
  text("Mercurio", 148, 278);

  // Venus
  fill(250, 170, 185);
  ellipse(192, 310, 20, 20);

  fill(255);
  textSize(12);
  text("Venus", 192, 333);

  // Tierra
  fill(39, 196, 110);
  ellipse(270, 292, 25, 25);

  fill(255);
  textSize(12);
  text("Tierra", 270, 317);

  // Marte
  fill(238, 80, 58);
  ellipse(231, 371, 19, 19);

  fill(255);
  textSize(12);
  text("Marte", 231, 393);

  // Júpiter
  fill(255);
  ellipse(329, 189, 40, 40);

  fill(255);
  textSize(12);
  text("Júpiter", 329, 219);

  // Urano
  fill(0, 255, 255);
  ellipse(403, 212, 27, 27);

  fill(255);
  textSize(12);
  text("Urano", 403, 237);

  // Saturno
  noFill();
  stroke(225, 205, 120);
  strokeWeight(2);

  // Anillo
  ellipse(361, 398, 50, 15);

  // Planeta
  noStroke();
  fill(240, 230, 140);
  ellipse(361, 398, 33, 33);

  fill(255);
  textSize(12);
  text("Saturno", 361, 426);

  // Neptuno
  fill(65, 105, 220);
  ellipse(439, 406, 27, 27);

  fill(255);
  textSize(12);
  text("Neptuno", 439, 431);
}

// Función para órbitas punteadas
function orbita(x, y, radio) {
  noFill();
  stroke(190, 175, 200);
  strokeWeight(1);

  // Separación entre puntos
  let paso = 0.025;

  for (let a = 0; a < TWO_PI; a += paso) {

    // Punto de inicio
    let x1 = x + cos(a) * radio;
    let y1 = y + sin(a) * radio;

    // Punto final del pequeño segmento
    let x2 = x + cos(a + 0.010) * radio;
    let y2 = y + sin(a + 0.010) * radio;

    line(x1, y1, x2, y2);
  }
}
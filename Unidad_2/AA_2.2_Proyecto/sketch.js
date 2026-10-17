function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(3, 6, 22);

  noStroke();
  
  // Círculo más grande del fondo 
  fill(12, 18, 48);
  ellipse(width * 0.48, height * 0.48, width * 0.9, height * 1.1);

  // Círculo mediano del fondo 
  fill(18, 12, 48, 120);
  ellipse(width * 0.8, height * 0.65, width * 0.5, height * 0.7);

  // Nebulosas
  // ellipse superior
  fill(40, 50, 130, 25);
  ellipse(width * 0.35, height * 0.3, 350, 230);

  //ellipse inferior
  fill(100, 30, 160, 20);
  ellipse(width * 0.75, height * 0.65, 300, 250);

  // Estrellas
  fill(255);
  circle(40, 90, 2);
  circle(100, 180, 3);
  circle(220, 70, 2);
  circle(300, 210, 2);
  circle(400, 100, 3);
  circle(500, 50, 2);
  circle(600, 180, 3);
  circle(720, 80, 2);
  circle(850, 160, 3);
  circle(950, 60, 2);
  circle(1100, 130, 3);
  circle(1200, 240, 2);
  circle(150, 350, 2);
  circle(270, 430, 3);
  circle(470, 340, 2);
  circle(690, 450, 3);
  circle(900, 380, 2);
  circle(1050, 470, 3);

  // Estrellas titilando
  fill(100, 200, 255);
  circle(180, 120, 4 + sin(frameCount * 3));
  circle(550, 180, 5 + sin(frameCount * 4));
  circle(600, 300, 6 + sin(frameCount * 2));
  circle(450, 500, 3 + sin(frameCount * 4));

  // ===== ENCABEZADO FUTURISTA =====
  noStroke();
  fill(0, 220, 255, 25);
  rect(20, 15, width - 40, 72, 8);

  noFill();
  stroke(30, 180, 255, 160);
  strokeWeight(1);
  rect(20, 15, width - 40, 72, 8);

  // Esquinas decorativas
  line(20, 35, 20, 15);
  line(20, 15, 50, 15);
  line(width - 50, 15, width - 20, 15);
  line(width - 20, 15, width - 20, 35);

  noStroke();
  fill(80, 230, 255);
  textSize(20);
  textAlign(LEFT);
  text("F E R N A N D A // B E N Í T E Z ", 38, 43);

  fill(150, 190, 230);
  textSize(10);
  text("ESTACION ESPACIAL INTERACTIVA", 40, 62);

  fill(70, 255, 190);
  circle(44, 76, 5);

  fill(120, 255, 205);
  text("I S C", 55, 80);

  fill(150, 210, 255);
  textAlign(RIGHT);
  text("SECTOR 07-A", width - 38, 42);

  // PLANETA SATURNO Y ORBITAS
  push();
  translate(width * 0.39, height * 0.51);

  // Halo exterior
  noFill(); // Sin relleno (solo contorno transparente)
  stroke(20, 130, 255, 30); // Color azul con baja opacidad (efecto resplandor)
  strokeWeight(25); // Línea muy gruesa (25px) para crear el halo
  circle(0, 0, 210); // Círculo del halo en el centro(0,0)
  stroke(50, 160, 255, 90); // Cambia a azul más nítido y mayor opacidad
  strokeWeight(2); // Línea delgada (2px) para detalles técnicos
  circle(0, 0, 260); // Dibuja el anillo exterior grande
  circle(0, 0, 230); // Dibuja el anillo intermedio
  circle(0, 0, 190); // Dibuja el anillo interior

  // Marcas de la órbita
  push();
  rotate(frameCount * 0.25);
  stroke(80, 220, 255, 170);
  // Lineas
  line(-130, 0, -115, 0);
  line(115, 0, 130, 0);
  line(0, -130, 0, -115);
  line(0, 115, 0, 130);

  fill(70, 220, 255);
  noStroke();
  circle(0, -130, 5);
  circle(130, 0, 5);
  pop();

  // Anillo planetario
  // Anillo azul
  noFill();
  stroke(50, 180, 255, 180);
  strokeWeight(4);
  ellipse(0, 0, 180, 55);
  // Anillo morado
  stroke(180, 100, 255, 170);
  strokeWeight(1);
  ellipse(0, 0, 195, 65);

  // Planeta
  push();
  rotate(frameCount * 0.4);
  // Sombra azul del fondo
  noStroke();
  fill(10, 35, 100);
  circle(0, 0, 125);
  // Círculo azul anfrente
  fill(20, 100, 190);
  circle(-5, -5, 112);

  // Iris 
  noStroke();
  fill(120, 230, 255, 70);
  circle(-25, -25, 65);

  // Luces centro
  fill(120, 255, 240);
  circle(15, -20, 5);
  circle(-25, 10, 4);
  circle(25, 25, 5);

  pop();

  // Luna anidada
  push();
  rotate(frameCount * 1.5);
  translate(112, 0);
  rotate(frameCount * 2.5);
  scale(0.7 + sin(frameCount * 3) * 0.04);

  // Halo lunar
  noStroke();
  fill(100, 160, 210, 60);
  circle(0, 0, 48);
  // Blanco
  fill(190, 210, 235);
  circle(0, 0, 30);
  // Cráters
  fill(110, 140, 175);
  circle(-6, -4, 7);
  circle(5, 5, 5);
  circle(4, -7, 4);
  // Sombra del cráter
  fill(230, 240, 255);
  circle(-5, -6, 3);

  pop();//interno

  pop();// de fuera

  // Etiqueta del planeta
  noStroke();
  fill(90, 220, 255);
  textAlign(CENTER);
  textSize(11);
  text("SATURNITA", width * 0.39, height * 0.51 + 150);

  fill(140, 170, 220);
  textSize(9);
  text("PLANETA GALÁCTICO", width * 0.39, height * 0.51 + 165);

  // RADAR PRINCIPAL
  push();
  translate(width * 0.12, height * 0.37);

  noFill();
  stroke(0, 255, 190, 35);
  strokeWeight(12);
  circle(0, 0, 125);

  stroke(0, 255, 190, 180);
  strokeWeight(1);
  circle(0, 0, 125);
  circle(0, 0, 90);
  circle(0, 0, 55);

  line(-62, 0, 62, 0);
  line(0, -62, 0, 62);
  line(-44, -44, 44, 44);
  line(-44, 44, 44, -44);

  // Barrido del radar
  push();
  rotate(atan2(mouseY - height * 0.37,
               mouseX - width * 0.12));

  noStroke();
  fill(0, 255, 190, 35);
  arc(0, 0, 120, 120, -40, 0, PIE);

  stroke(0, 255, 190);
  strokeWeight(2);
  line(0, 0, 62, 0);

  fill(100, 255, 220);
  noStroke();
  circle(35, 0, 6);
  circle(48, 0, 4);
  pop();

  fill(0, 255, 190);
  noStroke();
  circle(0, 0, 7);

  pop();

  // Etiqueta del radar
  textAlign(CENTER);
  fill(50, 255, 200);
  textSize(11);
  text("RADAR ALPHA", width * 0.12, height * 0.37 + 85);

  fill(130, 190, 210);
  textSize(9);
  text("ESCANEO ACTIVO", width * 0.12, height * 0.37 + 100);

  // SEGUNDO RADAR 
  push();
  translate(width * 0.79, height * 0.24);

  noFill();
  stroke(40, 120, 255, 50);
  strokeWeight(12);
  circle(0, 0, 90);

  stroke(70, 180, 255);
  strokeWeight(1);
  circle(0, 0, 90);
  circle(0, 0, 60);
  circle(0, 0, 30);

  line(-45, 0, 45, 0);
  line(0, -45, 0, 45);

  push();
  rotate(frameCount * 2.5);

  stroke(100, 220, 255);
  strokeWeight(3);
  line(0, 0, 43, 0);

  noStroke();
  fill(100, 220, 255);
  circle(43, 0, 6);

  pop();

  noStroke();
  fill(70, 180, 255);
  circle(0, 0, 6);
  pop();

  textAlign(CENTER);
  fill(90, 190, 255);
  textSize(10);
  text("RADAR BETA", width * 0.79, height * 0.24 + 65);

  // NAVE GRANDE
  push();

  translate(
    lerp(width * 0.72, width * 0.39 + 85,
         0.5 + 0.5 * sin(frameCount * 0.8)),
    lerp(height * 0.76, height * 0.51,
         0.5 + 0.5 * sin(frameCount * 0.8))
  );

  rotate(frameCount * 3);

  // Halo de la nave
  noFill();
  stroke(60, 200, 255, 100);
  strokeWeight(2);
  ellipse(0, 0, 60, 38);

  // Alas
  noStroke();
  fill(20, 90, 170);
  triangle(-12, 0, -30, -22, 8, -8);
  triangle(-12, 0, -30, 22, 8, 8);

  // Cuerpo
  fill(130, 220, 255);
  triangle(25, 0, -12, -12, -12, 12);

  fill(25, 130, 220);
  ellipse(0, 0, 25, 11);

  // Cabina
  fill(180, 255, 255);
  ellipse(9, 0, 9, 6);

  // Propulsor
  fill(255, 170, 60, 180);
  triangle(-12, -4, -28, 0, -12, 4);

  fill(70, 240, 255);
  circle(-13, 0, 4);

  pop();

  // AGUJERO NEGRO
  push();
  translate(width * 0.79, height * 0.68);

  // Halo
  noFill();
  stroke(150, 40, 255, 30);
  strokeWeight(24);
  circle(0, 0, 110);

  stroke(160, 60, 255, 110);
  strokeWeight(2);
  circle(0, 0, 120);
  circle(0, 0, 100);

  // Disco 
  push();
  rotate(frameCount * 2);

  noFill();
  stroke(190, 80, 255, 220);
  strokeWeight(5);
  ellipse(0, 0, 110, 62);

  stroke(70, 180, 255, 200);
  strokeWeight(3);
  ellipse(0, 0, 90, 45);

  stroke(240, 130, 255, 170);
  strokeWeight(2);
  arc(0, 0, 130, 75, 15, 160);
  arc(0, 0, 130, 75, 195, 340);

  pop();

  // Centro oscuro
  noStroke();
  fill(0, 0, 8);
  circle(0, 0, 52);

  fill(130, 50, 255, 30);
  circle(0, 0, 42);

  pop();

  textAlign(CENTER);
  fill(190, 110, 255);
  textSize(11);
  text("SINGULARIDAD", width * 0.79, height * 0.68 + 83);

  fill(140, 130, 190);
  textSize(9);
  text("CAMPO GRAVITACIONAL", width * 0.79,
       height * 0.68 + 98);

  // NAVE ABSORBIDA 
  push();

  translate(
    lerp(width * 0.58, width * 0.79,
         0.5 + 0.5 * sin(frameCount * 0.5)),
    lerp(height * 0.55, height * 0.68,
         0.5 + 0.5 * sin(frameCount * 0.5))
  );

  rotate(frameCount * 5);

  scale(0.12 + 0.88 * abs(cos(frameCount * 0.5)));

  noStroke();
  fill(255, 170, 80, 100);
  circle(0, 0, 40);

  fill(255, 200, 120);
  triangle(20, 0, -12, -10, -8, 0);
  triangle(20, 0, -12, 10, -8, 0);

  fill(80, 210, 255);
  ellipse(0, 0, 18, 8);

  fill(255, 100, 220);
  circle(-12, 0, 4);

  pop();

  // PANEL DE ESTADO IZQUIERDO
  noStroke();
  fill(5, 15, 40, 220);
  rect(20, height * 0.57, 190, 115, 8);

  noFill();
  stroke(40, 150, 230, 150);
  rect(20, height * 0.57, 190, 115, 8);

  noStroke();
  fill(80, 220, 255);
  textAlign(LEFT);
  textSize(11);
  text("ESTADO DEL SISTEMA", 32, height * 0.57 + 22);

  fill(70, 255, 180);
  circle(35, height * 0.57 + 42, 5);
  fill(170, 210, 230);
  text("REACTOR: ESTABLE", 47, height * 0.57 + 46);

  fill(70, 255, 180);
  circle(35, height * 0.57 + 62, 5);
  fill(170, 210, 230);
  text("RADARES: ACTIVOS", 47, height * 0.57 + 66);

  fill(255, 180, 70);
  circle(35, height * 0.57 + 82, 5);
  fill(170, 210, 230);
  text("GRAVEDAD: VARIABLE", 47, height * 0.57 + 86);

  // PANEL INFERIOR
  fill(5, 12, 35, 230);
  noStroke();
  rect(20, height - 65, width - 40, 45, 6);

  noFill();
  stroke(40, 120, 220, 140);
  rect(20, height - 65, width - 40, 45, 6);

  noStroke();
  fill(100, 220, 255);
  textAlign(LEFT);
  textSize(10);
  text("SATURNITA CONTROL SYSTEM", 35, height - 45);

  fill(160, 190, 225);
  text("MUEVE EL MOUSE: CONTROL DEL RADAR ALPHA",
       35, height - 30);

  textAlign(RIGHT);
  fill(70, 255, 190);
  text("ONLINE  ●", width - 35, height - 45);

  fill(140, 170, 210);
  text("NAVE 01: ACOPLAMIENTO  //  NAVE 02: ABSORCION",
       width - 35, height - 30);

  // ===== MARCAS DECORATIVAS DE PANTALLA =====
  stroke(60, 160, 255, 100);
  strokeWeight(2);

  line(12, 110, 12, 145);
  line(12, 110, 30, 110);

  line(width - 12, 110, width - 12, 145);
  line(width - 30, 110, width - 12, 110);

  line(12, height - 100, 12, height - 85);
  line(12, height - 85, 30, height - 85);

  line(width - 12, height - 100,
       width - 12, height - 85);
  line(width - 30, height - 85,
       width - 12, height - 85);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

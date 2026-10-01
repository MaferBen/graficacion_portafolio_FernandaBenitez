function setup() { 
  createCanvas(400, 400); 
} 

function draw() { 
  background(240); // Fondo gris claro

  stroke(0);
  strokeWeight(1.5);
  angleMode(DEGREES); // Grados para la rotación

  // Bebé oso
  push();
    translate(30, 200);
    scale(0.35);
    rotate(-8);
    
    ellipseMode(CENTER);
    
    // Orejas
    fill(225, 200, 160);
    stroke(0);
    strokeWeight(1.5);
    ellipse(-22, -22, 22, 22);
    ellipse(22, -22, 22, 22);

    // Cabeza base (0,0)
    ellipse(0, 0, 50, 46);

    // Hocico
    fill(255, 240, 210);
    ellipse(0, 8, 26, 20);

    // Ojos
    fill(0);
    ellipse(-12, -4, 6, 6);
    ellipse(12, -4, 6, 6);

    // Nariz
    ellipse(0, 2, 10, 7);

    // Chupón
    fill(240, 90, 140);
    ellipse(0, 12, 14, 10);
    fill(255, 180, 200);
    ellipse(0, 12, 6, 6);
    noFill();
    stroke(240, 90, 140);
    strokeWeight(2);
    ellipse(0, 18, 8, 8);
  pop();

  // Oso bebé grande
  push();
    translate(80, 200);
    scale(0.6);
    rotate(4);
    
    ellipseMode(CENTER);

    // Orejas
    fill(190, 150, 110);
    stroke(0);
    strokeWeight(1.5);
    ellipse(-22, -22, 22, 22);
    ellipse(22, -22, 22, 22);

    // Cabeza base (0,0)
    ellipse(0, 0, 50, 46);

    // Hocico
    fill(255, 240, 210);
    ellipse(0, 8, 26, 20);

    // Ojos
    fill(0);
    ellipse(-12, -4, 6, 6);
    ellipse(12, -4, 6, 6);

    // Nariz
    ellipse(0, 2, 10, 7);

    // Moño
    fill(220, 30, 40);
    stroke(0);
    strokeWeight(1.5);
    triangle(0, 23, -10, 17, -10, 29);
    triangle(0, 23, 10, 17, 10, 29);
    ellipse(0, 23, 5, 5);
  pop();

  // Oso Adolescente
  push();
    translate(150, 200);
    scale(0.85);
    rotate(-3);
    
    ellipseMode(CENTER);

    // Orejas
    fill(160, 110, 60);
    stroke(0);
    strokeWeight(1.5);
    ellipse(-22, -22, 22, 22);
    ellipse(22, -22, 22, 22);

    // Cabeza base (0,0)
    ellipse(0, 0, 50, 46);

    // Hocico
    fill(255, 240, 210);
    ellipse(0, 8, 26, 20);

    // Ojos
    fill(0);
    ellipse(-12, -4, 6, 6);
    ellipse(12, -4, 6, 6);

    // Nariz
    ellipse(0, 2, 10, 7);

    // Gorra
    fill(30, 140, 255);
    stroke(0);
    strokeWeight(1.5);
    rect(-28, -14, 15, 5);
    ellipse(0, -16, 46, 22);
  pop();

  // Oso adulto
  push();
    translate(240, 200);
    scale(1.0);
    rotate(3);
    
    ellipseMode(CENTER);

    // Orejas
    fill(110, 65, 25);
    stroke(0);
    strokeWeight(1.5);
    ellipse(-22, -22, 22, 22);
    ellipse(22, -22, 22, 22);

    // Cabeza base (0,0)
    ellipse(0, 0, 50, 46);

    // Hocico
    fill(255, 240, 210);
    ellipse(0, 8, 26, 20);

    // Ojos
    fill(0);
    ellipse(-12, -4, 6, 6);
    ellipse(12, -4, 6, 6);

    // Nariz
    ellipse(0, 2, 10, 7);

    // Bigote
    fill(40, 20, 10);
    stroke(0);
    strokeWeight(1.5);
    ellipse(-5, 10, 10, 6);
    ellipse(5, 10, 10, 6);
  pop();

  // Oso anciano 
  push();
    translate(330, 200);
    scale(1.1);
    rotate(-10);
    
    ellipseMode(CENTER);

    // Orejas
    fill(140, 135, 135);
    stroke(0);
    strokeWeight(1.5);
    ellipse(-22, -22, 22, 22);
    ellipse(22, -22, 22, 22);

    // Cabeza base (0,0)
    ellipse(0, 0, 50, 46);

    // Hocico
    fill(255, 240, 210);
    ellipse(0, 8, 26, 20);

    // Ojos
    fill(0);
    ellipse(-12, -4, 6, 6);
    ellipse(12, -4, 6, 6);

    // Nariz
    ellipse(0, 2, 10, 7);

    // Cejas y bastón
    stroke(255);
    strokeWeight(3);
    line(-16, -10, -7, -6);
    line(16, -10, 7, -6);

    stroke(120, 70, 20);
    strokeWeight(3.5);
    noFill();
    ellipse(24, 18, 10, 10);
    line(29, 18, 29, 45);
  pop();

}
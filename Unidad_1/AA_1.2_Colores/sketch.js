function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

// =====================================================
// PROPIEDADES DE COLOR Y BORDES
// =====================================================

// fill(R, G, B) define el color de RELLENO para las siguientes figuras.
// fill(61, 97, 141); // Azul tecnológico
   fill(255, 204, 0); // Amarillo
// fill(0, 150, 255); // Azul cielo
// fill(100, 255, 50); // Verde lima
  

// stroke(R, G, B) define el color del BORDE.
stroke(0, 0, 0); // Borde negro
  

// strokeWeight(píxeles) define el grosor del borde.
strokeWeight(2);


// =====================================================
// PRIMITIVAS GEOMÉTRICAS
// =====================================================

// RECTÁNGULO / CUADRADO: rect(x, y, ancho, alto)
// Dibujamos la cabeza/base en el centro
//noFill(); // No relleno
rect(100, 100, 200, 200);

fill(255, 0, 0); // Cambiamos el color después del rectángulo

// Cambiamos el color del pincel para los ojos
fill(255, 255, 255); // Relleno blanco
// stroke(0); // Borde negro
stroke(255, 0, 0); // Borde rojo
strokeWeight(4); // Grosor del trazo

// ELIPSES / CÍRCULOS
ellipse(150, 140, 40, 40);
ellipse(250, 140, 40, 40);

// Pintamos las pupilas de negro
fill(0); // Atajo: un solo número "0" equivale a fill(0, 0, 0)
ellipse(150, 150, 15, 15);
ellipse(250, 150, 15, 15);

// LÍNEAS: line(x1, y1, x2, y2)
// Dibujamos una boca recta usando dos puntos coordenados
strokeWeight(4); // Boca gruesa
line(150, 240, 250, 240);

// TRIÁNGULOS: triangle(x1, y1, x2, y2, x3, y3)
// Cuadrado detrás de la nariz
fill(100, 145, 250);
rect(175, 175, 50, 50);

// Una nariz en el centro de la cara usando 3 vértices
noStroke();
fill(230, 125, 34, 120); // Color naranja transparente
strokeWeight(1);
triangle(200, 180, 185, 210, 215, 210);

}
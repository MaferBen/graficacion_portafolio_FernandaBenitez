import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

// Crea la escena
const escena = new THREE.Scene();

// Define el color de fondo
escena.background = new THREE.Color(0x008080);

// Obtiene el elemento canvas del HTML
const canvasElement = document.querySelector('#mi-canvas');

// Crea la cámara de perspectiva
const camara = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Aleja la cámara del origen para observar los objetos
camara.position.z = 8;

// Crea el renderizador
const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    antialias: true
});

// Define el tamaño del renderizador
renderer.setSize(window.innerWidth, window.innerHeight);

// Ajusta la resolución para evitar pérdida de calidad
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Crea la geometría del cubo
const geometria = new THREE.BoxGeometry(2, 2, 2);

// Crea el material y define su color
const material = new THREE.MeshBasicMaterial({
    color: 0x8a2be2
});

// Combina la geometría y el material para crear la malla
const cubo = new THREE.Mesh(geometria, material);

// Agrega el cubo a la escena
escena.add(cubo);

// Crea la geometría de la esfera
const geometriaEsfera = new THREE.SphereGeometry(1, 32, 32);

// Crea el material y define su color
const materialEsfera = new THREE.MeshBasicMaterial({
    color: 0xffff00
});

// Combina la geometría y el material para crear la malla
const esfera = new THREE.Mesh(geometriaEsfera, materialEsfera);

// Coloca la esfera a la izquierda del cubo
esfera.position.x = -3;

// Agrega la esfera a la escena
escena.add(esfera);

// Crea la geometría del cono
const geometriaCono = new THREE.ConeGeometry(0.8, 1.8, 32);

// Crea el material y define su color
const materialCono = new THREE.MeshBasicMaterial({
    color: 0xff8800
});

// Combina la geometría y el material para crear la malla
const cono = new THREE.Mesh(geometriaCono, materialCono);

// Coloca el cono a la derecha del cubo
cono.position.x = 3;

// Agrega el cono a la escena
escena.add(cono);

// Función de animación
function animate() {

    // Solicita el siguiente fotograma
    requestAnimationFrame(animate);

    // Modifica la rotación del cubo
    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;

    // Modifica la rotación de la esfera
    esfera.rotation.x += 0.01;
    esfera.rotation.y += 0.02;

    // Modifica la rotación del cono
    cono.rotation.x += 0.01;
    cono.rotation.y += 0.02;

    // Renderiza la escena desde la cámara
    renderer.render(escena, camara);
}

// Ajusta la escena cuando cambia el tamaño de la ventana
window.addEventListener('resize', () => {

    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Inicia la animación
animate();
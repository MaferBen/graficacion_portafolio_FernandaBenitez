
import * as THREE from 'three';
import './style.css';

// Crea la escena
const escena = new THREE.Scene();
escena.background = new THREE.Color(0x1a1028);

// Crea la cámara
const camara = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camara.position.z = 5;

// Crea el renderizador
const renderizador = new THREE.WebGLRenderer({ antialias: true });
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

// Crea un cubo

// Define la forma del objeto: unidades de ancho, alto y profundidad.
const geometria = new THREE.BoxGeometry(1.5, 4.2, 0.8);
                                    // x,   y,   z

// Define cómo se ve la superficie. El color hexadecimal.
const material = new THREE.MeshStandardMaterial({
    color: 0x252535,
    metalness: 0.4,
    roughness: 0.5
});
                                       // Color del cubo 0x######

// Une la forma y el material para crear un objeto visible en la escena.
const cubo = new THREE.Mesh(geometria, material);

// Incorpora el objeto a la escena. Si no lo agregas, no aparecerá en el renderizado.
escena.add(cubo);

// Geometría + Material = Malla (Mesh)

const geometriaEsfera = new THREE.SphereGeometry(0.60, 32, 32);
                           // Radio, segmentos horizontales, segmentos verticales

// Crear esfera roja
const esferaRoja = new THREE.Mesh(
    geometriaEsfera,
    new THREE.MeshStandardMaterial({
        color: 0xff0000
    })
);

esferaRoja.position.y = 1.2; // Posición de la esfera
escena.add(esferaRoja);

// Crear esfera amarilla
const esferaAmarilla = new THREE.Mesh(
    geometriaEsfera,
    new THREE.MeshStandardMaterial({
        color: 0xffff00
    })
);

esferaAmarilla.position.y = 0; // Posición de la esfera
escena.add(esferaAmarilla);

// Crear esfera verde
const esferaVerde = new THREE.Mesh(
    geometriaEsfera,
    new THREE.MeshStandardMaterial({
        color: 0x00ff00
    })
);

esferaVerde.position.y = -1.2; // Posición de la esfera
escena.add(esferaVerde);

// Agregar iluminación
const luz = new THREE.DirectionalLight(0xffffff, 3);
luz.position.set(2, 3, 4);
escena.add(luz);

const luzAmbiente = new THREE.AmbientLight(0xffffff, 0.5);
escena.add(luzAmbiente);

// Animación
function animate() {
    requestAnimationFrame(animate);

    cubo.rotation.y += 0.010;

    esferaRoja.rotation.y += 0.01;
    esferaAmarilla.rotation.y += 0.01;
    esferaVerde.rotation.y += 0.01;

    renderizador.render(escena, camara);
}

animate();

// Este bloque permite que la escena se adapte cuando cambias el tamaño de la ventana del navegador.
window.addEventListener('resize', () => {
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();
    renderizador.setSize(window.innerWidth, window.innerHeight);
});

import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

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
const geometria = new THREE.BoxGeometry(1.8, 4.2, 1.4);
                                    // x,   y,   z

// Define cómo se ve la superficie. El color hexadecimal.
const material = new THREE.MeshStandardMaterial({
    color: 0x111115, // Color del cubo 0x######
    metalness: 0.8,
    roughness: 0.2
});

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
        color: 0xff0000,
        emissive: 0xff0000,
        emissiveIntensity: 0.5,
        roughness: 0.3
    })
);

esferaRoja.position.set(0, 1.2, 0.73); // Posición de la esfera
escena.add(esferaRoja);

// Crear esfera amarilla
const esferaAmarilla = new THREE.Mesh(
    geometriaEsfera,
    new THREE.MeshStandardMaterial({
        color: 0xffff00,
        emissive: 0xff0000,
        emissiveIntensity: 0.5,
        roughness: 0.3
    })
);

esferaAmarilla.position.set(0, 0, 0.73); // Posición de la esfera
escena.add(esferaAmarilla);

// Crear esfera verde
const esferaVerde = new THREE.Mesh(
    geometriaEsfera,
    new THREE.MeshStandardMaterial({
        color: 0x00ff00,
        emissive: 0xff0000,
        emissiveIntensity: 0.5,
        roughness: 0.3
    })
);

esferaVerde.position.set(0, -1.2, 0.73); // Posición de la esfera
escena.add(esferaVerde);

// Agregar iluminación
const luz = new THREE.DirectionalLight(0xffffff, 2.5);
luz.position.set(3, 4, 5);
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

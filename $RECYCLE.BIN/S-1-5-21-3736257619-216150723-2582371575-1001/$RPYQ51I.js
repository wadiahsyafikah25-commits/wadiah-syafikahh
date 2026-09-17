// 1. Setup Scene, Camera, & Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. Buat Titik Partikel Hati
const particleCount = 5000;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
    let t = Math.PI * (Math.random() * 2 - 1);
    let u = Math.PI * (Math.random() * 2 - 1);

    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
    let z = u * 2;

    positions[i * 3] = x * 0.15;
    positions[i * 3 + 1] = y * 0.15;
    positions[i * 3 + 2] = z * 0.15;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// 3. Material Partikel
const material = new THREE.PointsMaterial({
    color: 0xff0055,
    size: 0.05,
    transparent: true,
    opacity: 0.8
});

const heartParticles = new THREE.Points(geometry, material);
scene.add(heartParticles);

camera.position.z = 5;

// 4. Loop Animasi
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    heartParticles.rotation.y = elapsedTime * 0.5;
    heartParticles.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;

    renderer.render(scene, camera);
}

animate();

// Responsif Layar
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
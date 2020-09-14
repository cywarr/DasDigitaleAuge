import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.120.1/build/three.module.js';

console.log("Three.js r" + THREE.REVISION);

let scene = new THREE.Scene();
let camera = new THREE.Camera();
let renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(1024, 512);
renderer.domElement.id = "dasAuge";
console.log(renderer.domElement);
document.body.appendChild(renderer.domElement);

let dasAuge = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("./images/Energy.png")
}));
scene.add(dasAuge);

renderer.setAnimationLoop(()=>{
    renderer.render(scene, camera);
})





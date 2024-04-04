const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const container = document.getElementById('container'); // No longer used. Remove later.

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor("#0A192F"); // Blueish Background.

document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
const material = new THREE.MeshBasicMaterial( { color: 0x239B9B, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Create the outline cube
const outlineMaterial = new THREE.MeshBasicMaterial({ color: 0xD2DFEF, side: THREE.BackSide });
const outlineCube = new THREE.Mesh(geometry, outlineMaterial);
outlineCube.scale.multiplyScalar(1.03); // Scale up the outline cube slightly
scene.add(outlineCube);

cube.position.x = 4.5;
outlineCube.position.x = 4.5;


cube.rotation.x += 45;
outlineCube.rotation.x += 45;

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	outlineCube.rotation.x += 0.01;
	outlineCube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
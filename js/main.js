var colors = {
    black: "#000000",
    white: "#FFFFFF",
    white_blue: "#3232FF",
    blue: "#0000FF",
    yellow: "#FFFF00"
};
var scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH, renderer, container;
HEIGHT = window.innerHeight;
WIDTH = window.innerWidth;
scene = new THREE.Scene();
//create Circle
var geometry = new THREE.CircleGeometry( 2, 16 );
var material = new THREE.MeshBasicMaterial( { color: colors.white_blue } );
var circle = new THREE.Mesh( geometry, material );
circle.position.z = -2;
scene.add( circle );
//create fog
scene.fog = new THREE.Fog(0xf7d9aa, 10, 10);
// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 100, WIDTH/HEIGHT, 1, 1000 );
camera.position.z = 3;

// Create a renderer with Antialiasing
renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor(colors.black);

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: colors.yellow } );
var cube = new THREE.Mesh( geometry, material );

// Add cube to Scene
scene.add( cube );

// Render Loop
var setcolor;
var pluscolor = 0;
var render = function () {
    requestAnimationFrame( render );
    cube.material.color = new THREE.Color(setcolor);
    pluscolor += 1;
    setcolor = (pluscolor != 255) ? "rgb("+pluscolor+","+pluscolor+","+pluscolor+")" : pluscolor=0;
    setcolor = "rgb("+pluscolor+","+pluscolor+","+pluscolor+")";
    circle.rotation.x += 0.01;
    circle.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

// Render the scene
    renderer.render(scene, camera);
};

render();
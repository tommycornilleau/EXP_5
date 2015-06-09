
var renderer;
var scene;
var camera;

function initThree(){

    // //// INIT
    // scene = new THREE.Scene();
    // camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000);

    // ////RENDERER
    // renderer = new THREE.WebGLRenderer();
    // renderer.setClearColor(0x000000, 1.0);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.shadowMapEnabled = true;

    // // position and point the camera to the center of the scene
    // camera.position.x = 500;
    // camera.position.y = 40;
    // camera.position.z = 1000;
    // camera.lookAt( scene.position );

    // // add spotlight for the shadows
    // var spotLight = new THREE.SpotLight(0xffffff);
    // spotLight.position.set(10, 20, 20);
    // spotLight.shadowCameraNear = 20;
    // spotLight.shadowCameraFar = 50;
    // spotLight.castShadow = true;
    // scene.add(spotLight);

    // scene.add(new THREE.AmbientLight(0xffffff));

    // var geometry = new THREE.SphereGeometry(800, 80, 80);

    // var material = new THREE.MeshLambertMaterial( {
    //     wireframe: true,
    //     color: 'white'
    // });

    // Mesh = new THREE.Mesh(geometry, material);
    // scene.add(Mesh);

    // document.body.appendChild(renderer.domElement);

    // control = new function(){
    //     this.camX = 1500;
    //     this.camY = 1500;
    //     this.camZ = 1500;
    // };
    // addControlGui(control);
    // addStatsObject();

    // render();

    // console.log("Initialazing!");

    // window.addEventListener('mousemove', createWave, false);
    window.addEventListener('resize', handleResize, false);

}

window.onload = initThree;



window.onload = function() {
    var abtract = new draw();
}

var draw = function() {
    var renderer;
    var scene;
    var camera;

    this.init();
}

draw.prototype.init = function(renderer, scene, camera){

    this.container = document.getElementById('exp');
    // this.container = document;

    //// INIT
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000);

    ////RENDERER
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0x000000, 1.0);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMapEnabled = true;

    // position and point the camera to the center of the scene
    this.camera.position.x = 500;
    this.camera.position.y = 40;
    this.camera.position.z = 1000;
    this.camera.lookAt( this.scene.position );

    // add spotlight for the shadows
    this.spotLight = new THREE.SpotLight(0xffffff);
    this.spotLight.position.set(10, 20, 20);
    this.spotLight.shadowCameraNear = 20;
    this.spotLight.shadowCameraFar = 50;
    this.spotLight.castShadow = true;
    this.scene.add( this.spotLight );

    this.scene.add(new THREE.AmbientLight(0xffffff));

    this.geometry = new THREE.SphereGeometry(800, 80, 80);

    this.material = new THREE.MeshLambertMaterial( {
        wireframe: true,
        color: 'white'
    });

    this.Mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.Mesh);

    this.container.appendChild(this.renderer.domElement);

    this.control = new function(){
        this.camX = 1500;
        this.camY = 1500;
        this.camZ = 1500;
    };
    this.addControlGui(this.control);
    this.addStatsObject();

    this.render();

    console.log("Initialazing!");
}

draw.prototype.render = function() {
    this.camera.position.x = this.control.camX;
    this.camera.position.y = this.control.camY;
    this.camera.position.z = this.control.camZ;
    this.camera.lookAt( this.scene.position );

    this.stats.update();
    this.renderer.render(scene, camera);

    requestAnimationFrame(this.render);
}

draw.prototype.addControlGui = function(controlObject) {
    var gui = new dat.GUI();
    gui.add(controlObject, 'camX', -2000, 2000);
    gui.add(controlObject, 'camY', -2000, 2000);
    gui.add(controlObject, 'camZ', -2000, 2000);
}

draw.prototype.addStatsObject = function() {
    this.stats = new Stats();
    this.stats.setMode(0);

    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '0px';
    this.stats.domElement.style.top = '0px';

    document.body.appendChild(this.stats.domElement);
}

draw.prototype.handleResize = function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
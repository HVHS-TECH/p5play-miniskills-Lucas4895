/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	console.log("setup: ");
    cnv = new Canvas(0, 0);
	world.gravity.y = 10;
	rectangle = new Sprite(500, 200, 100, 150, 10);
    rectangle.color = '#222';
	rectangle.rotationSpeed = 2;
	rectangle.bounciness = 3;
	platform_1 = new Sprite(500, 500, 500, 10, 'k');
	platform_1.rotation = 30.5;
	platform_2 = new Sprite(800, 200, 500, 10, 'k');
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#fff');
}

/*******************************************************/
//  END OF APP
/*******************************************************/
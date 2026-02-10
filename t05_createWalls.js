/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
    cnv = new Canvas(0, 0);
	world.gravity.y = 10;
	rectangle = new Sprite(500, 200, 100, 150, 10);
    rectangle.color = '#222';
	rectangle.rotationSpeed = 2;
	rectangle.bounciness = 3;
    wallLH  = new Sprite(0, height/2, 15, height, 'k');
    wallLH.color = 'black';
	wallRH  = new Sprite(windowWidth, height/2, 15, height, 'k');
	wallTop = new Sprite(windowWidth/2, height, windowWidth, 15, 'k')
	wallBot = new Sprite(windowWidth/2, height/20, windowWidth, 15, 'k');
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
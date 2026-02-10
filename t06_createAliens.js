/*******************************************************/
// P5.play: t06_createAliens
// Create aliens on mouse click
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	randNum = random(100, 800);
    cnv = new Canvas(900, 900);
	world.gravity.y = 10;
	rectangle = new Sprite(500, 200, 100, 150, 10);
    rectangle.color = '#222';
	rectangle.rotationSpeed = 2;
	rectangle.bounciness = 3;
    wallLH  = new Sprite(0, height/2, 15, height, 'k');
    wallLH.color = 'black';
	wallRH  = new Sprite(900, height/2, 15, height, 'k');
	wallTop = new Sprite(windowWidth/2, height, windowWidth, 15, 'k')
	wallBot = new Sprite(windowWidth/2, height/20, windowWidth, 15, 'k');

    for (i = 0; i < alien; i++) {
     alien = new Sprite(randNum, randNum, 20, 20);
	 alien.color = '#999'
     alien.vel.x = 3;
     alien.vel.y = 4;
     alien.bounciness = 1;
     alien.friction = 0;
    };
};
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#fff');
};

/*******************************************************/
//  END OF APP
/*******************************************************/
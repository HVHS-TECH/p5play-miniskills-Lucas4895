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
    randNumForAliens = random(3, 10);
    cnv = new Canvas(900, 900);
	world.gravity.y = 10;


	rectangle = new Sprite(500, 200, 100, 150, 10);
    rectangle.color = '#222';
	rectangle.rotationSpeed = 2;
	rectangle.bounciness = 1;
    
    wallLH  = new Sprite(0, height/2, 15, height, 'k');
    wallLH.color = "#000"
	wallRH  = new Sprite(900, height/2, 15, height, 'k');
    wallRH.color = "#321"
	wallTop = new Sprite(windowWidth/2, height, windowWidth, 15, 'k')
    wallTop.color = "#764"
	wallBot = new Sprite(windowWidth/2, height/20, windowWidth, 15, 'k');
    wallBot.color = "#981"

    for (i = 0; i < randNumForAliens; i++) {
     alien = new Sprite(randNum, randNum, 20, 20);
	 alien.color = '#999'
     alien.vel.x = randNumForAliens;
     alien.vel.y = randNumForAliens;
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
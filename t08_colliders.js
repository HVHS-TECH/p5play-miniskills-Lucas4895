/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
    cnv = new Canvas(900, 900);
	world.gravity.y = 10;


	rectangle = new Sprite(500, 200, 100, 150, 10);
    rectangle.color = '#222';
	rectangle.rotationSpeed = 2;
	rectangle.bounciness = 1;
	  
/*******************************************************/
//wall
    wallLH  = new Sprite(0, height/2, 15, height, 'k');
    wallLH.color = "#000"
	wallRH  = new Sprite(900, height/2, 15, height, 'k');
    wallRH.color = "#321"
	wallTop = new Sprite(windowWidth/2, height, windowWidth, 15, 'k')
    wallTop.color = "#764"
	wallBot = new Sprite(windowWidth/2, 0, windowWidth, 15, 'k');
    wallBot.color = "#981"
/*******************************************************/

    alienGroup = new Group();
    for (i = 0; i < 5; i++) {
    randNum = random(100, 800);
    randVel = random(-50, 50);
     alien = new Sprite(randNum, randNum, 20, 20);
	 alien.color = '#999'
     alien.vel.x = randVel;
     alien.vel.y = randVel;
     alien.bounciness = 1;
     alien.friction = 0;
     alienGroup.add(alien);
	 alienGroup.collides(rectangle, func2Call);
     function func2Call(alien, rectangle) {
     // Delete the alien which was hit
     alien.remove();

     };
    };
};




	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("#fff")
}

/*******************************************************/
//  END OF APP
/*******************************************************/
/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/

function preload() {

  imgBG   = loadImage('../assets/images/spaceIMG.jpg');

  imgFace = loadImage('../assets/images/face.png');

}	
/*******************************************************/
// setup()
/*******************************************************/


function setup() {
	console.log("setup: ");
    cnv = new Canvas(900, 900);
	world.gravity.y = 10;


ball_1 = new Sprite(width/2, height/2, 50, 'd');

ball_1.bounciness = 1;

ball_1.friction   = 0;

ball_1.image = (imgFace);

imgFace.resize(50, 50);
	  
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
	 alienGroup.collides(ball_1, func2Call);
     function func2Call(alien, ball_1) {
     // Delete the alien which was hit
     alien.remove();

     };
    };
};
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG);
};
/*******************************************************/
//  END OF APP
/*******************************************************/
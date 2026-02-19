/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
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

xPos = mouseX;
yPos = mouseY;

ball_1 = new Sprite(width/2, height/2, 50, 'd');

ball_1.bounciness = 1;

ball_1.friction   = 0;

ball_1.image = (imgFace);

imgFace.resize(50, 50);


	  
/*******************************************************/
//walls
    wallLH  = new Sprite(0, height/2, 15, height, 'k');
    wallLH.color = "#000"
	wallRH  = new Sprite(900, height/2, 15, height, 'k');
    wallRH.color = "#321"
	wallTop = new Sprite(windowWidth/2, height, windowWidth, 15, 'k')
    wallTop.color = "#764"
	wallBot = new Sprite(windowWidth/2, 0, windowWidth, 15, 'k');
    wallBot.color = "#981"
/*******************************************************/



/*******************************************************/
//alienGroup
    alienGroup = new Group();
    for (i = 0; i < 50; i++) {
    randNum = random(100, 800);
     alien = new Sprite(randNum, randNum, 20, 20);
	 alien.color = '#999'
     alien.bounciness = 1.5;
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



/*******************************************************/
// draw()
/*******************************************************/
function draw() {



/*******************************************************/
//Get time, seconds and milliseconds

	let ms = millis();
    const d = new Date();
/*******************************************************/



	background(imgBG);
    ball_1.moveTowards(mouseX, mouseY, 0.1);



/*******************************************************/
//Texts
    fill(' white');
    textSize(32);
    text(`Startup time: ${round(ms,2)}ms`, 5, width/2, height/2);
/*******************************************************/



/*******************************************************/
//Keyboard inputs
	if (kb.pressing('left')) {
		alienGroup.vel.x = -10;

    // Set sprite's velocity to the left
	}
	
	else if (kb.pressing ('right')) { 
		alienGroup.vel.x = +10;
	};
	
	if (kb.released('left')) {
		alienGroup.vel.x = 0;
    // Set sprite's velocity to zero
	}

	else if (kb.released('right')) {
		alienGroup.vel.x = 0;
	};

	if (kb.pressing ('down')) {
		alienGroup.vel.y = +10;
	}

	else if (kb.pressing ('up')) {
		alienGroup.vel.y = -10;
	}
};

/*******************************************************/
//  END OF APP
/*******************************************************/
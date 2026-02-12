/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	width = random(300,600);
height = random(300,600);
spriteX= random(50,150);
spriteY=  random(50,150);  ;

cnv = new Canvas(width, height);


red = new Sprite(0, 0, spriteX, spriteY);
red.color = 'red';

green = new Sprite( width, 0,  spriteX, spriteY);
green.color = 'green';

blue = new Sprite( 0, height ,  spriteX, spriteY);
blue.color = 'blue';

yellow = new Sprite(width, height ,  spriteX, spriteY);
yellow.color = 'yellow';

purple = new Sprite(width/2, height/2,  spriteX, spriteY);
purple.color = 'purple';

}


/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("#ffffff");
}

/*******************************************************/
//  END OF APP
/*******************************************************/
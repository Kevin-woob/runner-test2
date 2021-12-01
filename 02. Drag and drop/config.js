class Config{
	constructor(cw,ch){
		
// engine variables
var w = cw; 
var h = ch;
window.GoldenRatio = (h + w) / h; 
window.runningSpeed = w  * 0.006;
window.hillSpeed = 0;
window.maxFrames = 0;
window.skyColor = "#7fe1f0";
window.FRAMES_PER_SECOND = 30;  // Valid values are 60,30,20,15,10...
window.FRAME_MIN_TIME = (1000/60) * (60 / FRAMES_PER_SECOND) - (1000/60) * 0.5;

//ground
window.ground = '#1F8C31';
window.groundHeight = h * 0.125;

// player 
window.playerWidth = (h * 0.1) * GoldenRatio;
window.playerHeight = (h * 0.1) * GoldenRatio;
window.playerX = 0 - (playerHeight *.7);
window.playerY = h - (groundHeight *0.6 ) - playerHeight;
window.playerJumpFrames = 12;
window.playerWalkFrames = 6;
window.jumpSpeed = runningSpeed;


// common attributes of the frames and words
window.frameWidth = playerWidth;//ch * ((((ch + cw)  / ch) / 10 ) + .05);
window.frameHeight = playerHeight;//ch * ((((ch + cw)  / ch) / 10 ) + .05);
window.frameGap = (cw - (frameWidth * 3)) /4;;
window.frameY = frameHeight * .2;
window.wordsY = playerY;

//frame1 
window.frame1X = frameGap;


//frame2
window.frame2X = (frameGap *2)+ frameWidth;


//frame3 
window.frame3X = (frameGap *3)+ (frameWidth * 2);

//Word1
window.word1X = frameGap;
//Word2
window.word2X = (frameGap *2)+ frameWidth;
//Word3
window.word3X = (frameGap *3)+ (frameWidth * 2);


//door
window.doorWidth = frameWidth / 1.5;
window.doorHeight = playerHeight * 1.5;
window.doorX = w - (doorWidth / 2);
window.doorY = playerY - groundHeight;



// start button 
window.startBtnWidth = w * 0.45;
window.startBtnHeight = h * 0.15;
window.startBtnX = (w *.5) - (startBtnWidth *.5);
window.startBtnY = (h *.5) - (startBtnHeight *.5);
	}
}


















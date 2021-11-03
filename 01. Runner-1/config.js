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
window.playerX = playerWidth  * 0.5;
window.playerY = h - (groundHeight *0.6 ) - playerHeight;
window.playerJumpFrames = 12;
window.playerWalkFrames = 6;
window.jumpSpeed = runningSpeed;


//near bush
window.bush1Color = '#256D1B'; //near bush
window.bushX = w + groundHeight;
window.bushY = h - groundHeight;
window.bushSizeRange =[playerHeight * 0.1,playerHeight * 0.5];



//hills
window.hillsColor = '#1e5627';	 // far bush or hills
window.hillsX = w + groundHeight * 3;
window.hillsY = h - groundHeight;
window.hillsSizeRange = [groundHeight / 2,groundHeight * 3];


//trees
window.treesWidth = playerWidth * 1.1;
window.treesHeight = playerHeight * 1.5;
window.treesX = w;
window.treesY = h - (groundHeight + (treesHeight * .9));

//pebles
window.peblesColor = "#59625f";
window.peblesX = w + 5;
window.peblesSize = [1.5, 3];
window.pebYRandom = [h - groundHeight * .1, h - groundHeight];


// reward/coin counter
window.rewardSize = playerWidth  *0.6;
window.rewardX = runningSpeed;
window.rewardY = runningSpeed;

//coins
window.coinWidth = playerWidth;
window.coinHeight = playerHeight;
window.coinX = w + coinWidth;
window.coinY = [playerY,playerY - playerHeight];


//door
window.doorWidth = playerHeight * 1.5;
window.doorHeight = playerHeight * 1.5;
window.doorX = w;
window.doorY = playerY - groundHeight;

// popup text
window.popTextX = w * 0.5;
window.popTextY = h * 0.5;
window.popTextSize = 100;

//clouds
window.cloudColor = "#fff";
window.cloudSize = [GoldenRatio * 5,GoldenRatio* 10];
window.cloudMul = [1.1,1.5];
window.cloudY = [h*.1,h *.6];
window.cloudSpeed = runningSpeed * 0.6;

// start button 
window.startBtnWidth = w * 0.45;
window.startBtnHeight = h * 0.15;
window.startBtnX = (w *.5) - (startBtnWidth *.5);
window.startBtnY = (h *.5) - (startBtnHeight *.5);
	}
}


















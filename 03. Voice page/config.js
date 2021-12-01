class Config{
	constructor(cw,ch){
		
// engine variables
var w = cw; 
var h = ch;
window.GoldenRatio = (h + w) / h; 
window.FRAMES_PER_SECOND = 30;  // Valid values are 60,30,20,15,10...
window.FRAME_MIN_TIME = (1000/60) * (60 / FRAMES_PER_SECOND) - (1000/60) * 0.5;
window.recordDuration = 3000;

//buttons general settings 
window.btnWidth = (h * 0.05) * GoldenRatio;
window.btnHeight = (h * 0.05) * GoldenRatio;

//word image
window.wordWidth = (h * 0.3) * GoldenRatio;
window.wordHeight = (h * 0.3) * GoldenRatio;
window.wordX = wordWidth / 9;
window.wordY = (h * 0.01) * GoldenRatio;

//play button 
window.playBtnX = wordWidth + wordX;
window.playBtnY =  wordY;

//record button 
window.recordBtnX = playBtnX + btnWidth * 1.5;
window.recordBtnY = playBtnY;

//play recorded button 
window.recordPlayBtnX =  ((h < (wordY + wordHeight + (btnHeight *2))) ? playBtnX : wordX);
window.recordPlayBtnY = ((h < (wordY + wordHeight + (btnHeight *2))) ? (playBtnY + btnHeight)* 3 : wordY + wordHeight);

//progress bar 
window.progressX = 0;
window.progressY = 0;
window.progressWidth = 300;

//visualizer 
window.coords = {
	w:((w - (recordPlayBtnX + btnWidth)) * 0.8),
	h:btnHeight,
	x:recordPlayBtnX + btnWidth + (btnWidth *.5),
	y:recordPlayBtnY + btnHeight
}





// start button 
window.startBtnWidth = w * 0.45;
window.startBtnHeight = h * 0.15;
window.startBtnX = (w *.5) - (startBtnWidth *.5);
window.startBtnY = (h *.5) - (startBtnHeight *.5);
	}
}


















window.onload = (function (){
	var i = new Init(['canvas']);
	var e = new Config(cw,ch);
init();

});

function init(){
	window.started = false;

	//word image
	window.word = document.getElementById("word");
	window.start_btn = document.getElementById("start_btn");

	// audio to listen
	window.wordAudio = document.getElementById("wordAudio");
	window.audioPlayImg = document.getElementById("wordPlay");

	//record button 
	// window.recordImg = document.getElementById("recordBtn");
	window.recordImg = document.getElementById("record");
	window.recorderAudio = new Audio();
	window.recorder = new AudioRecorder(recordDuration,new Audio());
	// recorder.record();
	// window.v = new AudioVisualizer(ctx,coords,recorderAudio);

	//listen own recording 
	// window.ownRecordImg = document.getElementById("ownAudio");
	window.ownRecordImg = document.getElementById("recordPlay");



window.p = 10;
window.startedRecording = false;
start();
}

function start(){
	if(!started){
		/// implement for tap too, else play not working
		canvas.onclick = function(){
			started = true;
			document.addEventListener('touchend', ()=>wordAudio.play());
				
		};
		canvas.ontouchend = function(){
			started = true;
			document.addEventListener('touchend', ()=>wordAudio.play());
			
		};
	
		ctx.drawImage(start_btn,startBtnX,startBtnY,startBtnWidth,startBtnHeight);
		requestAnimationFrame(start);
		return;
	}
	ctx.clearRect(0,0,cw,ch);
	//play button
	ctx.drawImage(audioPlayImg,playBtnX,playBtnY,btnWidth,btnHeight);
	if(mouse.m_down && mouse.mouseClicked(mouse.x,mouse.y,{x:playBtnX,y:playBtnY,w:btnWidth,h:btnHeight})){
		wordAudio.muted = false;
		wordAudio.play();
		audioPlayImg = document.getElementById('wordPlay2');
	}
	//record button
	ctx.drawImage(recordImg,recordBtnX,recordBtnY,btnWidth,btnHeight);
	if(mouse.m_down && mouse.mouseClicked(mouse.x,mouse.y,{x:recordBtnX,y:recordBtnY,w:btnWidth,h:btnHeight})){
		if(!startedRecording){
			wordAudio.muted = true;
			recorderAudio = recorder.record();
			startedRecording = true;
			recordImg = document.getElementById("record2");
			window.timeStart = Date.now();
			
		}
		
	}
	// recorded audio button
	ctx.drawImage(ownRecordImg,recordPlayBtnX,recordPlayBtnY,btnWidth,btnHeight);
	if(mouse.m_down && mouse.mouseClicked(mouse.x,mouse.y,{x:recordPlayBtnX,y:recordPlayBtnY,w:btnWidth,h:btnHeight})){
		wordAudio.muted = true;
		window.v = new AudioVisualizer(ctx,coords,recorderAudio);
		ownRecordImg = document.getElementById("recordPlay2");
		// v.audioElement.play();
		document.addEventListener('touchend', ()=>v.audioElement.play());
		document.getElementById('error').innerHTML = v.audioElement.duration;
		// v.noise();
		


		
	}
	ctx.drawImage(word,wordX,wordY,wordWidth,wordHeight);
	if(!mouse.m_down){
		startedRecording = false;
		audioPlayImg = document.getElementById('wordPlay');
		recordImg = document.getElementById("record");
		ownRecordImg = document.getElementById("recordPlay");
	}
	if (typeof v !== 'undefined'){
		v.play();}
window.a = new roundRect(playBtnX, playBtnY *10, progressWidth, 20, 10,'#27AAE1');
	if((typeof timeStart !== 'undefined') && (Date.now() - timeStart)< recordDuration){

		var tp = Date.now() - timeStart;
		var rt = recordDuration - tp;
		
		var prs = (tp / recordDuration);
		p = (progressWidth * prs);
		

	}
	window.a1 = new roundRect(playBtnX, playBtnY *10, p, 20, 10,'#F7941D');






	requestAnimationFrame(start);
}



//////////////////////testing //////////////


function roundRect(x, y, w, h, radius,color)
{
  // var canvas = document.getElementById("canvas");
  // var context = canvas.getContext("2d");
  var r = x + w;
  var b = y + h;
  window.region = new Path2D();
  // region.beginPath();
  // region.strokeStyle="green";
  // region.fill();
  // region.fillStyle = 'red';
  region.lineWidth="4";
  region.moveTo(x+radius, y);
  region.lineTo(r-radius, y);
  region.quadraticCurveTo(r, y, r, y+radius);
  region.lineTo(r, y+h-radius);
  region.quadraticCurveTo(r, b, r-radius, b);
  region.lineTo(x+radius, b);
  region.quadraticCurveTo(x, b, x, b-radius);
  region.lineTo(x, y+radius);
  region.quadraticCurveTo(x, y, x+radius, y);
  // region.stroke();
  region.closePath();


///new to test

// region = new Path2D();
// region.moveTo(30, 90);
// region.lineTo(110, 20);
// region.lineTo(240, 130);
// region.lineTo(60, 130);
// region.lineTo(190, 20);
// region.lineTo(270, 90);
// region.closePath();

// Fill path
ctx.fillStyle = color;
ctx.fill(region, 'evenodd');

}




/////////////end of test/////////////



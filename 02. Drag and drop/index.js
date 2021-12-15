window.onload = (function (){
	var i = new Init(['canvas']);
	var e = new Config(cw,ch);
init();

});

function init(){

// alert("loaded");

 //audios
  window.a_done = document.getElementById("done");
  
 // window.voice = new SoundPlayer(a_done);


 ///images
 window.start_btn = document.getElementById("start_btn");
 window.img1 = document.getElementById("img1");
 window.img2 = document.getElementById("img2");
 window.img3 = document.getElementById("img3");

 window.door_img = document.getElementById("door");


//frames or placeholders for matching
window.frame1 = new GrayScaleImage(img1,frame1X, frameY,frameWidth,frameHeight);
window.frame2 = new GrayScaleImage(img2, frame2X, frameY,frameWidth,frameHeight);
window.frame3 = new GrayScaleImage(img3, frame3X, frameY,frameWidth,frameHeight);


// objects to drag and drop on the frames
window.obj1 = new img_holder(img1,word1X,wordsY,frameWidth,frameHeight);
window.obj2 = new img_holder(img2,word2X, wordsY,frameWidth,frameHeight);
window.obj3 = new img_holder(img3,word3X, wordsY,frameWidth,frameHeight);

// if object has reached the destination
obj1['set'] = false;
obj2['set'] = false;
obj3['set'] = false;

// pther game variables
window.player_imgs = document.querySelectorAll(".player");
window.player = new Runner(ctx,player_imgs,playerX,playerY,playerWidth,playerHeight);
window.frames = 0;
// window.bgTest = document.getElementById("underground");
window.door = new img_holder(door_img,doorX ,doorY,doorWidth,doorHeight);

//empty 
window.currentObj = null;
window.objPlacing = false;

start();
}


function start(){

	if(!started){
		/// implement for tap too, else play not working
		canvas.onclick = function(){
			started = true;
			document.addEventListener('touchend', ()=>a_done.play());
				
		};
		
	
		ctx.drawImage(start_btn,startBtnX,startBtnY,startBtnWidth,startBtnHeight);
		requestAnimationFrame(start);
		return;
	}
	

	
	frames++;
	ctx.clearRect(0,0,cw,ch);
	//frames
	frame1.draw();
	frame2.draw();
	frame3.draw();

	//objects for dragging
	obj1.draw();
	obj2.draw();
	obj3.draw();

	//door
	
	player.draw();
	door.draw();
	
	//if mouse is down 
	if(mouse.m_down ){


		
	if(mouse.mouseClicked(mouse.x,mouse.y,obj2)){

		if (!obj2.set &&(currentObj == null || currentObj == obj2)){
			// document.addEventListener('touchend',a2.play() );
				// a2.play();
				a_done.currentTime = 1.4;
				// voice.play();
				
			currentObj = obj2;
				obj2.update(mouse.x,mouse.y, 25);}
		}
	if(mouse.mouseClicked(mouse.x,mouse.y,obj1)){

		if (!obj1.set &&(currentObj == null || currentObj == obj1)){
		
				// document.addEventListener('touchend',a1.play() ,{once:true});
				// document.addEventListener('touchend', ()=>a1.play());

				// a1.play()
				a_done.currentTime = 1.4;
				// voice.play();
				
				currentObj = obj1;
				obj1.update(mouse.x,mouse.y, 25);}
		}
	if(mouse.mouseClicked(mouse.x,mouse.y,obj3)){

		if (!obj3.set &&(currentObj == null || currentObj == obj3)){
		
				// a3.play();
				a_done.currentTime = 1.4;
				// voice.play();
				
				currentObj = obj3;
				obj3.update(mouse.x,mouse.y, 25);}
		}

	

	}
	
	if (rectCol(obj1,frame1)){
		
		if(!obj1.set){
			mouse.m_down = false;
			a_done.currentTime = 0;
			// voice.play();
		}
		
		
		if((Math.floor(obj1.x )!= Math.floor(frame1.x)) || (Math.floor(obj1.y )!= Math.floor(frame1.y))){
			objPlacing = true;
			obj1.update(frame1.x + (frame1.w / 2),frame1.y + (frame1.h / 2),5);
		
		}
		else{
			currentObj = null;
			obj1.set = true;
			objPlacing = false;
		}
		
		


	}

	if (rectCol(obj2,frame2)){
		
		if(!obj2.set){
			mouse.m_down = false;
			a_done.currentTime = 0;
			
			// a_done.play();
		}
	
		if(Math.floor(obj2.x )!= Math.floor(frame2.x) || Math.floor(obj2.y )!= Math.floor(frame2.y)){
			objPlacing = true;
		obj2.update(frame2.x + (frame2.w / 2),frame2.y + (frame2.h / 2),5);}
		else{
			currentObj = null;
			obj2.set = true;
			objPlacing = false;
		}
		
	}
if (rectCol(obj3,frame3)){
		
		if(!obj3.set){
			mouse.m_down = false;
			a_done.currentTime = 0;
		}
		
	
		if(Math.floor(obj3.x )!= Math.floor(frame3.x) || Math.floor(obj3.y )!= Math.floor(frame3.y)){
			objPlacing = true;
		obj3.update(frame3.x + (frame3.w / 2),frame3.y + (frame3.h / 2),5);}
		else{
			currentObj = null;
			obj3.set = true;
			objPlacing = false;
		}
		
	}
	if(obj1.set && obj2.set && obj3.set){
		player.run();
		player.update(5);
		

		if(player.hit(door)){
			setTimeout(function(){ 
			
			window.location.replace("../03. Voice page/index.html");

		}, 2000);
		}
		
	}
	requestAnimationFrame(start);
}


function rectCol(obj1,obj2){

	if (obj1.x < obj2.x + obj2.w &&
   obj1.x + obj1.w > obj2.x &&
   obj1.y < obj2.y + obj2.h &&
   obj1.y + obj1.h > obj2.y){

		return true;
	}
	else{
		return false;
	}

}
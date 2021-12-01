window.onload = (function (){
	// document.getElementById("loader").style.display="none";
	setUp();
	init();

});

function setUp (){
	var i = new Init(['canvas']);
	var e = new Config(cw,ch);
	// console.log("resized!");


}

// Function to generate random number 
function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

function init(){


window.wordAudio = document.getElementById('wordAudio');
window.bgAudio = document.getElementById('bgMusic');
window.start_btn = document.getElementById("start_btn");

bgAudio.loop = true;

window.frames = 0;
window.last_frame = 0;

//Player variables
window.player_imgs = document.querySelectorAll(".player");
window.player = new Runner(ctx,player_imgs,playerX,playerY,playerWidth,playerHeight);
window.runner_go = runningSpeed; // after the end door apears, the scene stops andplayer contiues to walk

//Scene variables:

// 1. background/sky and ground
window.background = new RunnerBG(canvas,ch,cw,groundHeight,skyColor);
window.pebles = [];

// 2. Door for start and end
window.door_img = document.getElementById("door");
window.door = new Hor_spawner(ctx,door_img,doorX,doorY,doorWidth,doorHeight,false);
window.start_door = new Hor_spawner(ctx,door_img,0,doorY,doorWidth,doorHeight,false);


// 3. bushes 
window.bushes = [];

// 4. hills
window.hills = [];

// 5. clouds
window.clouds = [];
window.cloud_imgs = document.querySelectorAll(".cloud");

// 6. trees
window.trees = [];
window.tree_imgs = document.querySelectorAll(".tree");

// 7. coins
window.Down = true;
window.coins = [];
window.coin = document.getElementById("word");

// 8. reward/progress counter
window.progress = [];
for(var i = 0; i < 5;i++){
	progress.push(new Img_progress(ctx,coin, rewardX + (rewardSize *i),rewardY, rewardSize));
}

// 9. popup text
window.good = new canvas_Text(ctx,"","red",popTextX,popTextY);
good.text_size = popTextSize;
window.msgs = ["Good!","Amazing!","Nice!"];

window.startText = new canvas_Text(ctx,"Click to start!","red",cw /2,ch/2);
startText.text_size = 100;

//start the infite loop
window.started = false;
start();

}



function start(time){
	if(!started){
		/// implement for tap too, else play not working
		canvas.onclick = function(){
			started = true;
			toggleFullScreen();
			bgAudio.play();
		};
		canvas.ontouchend = function(){
			started = true;
			toggleFullScreen();
bgAudio.play();
		};
		document.addEventListener('touchend', ()=>bgAudio.play());
		document.addEventListener('touchend', ()=>wordAudio.play());
		if(mouse.m_down){
			bgAudio.play();
			
		}
		// startText.draw();
		/// TO BE PUT INTO THE CONFIG FILE
		ctx.drawImage(start_btn,startBtnX,startBtnY,startBtnWidth,startBtnHeight);
		requestAnimationFrame(start);
		return;
	}
	bgAudio.play();
// fps control
	if(time-last_frame < FRAME_MIN_TIME){ //skip the frame if the call is too early
        requestAnimationFrame(start);
        
        return; // return as there is nothing to do
    }

// clear the screen
	ctx.clearRect(0,0,cw,ch);
// HILLS

	if(frames %10 == 0){
	
		var size = randomInt(hillsSizeRange[0],hillsSizeRange[1]);
	
		hills.push(new CircleSpawner(ctx,hillsX,hillsY,size,hillsColor));
	}

	if(hills.length > 0){
		for(var i =0;i<hills.length;i++){
			if(hills[i].x + (hills[i].radius) < 0){
				hills.splice(i, 1); 
			
			}
			hills[i].draw();
			hills[i].update(runningSpeed / 1.5);
			
		}}

// CLOUDS

	if(frames %130 == 0){
		var size = randomInt(cloudSize[0],cloudSize[1]);
		var bigMul = randomInt(cloudMul[0],cloudMul[1]);
		var randomY = randomInt(cloudY[0],cloudY[1]);
		clouds.push(new CircleSpawner(ctx,cw + size,randomY ,size ,cloudColor));
		clouds.push(new CircleSpawner(ctx,clouds[clouds.length -1].radius +clouds[clouds.length -1].x,randomY ,size * bigMul,cloudColor));
		clouds.push(new CircleSpawner(ctx,clouds[clouds.length -1].radius +clouds[clouds.length -1].x,randomY ,size,cloudColor));
		clouds.push(new CircleSpawner(ctx,clouds[clouds.length -1].radius +clouds[clouds.length -1].x,randomY ,size *(bigMul * 0.7),cloudColor));
	
	}

	if(clouds.length > 0){
		for(var i =0;i<clouds.length;i++){
			if(clouds[i].x + clouds[i].radius < 0){
				clouds.splice(i, 1); 
				// console.log(clouds.length);
			}
			clouds[i].draw();
			clouds[i].update(cloudSpeed);
			
		}}


// TREES
		if(trees.length >0){
		for(var i =0;i < trees.length;i++){
			trees[i].draw();
			trees[i].update(runningSpeed);
			trees[i].spawnAt(treesY);
		}}

	if(frames % (randomInt(35,40))==0)
	{
		
		trees.push(new Hor_spawner(ctx,tree_imgs[randomInt(0,tree_imgs.length)],
			treesX,treesY,treesWidth,
			treesHeight));
	}

//BUSHES

	if(frames %10 == 0){
		var size = randomInt(bushSizeRange[0],bushSizeRange[1]);
		
		bushes.push(new CircleSpawner(ctx,bushX,bushY,size,bush1Color));
	}

	if(bushes.length > 0){
		for(var i =0;i<bushes.length;i++){
			
			if(bushes[i].x + (bushes[i].radius) < 0){
				bushes.splice(i, 1); 
			
			}
			bushes[i].draw();
			bushes[i].update(runningSpeed);

		}}
		
//BACKGROUND AND GROUND PEBLES

	if(frames %8 == 0){
		var size = randomInt(peblesSize[0],peblesSize[1]);
		var randomY = randomInt(pebYRandom[0],pebYRandom[1]);
		pebles.push(new CircleSpawner(ctx,peblesX,randomY ,size,peblesColor));
		
	}

	background.ground(ground);

	if(pebles.length > 0){
		for(var i =0;i<pebles.length;i++){
			if(pebles[i].x + (pebles[i].radius) < 0){
				pebles.splice(i, 1); 
			
			}
			pebles[i].draw();
			pebles[i].update(runningSpeed);
		}}


	
		

	
//DOORS
	start_door.draw();
	start_door.update(runningSpeed);
	if(good.counter >= 5){
	door.draw();
	door.update(runningSpeed);
	}

// COINS 
	if(frames %250 ==0 ){
			if(Down){
				var rowY = coinY[0];
				Down = false;
			}else{
				var rowY = coinY[1];
				Down = true;
			}
			coins.push(new Hor_spawner(ctx,coin,coinX,rowY,coinWidth,coinHeight,false));
			window.kicked = false;
			
		}
		if(coins.length > 0){
		for(var i =0;i<coins.length;i++){
			coins[i].draw();
			coins[i].update(runningSpeed);
			coins[i].flip();
			if(player.hit(coins[i]) && !kicked){
				wordAudio.play();
				coins.splice(i, 1);;
				kicked = true;
				good.bounced = true;
				window.rt = Math.floor(Math.random() * msgs.length);
				good.count();



			}
		}
	}

//REWARDS 
	for(var i = 0; i < 5;i++){
	progress[i].draw();}
	if(good.counter >0){
		progress[good.counter - 1].filled = true;
	}
//PLAYER 
	if(mouse.m_down)
	{

	player.off_ground= true;

	}
	if (player.off_ground)
	{

		player.jump(jumpSpeed);
	}
	else{
		player.run();
	}


	if(door.x + door.w < cw){
		runningSpeed = 0
		
		player.update(runner_go);
	}


	if(player.hit(door)){
		runner_go = 0;
		setTimeout(function(){ 
			// window.location.replace("file:///D:/Canvas%20lab/Dino-1.0/Runner-1/index.html");
			window.location.reload(false);

		}, 2000);
		
	}
	if(player.x > playerX && !player.off_ground){
		player.x -= runningSpeed;
	}
	player.draw();

//POPUP TEXT
if(good.bounced){
		
		good.msg = msgs[rt];
		good.bounce_out(popTextSize);
	}
	good.draw();


	
	
	last_frame = time;
	frames ++;
	requestAnimationFrame(start);
}


function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
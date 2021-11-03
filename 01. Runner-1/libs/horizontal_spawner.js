class Hor_spawner{
	constructor(ctx, img,x,y,w,h,random=true)
	{
		this.img = img;
		this.ctx = ctx;
		this.c = true;
		this.wrd = false;
		this.original_w = w;
		this.speed = Math.round(Math.random() * (6 - 1) + 1);
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.frame = 0;
		this.random = random;
		if(this.random)this.y = getRandomRange(this.y,this.y - (this.w *1.5));

		

	}

	draw(){


		this.ctx.drawImage(this.img, this.x,this.y,this.w,this.h);
		

	}
	drawSprite(frames,sx,sy,sw,sh){

		var sprite_length = this.img.width;
		var s_frames = sprite_length / sw;
		//this.frame = 0;
		// console.log(sprite_length);
		this.ctx.drawImage(this.img,sx +(sw * this.frame) +10,sy + (sw *0.24),sw,sh, this.x,this.y,this.w * 3,this.h * 3);
		if (frames %10 == 0){

			
			this.frame++;
			if(this.frame >= s_frames)this.frame = 0;
		}
		
		

	}
	spawn(img = this.img, min = this.y,max=this.y - this.h){

		this.img = img;
		//console.log("got here");

		this.y = getRandomRange(min,max);


	}
	spawnAt(y,img = this.img){
		this.img = img;
		this.y = y;

	}
	update(speed = this.speed){



		this.x -= speed;
		  
		

	}


	flip(){

		if(this.c){

			if(Math.floor(this.w) > 0 ){
				
				this.w -=(this.original_w /40);
				this.x +=(this.original_w /80);
			} else{
				
				this.c = false;
				this.wrd = true;
				
			}

			

		}

		if(this.wrd){
			

			if(this.w < this.original_w ){
				this.w +=(this.original_w /40);
				this.x -=(this.original_w /80);
			} else{
				this.wrd = false;
				this.c = true;
				
				

			}

			

		}

	}
}
function getRandomRange(min, max) {
    return Math.random() * (max - min) + min;
}
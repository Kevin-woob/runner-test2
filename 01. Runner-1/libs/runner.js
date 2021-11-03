class Runner{
	constructor(ctx,img_array, x,y,w,h)
	{

		this.ctx = ctx;
		this.img_array = img_array;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.top =false;
		this.ground_y  = y;
		this.img = img_array[0];
		this.runner = [];
		this.jumper = [];
		this.off_ground = false;
		this.counter = 0;
		this.img_indexer = 0;
		//console.log(this.img_array);
		// console.log("adding one");
		for (let i = 0; i < this.img_array.length;i++){


			if(this.img_array[i].src.indexOf("running") != -1){
				this.runner.push(this.img_array[i]);

			}
			if(this.img_array[i].src.indexOf("jumping") != -1){
				

				this.jumper.push(this.img_array[i]);

			}
			
		}
		//console.log(this.jumper);
		

	}

	draw(){

		this.ctx.drawImage(this.img,this.x,this.y,this.w,this.h);

	}

	hit(obj){
//collision of rectangles

	if (obj.x < (this.x + this.w) - (this.w /2) &&
   obj.x + obj.w > this.x &&
   obj.y < (this.y + this.h) - (this.h / 2) &&
   obj.y + obj.h > this.y){

   	
		
		return true;
	}
	else{
		return false;
	}


	}
	run(){

		if(frames %4==0)
		{
			this.img = this.runner[this.img_indexer];
						this.img_indexer ++;
						if(this.img_indexer > 5){
							this.img_indexer = 0;
						}
					}

	}

	jump(speed){
		
		if(!this.top)
		{

			if(this.counter < this.h){
					this.off_ground = true;
				if(frames %4==0)
				{
					
					this.img = this.jumper[this.img_indexer];
								this.img_indexer ++;
								if(this.img_indexer > 11){
									this.img_indexer = 0;
								}}
				this.y -=speed;
				this.x += speed * 0.6;
				this.counter +=speed;
				}
				else{
					this.top = true;
				}
		}

		if(this.top)
		{
			
				
				if(this.y < this.ground_y){
				
				if(frames %10==0)
				{this.img = this.jumper[this.img_indexer];
								this.img_indexer ++;
								if(this.img_indexer > 1){
									this.img_indexer = 0;
								}}
				this.y +=speed;
			
				this.counter =0;
				}
				else{
					this.off_ground = false;
					this.top = false;
				}
			
					
				
		}



	}
	update(speed){
		this.x +=speed;
	}
	
}
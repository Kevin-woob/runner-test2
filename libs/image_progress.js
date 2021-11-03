class Img_progress{
	constructor(ctx,img,x,y,sq_size,length = 5)
	{
		this.length = length;
		this.x = x;
		this.y = y;
		this.w = sq_size;
		this.h = sq_size;
		this.img = img;
		this.ctx = ctx;
		this.filled = false;

	}
	draw(){

		
		this.ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
		if(!this.filled){
			this.ctx.beginPath();
		this.ctx.globalCompositeOperation='color';
		this.ctx.fillStyle = "white";
		this.ctx.globalAlpha = 1;  // alpha 0 = no effect 1 = full effect
		
		this.ctx.arc(this.x +(this.w / 2),this.y+(this.h / 2),this.w /2,0,Math.PI*2);
		this.ctx.fill();
		this.ctx.closePath();
		this.ctx.globalCompositeOperation = "source-over";
		//this.ctx.fillRect(this.x, this.y, this.w, this.h);
		}
		
		
		

	}

	
}
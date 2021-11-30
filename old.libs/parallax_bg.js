class par_bg{
	constructor(ctx, img,x,y,w,h)
	{
		this.img = img;
		this.ctx = ctx;
		
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.bg2_x = this.w;

	}

	draw(){

		this.ctx.drawImage(this.img, this.x,this.y,this.w,this.h);
		this.ctx.drawImage(this.img, this.bg2_x,this.y,this.w,this.h);

	}

	update(speed){

		this.x -= speed;
		 this.bg2_x -= speed;
		 if((this.x + this.w) < 0){
		 	this.x = canvas.width;
		 }
		  if((this.bg2_x + this.w) < 0){
		 	this.bg2_x = canvas.width;
		 }
		

	}
}
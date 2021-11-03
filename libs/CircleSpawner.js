class CircleSpawner{
	constructor(ctx,x,y,radius,color){
		this.ctx = ctx;
		this.radius = radius;
		this.color = color;
		this.x = x;
		this.y = y;

	}
	draw(){
		this.ctx.beginPath();
	
	this.ctx.lineWidth = 2;
	this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
	this.ctx.fillStyle = this.color;
	this.ctx.fill();
	// this.ctx.stroke();
	// this.ctx.strokeStyle = this.color;
	this.ctx.closePath();



	}
	update(speed){
		this.x -= speed;
		

	}
}
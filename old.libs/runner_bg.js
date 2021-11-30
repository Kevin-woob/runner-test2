class RunnerBG{
	constructor(canvas,canvasHeight,canvasWidth,groundHeight,skyColor){
		canvas.style.background = skyColor;
		this.w = canvasWidth;
		this.h = canvasHeight;
		this.groundHeight = groundHeight;
		this.ctx = canvas.getContext("2d");
	}

	ground(color){
		this.ctx.beginPath();
		this.ctx.rect(0,this.h - this.groundHeight,this.w,this.groundHeight);
		this.ctx.fillStyle = color;
		this.ctx.fill();
		this.ctx.closePath();
	}
}
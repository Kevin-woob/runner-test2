class GrayScaleImage{
	constructor(img,x,y,w,h){

		this.img = img;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;

	}

	///draw 
	draw(){
		// Render the image
//ctx.globalCompositeOperation='source-atop';
ctx.drawImage(this.img, this.x, this.y,this.w,this.h);
//ctx.globalCompositeOperation='source-over';
// set the composite operation
ctx.globalCompositeOperation='color';
ctx.fillStyle = "white";
ctx.globalAlpha = 1;  // alpha 0 = no effect 1 = full effect
ctx.fillRect(this.x, this.y, this.w, this.h);
//ctx.globalAlpha =  0;



	}
}
class img_holder{
	constructor(img,x,y,w,h){
		this.img = img;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		
		//this.img.src = img.src;

	}
	draw(){
		
		ctx.drawImage(this.img,this.x, this.y,this.w,this.h);
		
		
	}

	update(dx,dy,speed){
		

if(dx > (this.x + (this.w / 2))){
		var d = dx-(this.x + this.w / 2);

		this.x += ( d * (speed / 100));}

	if(dx < (this.x + (this.w / 2))){
		var d = (this.x + (this.w / 2) ) - dx;
		this.x -= ( d * (speed / 100));}

	if(dy > (this.y + (this.h / 2))){
		var d = dy-(this.y + (this.h / 2));
		this.y += ( d * (speed / 100));}

	if(dy < (this.y + (this.h / 2))){
		var d = (this.y + (this.h / 2)) - dy;
		this.y -= ( d * (speed / 100));}



	}
}
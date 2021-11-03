class canvas_Text{

	constructor(ctx,msg,color,x,y){
		//this.font = font;
		this.x = x;
		this.y = y;
		this.msg = msg;
		this.text_size = 0;
		this.ctx = ctx;
		this.bounced = false;
		this.color = color;
		this.counter = 0;
		this.original_msg = msg;
	}

	draw(){


		this.ctx.font = String(this.text_size)+ "px" + " Comic Sans MS"; //size and family
		this.ctx.fillStyle = this.color;
		this.ctx.textAlign = "center";
		this.ctx.fillText(this.msg, this.x,this.y); // msg, x,y
	}

	bounce_out(max_size){


		if(this.text_size < max_size)
		{
			this.text_size += 2;
		}
		else{
			this.text_size = 0;
			this.bounced = false;
		}

	}
	count(){

		
		this.counter +=1;
		//var ct = String(this.counter);
		this.msg = this.msg.split(" ")[0] +" "+this.counter.toString();

	}

}
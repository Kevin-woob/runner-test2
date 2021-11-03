class shapeBuilder{
	constructor(ctx,x,y, points_array,fill = true)
	{
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.points = points_array;
		//this.points.push(points_array[0]);
		this.fill = fill;
		this.color= "pink";
		this.w = 0;
		this.h = 0;
		this.minX = 0;
		this.maxY = 0;
		this.minY = 0;
		this.maxX = 0;
		this.setWidthHeight();

		

		
		


	}

	/*
	points = [[x,y],[x,y],[x,y],[x,y],[x,y]];
	*/

	setWidthHeight(){

		this.minX = this.points[0][0];
		this.maxX = this.points[0][0];

		this.minY = this.points[0][1];
		this.maxY = this.points[0][1];
		
		for(var i = 0; i < this.points.length;++i){



			if(this.points[i][0] >= this.maxX){
				this.maxX = this.points[i][0];}
			if(this.points[i][0] <= this.minX){
				this.minX = this.points[i][0];}
			if(this.points[i][1] >= this.maxY) {
				this.maxY = this.points[i][1];}
			if(this.points[i][1] <= this.minY) {
				this.minY = this.points[i][1];}
				
			
			
		}
		
		this.x = this.minX;
		this.y = this.minY;
		this.w = this.maxX - this.minX;
		this.h = this.maxY - this.minY;

		// console.log("this is the width of " + this + ": " + this.w);
		// console.log("this is the height of " + this + ": " + this.h);
	}



	draw(){
		this.ctx.beginPath();
		if(this.points.length > 0 ){
			this.ctx.moveTo(this.points[0][0],this.points[0][1]);

		}
		
		for(var i = 1; i<this.points.length;i++){

			this.ctx.lineTo(this.points[i][0],this.points[i][1]);
			
			
		}
		
		this.ctx.lineWidth = 5;
		this.ctx.strokeStyle = "white";
		this.ctx.fillStyle = this.color;
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.closePath();
		this.ctx.setLineDash([]);

	}

	move(mx,my){

		var yDif = (this.h /2) + this.y;
		var xDif = (this.w /2) + this.x;

	}

	update(dx,dy,speed){

		var dxL = 0;
		var dxM = 0;
		var dyL = 0;
		var dyM = 0;

		if(dx > (this.x + (this.w / 2))){
		dxM = dx-(this.x + this.w / 2);

		this.x += ( dxM * (speed / 100));}

	if(dx < (this.x + (this.w / 2))){
		dxL = (this.x + (this.w / 2) ) - dx;
		this.x -= ( dxM * (speed / 100));}

	if(dy > (this.y + (this.h / 2))){
		dyM = dy-(this.y + (this.h / 2));
		this.y += ( dyM * (speed / 100));}

	if(dy < (this.y + (this.h / 2))){
		dyL = (this.y + (this.h / 2)) - dy;
		this.y -= ( dyL * (speed / 100));}


		for(var i = 0 ; i < this.points.length;i++){

			var xDif = dx - this.x;
			var yDif = dy - this.y;
			// console.log("xDif: " + xDif);
			// console.log("actual x: " + this.points[i][0]);
			dxM != 0 ? this.points[i][0] += dxM:this.points[i][0] -=dxL;
			dyM != 0 ? this.points[i][1] += dyM:this.points[i][1] -=dyL;
			// this.points[i][0] += xDif;
			// this.points[i][1] += yDif;
			this.setWidthHeight();




		}

	

	}
}

window.onload = (function(){
	window.points = [
    [
        418.1484375,
        146.953125
    ],
    [
        410.1328125,
        158.9765625
    ],
    [
        396.7734375,
        180.3515625
    ],
    [
        390.09375,
        191.0390625
    ],
    [
        386.0859375,
        196.3828125
    ],
    [
        380.7421875,
        207.0703125
    ],
    [
        376.734375,
        223.1015625
    ],
    [
        368.71875,
        253.828125
    ],
    [
        362.0390625,
        267.1875
    ],
    [
        346.0078125,
        304.59375
    ],
    [
        335.3203125,
        331.3125
    ],
    [
        324.6328125,
        350.015625
    ],
    [
        320.625,
        364.7109375
    ],
    [
        316.6171875,
        380.7421875
    ],
    [
        313.9453125,
        388.7578125
    ],
    [
        312.609375,
        394.1015625
    ],
    [
        309.9375,
        410.1328125
    ],
    [
        303.2578125,
        442.1953125
    ],
    [
        299.25,
        455.5546875
    ],
    [
        293.90625,
        467.578125
    ],
    [
        287.2265625,
        486.28125
    ],
    [
        283.21875,
        495.6328125
    ],
    [
        276.5390625,
        507.65625
    ],
    [
        273.8671875,
        514.3359375
    ],
    [
        267.1875,
        523.6875
    ],
    [
        265.8515625,
        526.359375
    ],
    [
        264.515625,
        527.6953125
    ],
    [
        264.515625,
        526.359375
    ],
    [
        267.1875,
        526.359375
    ],
    [
        268.5234375,
        526.359375
    ],
    [
        271.1953125,
        527.6953125
    ],
    [
        273.8671875,
        531.703125
    ],
    [
        279.2109375,
        534.375
    ],
    [
        287.2265625,
        534.375
    ],
    [
        301.921875,
        533.0390625
    ],
    [
        332.6484375,
        530.3671875
    ],
    [
        384.75,
        523.6875
    ],
    [
        414.140625,
        523.6875
    ],
    [
        430.171875,
        523.6875
    ],
    [
        438.1875,
        525.0234375
    ],
    [
        443.53125,
        526.359375
    ],
    [
        447.5390625,
        526.359375
    ],
    [
        450.2109375,
        526.359375
    ],
    [
        452.8828125,
        526.359375
    ],
    [
        458.2265625,
        526.359375
    ],
    [
        462.234375,
        523.6875
    ],
    [
        462.234375,
        522.3515625
    ],
    [
        459.5625,
        522.3515625
    ],
    [
        458.2265625,
        519.6796875
    ],
    [
        456.890625,
        517.0078125
    ],
    [
        455.5546875,
        514.3359375
    ],
    [
        448.875,
        494.296875
    ],
    [
        446.203125,
        478.265625
    ],
    [
        442.1953125,
        466.2421875
    ],
    [
        428.8359375,
        423.4921875
    ],
    [
        402.1171875,
        390.09375
    ],
    [
        384.75,
        354.0234375
    ],
    [
        376.734375,
        331.3125
    ],
    [
        372.7265625,
        321.9609375
    ],
    [
        363.375,
        303.2578125
    ],
    [
        356.6953125,
        287.2265625
    ],
    [
        347.34375,
        276.5390625
    ],
    [
        336.65625,
        267.1875
    ],
    [
        323.296875,
        261.84375
    ],
    [
        319.2890625,
        259.171875
    ],
    [
        316.6171875,
        257.8359375
    ],
    [
        315.28125,
        256.5
    ],
    [
        312.609375,
        255.1640625
    ],
    [
        311.2734375,
        253.828125
    ],
    [
        308.6015625,
        252.4921875
    ],
    [
        303.2578125,
        249.8203125
    ],
    [
        291.234375,
        245.8125
    ],
    [
        280.546875,
        237.796875
    ],
    [
        276.5390625,
        233.7890625
    ],
    [
        275.203125,
        231.1171875
    ],
    [
        273.8671875,
        229.78125
    ],
    [
        273.8671875,
        228.4453125
    ],
    [
        275.203125,
        228.4453125
    ],
    [
        277.875,
        228.4453125
    ],
    [
        279.2109375,
        229.78125
    ],
    [
        280.546875,
        229.78125
    ],
    [
        281.8828125,
        229.78125
    ],
    [
        283.21875,
        229.78125
    ],
    [
        283.21875,
        232.453125
    ],
    [
        295.2421875,
        235.125
    ],
    [
        305.9296875,
        235.125
    ],
    [
        313.9453125,
        235.125
    ],
    [
        350.015625,
        228.4453125
    ],
    [
        375.3984375,
        221.765625
    ],
    [
        399.4453125,
        215.0859375
    ],
    [
        435.515625,
        208.40625
    ],
    [
        471.5859375,
        205.734375
    ],
    [
        513,
        204.3984375
    ],
    [
        535.7109375,
        204.3984375
    ],
    [
        570.4453125,
        204.3984375
    ],
    [
        585.140625,
        205.734375
    ],
    [
        602.5078125,
        207.0703125
    ],
    [
        610.5234375,
        207.0703125
    ],
    [
        618.5390625,
        207.0703125
    ],
    [
        619.875,
        207.0703125
    ],
    [
        619.875,
        208.40625
    ],
    [
        619.875,
        211.078125
    ],
    [
        619.875,
        212.4140625
    ],
    [
        622.546875,
        212.4140625
    ],
    [
        622.546875,
        213.75
    ],
    [
        622.546875,
        216.421875
    ],
    [
        622.546875,
        217.7578125
    ],
    [
        619.875,
        223.1015625
    ],
    [
        617.203125,
        225.7734375
    ],
    [
        591.8203125,
        244.4765625
    ],
    [
        554.4140625,
        259.171875
    ],
    [
        502.3125,
        283.21875
    ],
    [
        443.53125,
        317.953125
    ],
    [
        371.390625,
        343.3359375
    ],
    [
        316.6171875,
        358.03125
    ],
    [
        276.5390625,
        383.4140625
    ],
    [
        233.7890625,
        410.1328125
    ],
    [
        193.7109375,
        430.171875
    ],
    [
        171,
        439.5234375
    ],
    [
        158.9765625,
        450.2109375
    ],
    [
        153.6328125,
        455.5546875
    ],
    [
        146.953125,
        459.5625
    ],
    [
        144.28125,
        459.5625
    ],
    [
        142.9453125,
        459.5625
    ],
    [
        140.2734375,
        459.5625
    ],
    [
        138.9375,
        459.5625
    ],
    [
        138.9375,
        460.8984375
    ],
    [
        141.609375,
        462.234375
    ],
    [
        142.9453125,
        463.5703125
    ],
    [
        150.9609375,
        160.3125
    ],
    [
        416.8125,
        146.953125
    ]
];
	window.canvas = document.getElementById("canvas");
	window.ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
 	canvas.height = window.innerHeight;
	window.frames = 0;
	window.red = [[0,0],[0,200],[200,200],[200,0]];
	window.green = [[0,200],[0,400],[200,400],[200,200],[0,200]];
	window.blue = [[0,400],[0,600],[200,600],[200,400]];
	window.shape = new shapeBuilder(ctx,0,0,points);
	window.red = new shapeBuilder(ctx,0,0,red);
	red.color = "red";
	window.blue = new shapeBuilder(ctx,0,0,blue);
	blue.color = "blue";
	window.green = new shapeBuilder(ctx,0,0,green);
	green.color = "green";
	window.mouse = new mouseHandler(canvas);
	window.pen = new PenLine(ctx);
	window.shapes = [];
	window.completes = [];
	window.touched = false;



	
	start();

});

function start(time){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	//shape.draw();

	red.draw();
	blue.draw();
	green.draw();
	if(!touched)pen.draw(mouse.x,mouse.y);
	if(pen.complete){
		completes.push(pen.points);
		pen.points = [];
		pen.complete = false;
	}
	if(completes.length > 0){
		for (var i =0;i<completes.length;i++){
			shapes.push(new shapeBuilder(ctx,0,0,completes[i]));
		}
	}
	if(shapes.length >= 1){
		 for(var i =0;i<shapes.length;i++){
		 	shapes[i].draw();
		 	if(mouse.mouseClicked(mouse.x,mouse.y,shapes[i])){
		 		touched = true;
		 		shapes[i].update(mouse.x,mouse.y,1);
		 		
		 	}
		 	else{
		 		touched = false;
		 	}


	}}
	if(mouse.mouseClicked(mouse.x,mouse.y,red)){
		shape.color = red.color;

	}
	if(mouse.mouseClicked(mouse.x,mouse.y,shape)){
		shape.color = 'pink';
		shape.update(mouse.x,mouse.y,1);

	}
	if(mouse.mouseClicked(mouse.x,mouse.y,blue)){
		shape.color = blue.color;
		//console.log("clicked blue");
	}
	if(mouse.mouseClicked(mouse.x,mouse.y,green)){
		shape.color = green.color;
		green.update(mouse.x,mouse.y,1);
		touched =true;
	}
	else{
		touched =false;
	}
	frames ++;
	requestAnimationFrame(start);
}
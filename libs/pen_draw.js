class PenLine {
	constructor(ctx){
		this.ctx = ctx;
		this.points = [];
		this.complete = false;

	}

	isItemInArray(array, item) {
    for (var i = 0; i < array.length; i++) {
        // This if statement depends on the format of your array
        if (array[i][0] == item[0] && array[i][1] == item[1]) {
            return true;   // Found it
        }
    }
    return false;   // Not found
}

	draw(mx,my){

		

		var finished = false;
		if(!this.isItemInArray(this.points,[mx,my]) && mx != 0 && my != 0) this.points.push([mx,my]);
		//this.ctx.save();
		this.ctx.beginPath();
		if(this.points.length > 0 ){
			this.ctx.moveTo(this.points[0][0],this.points[0][1]);

		}
		
		for(var i = 1; i<this.points.length;i++){

			this.ctx.lineTo(this.points[i][0],this.points[i][1]);
			
			


		}
		//console.log(Math.abs(this.points[i][0] - mx) );
			if(this.points.length > 2 && Math.abs(this.points[0][0] - mx) <10 && Math.abs(this.points[0][1] - my) <10){

				this.ctx.lineTo(this.points[0][0],this.points[0][1]);
				this.complete = true;
			}
		
		//this.ctx.restore();
		

		//this.points.length > 1 ? this.ctx.lineTo(mx,my):this.ctx.moveTo(mx,my);
		this.ctx.lineWidth = 4;
		this.ctx.strokeStyle = "black";
		this.ctx.stroke();
		this.ctx.closePath();
		//this.ctx.moveTo(mx,my);

		// if (poits.length < 0 ){
		// 	points.push([mx,my]);
		// }
		// else {
		// 	for(let i = 0;i>points.length;i++){
		// 		if(points.indexOf([mx,my]) === -1) points.push([mx,my]);
		// 	}
		// }

	}


}

// window.onload = (function(){
// 	window.points = [
//     [
//         440.859375,
//         162.984375
//     ],
//     [
//         215.0859375,
//         610.5234375
//     ],
//     [
//         593.15625,
//         308.6015625
//     ],
//     [
//         207.0703125,
//         255.1640625
//     ],
//     [
//         642.5859375,
//         577.125
//     ],
//     [
//         442.1953125,
//         165.65625
//     ]
// ];
// 	// window.canvas = document.getElementById("canvas");
// 	// window.ctx = canvas.getContext("2d");
// 	// canvas.width = window.innerWidth;
//  // 	canvas.height = window.innerHeight;
// 	// window.frames = 0;
// 	// window.pen = new PenLine(ctx);
// 	// window.MH = new mouseHandler(canvas);
// 	// start();

// });

// function start(time){
// 	MH.update();
// 	if(frames %1000 == 0)console.log(pen.points);
// 	pen.draw(MH.x,MH.y);
// 	frames ++;
// 	requestAnimationFrame(start);
// }
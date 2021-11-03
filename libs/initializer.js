class Init{
	constructor(canvasIdList){
// canvas related variables
if (canvasIdList.length ==1){

	window.canvas=document.getElementById(canvasIdList[0]);
 window.ctx=canvas.getContext("2d");
this.setCanvasWidthHeight(canvas);
 window.cw=canvas.width;
 window.ch=canvas.height;
 window.mouse = new mouseHandler(canvas);

}else{
	window.canvasList = [];
	window.ctxList = [];
	for(var i=0;i <canvasIdList.length;i++){
		var tempcanvas = document.getElementById(canvasIdList[i]);
		
		canvasList.push(tempcanvas);
		ctxList.push(tempcanvas.getContext("2d"));


	}
	window.mouse = new mouseHandler(canvasList[-1]);
}
 
	}

	element(id){
	var el  = document.getElementById(id);
		return el;

	}
	setCanvasWidthHeight(canvas){
		canvas.width = window.innerHeight;
		canvas.height = window.innerWidth;
		return canvas;

	}
}
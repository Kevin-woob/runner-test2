class AudioVisualizer{
	constructor(ctx,coords,audioElement){// REMEMER: IT DOESNT WORK UNLESS USER MAKES A MOVE, THEN AUDIO IS PLAYING//coords [x,y,w,h];

		/// analizer settings
		this.audioElement = audioElement;
		this.audioContext = new AudioContext();
		this.src = this.audioContext.createMediaElementSource(this.audioElement);
		this.analyser = this.audioContext.createAnalyser();
		this.src.connect(this.analyser);
	    this.analyser.connect(this.audioContext.destination);
		this.analyser.fftSize = 256;
	    this.bufferLength = this.analyser.frequencyBinCount;
	    this.dataArray = new Uint8Array(this.bufferLength);

	    ///visual part
		this.ctx = ctx;
		this.x = coords.x;
		this.y = coords.y;
		this.w = coords.w;
		this.h = coords.h;
		this.barWidth = (this.w / this.bufferLength) * 2.5;
	    this.barHeight;
	  

	}
	play(){
		this.barX = this.x;
	
	     this.analyser.getByteFrequencyData(this.dataArray);
	
	      // this.ctx.fillStyle = "#000";
	      // this.ctx.fillRect(0, 0, this.w, this.h);
	
	      for (var i = 0; i < this.bufferLength; i++) {
	        this.barHeight = this.dataArray[i];
	        
	        var r = this.barHeight + (25 * (i/this.bufferLength));
	        var g = 250 * (i/this.bufferLength);
	        var b = 50;
	
	        this.ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
	        this.ctx.fillRect(this.barX, this.h - this.barHeight, this.barWidth, this.barHeight);
	
	        this.barX += this.barWidth + 1;
	      }

	}
}

// function startVis()
// 	{
// 		// window.audio1 = mainaudio
// 	 // var context = new AudioContext();
// 	    // var src = context.createMediaElementSource(this.audioElement);
// 	    // var analyser = context.createAnalyser();
	
// 	    // var canvas = document.getElementById("canvas");
// 	    // canvas.width = window.innerWidth;
// 	    // canvas.height = window.innerHeight / 5;
// 	    // var ctx = canvas.getContext("2d");
	
// 	    // this.src.connect(this.analyser);
// 	    // analyser.connect(context.destination);
	
// 	    // analyser.fftSize = 256;
	
// 	    // var bufferLength = analyser.frequencyBinCount;
// 	    // console.log(bufferLength);
	
// 	    // var dataArray = new Uint8Array(bufferLength);
	
// 	    // var WIDTH = canvas.width;
// 	    // var HEIGHT = canvas.height;
	
// 	    // this.barWidth = (this.w / bufferLength) * 2.5;
// 	    // this.barHeight;
// 	    // this.barX = 0;
	
	
// 	    function renderFrame() {
// 	      requestAnimationFrame(renderFrame);
	
// 	      this.barX = 0;
	
// 	      analyser.getByteFrequencyData(dataArray);
	
// 	      ctx.fillStyle = "#000";
// 	      ctx.fillRect(0, 0, WIDTH, HEIGHT);
	
// 	      for (var i = 0; i < bufferLength; i++) {
// 	        barHeight = dataArray[i];
	        
// 	        var r = barHeight + (25 * (i/bufferLength));
// 	        var g = 250 * (i/bufferLength);
// 	        var b = 50;
	
// 	        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
// 	        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
	
// 	        x += barWidth + 1;
// 	      }
// 	    }
// 	     audio1.play();
// 	    renderFrame();}
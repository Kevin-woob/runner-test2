class AudioVisualizer{
	constructor(ctx,coords,audioElement){// REMEMER: IT DOESNT WORK UNLESS USER MAKES A MOVE, THEN AUDIO IS PLAYING//coords [x,y,w,h];

		/// analizer settings
		this.audioElement = audioElement.cloneNode(true);
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
		this.barWidth = (this.w / (this.bufferLength)) * 4.5; //* 5.5;
	    this.barHeight;

	  

	}
	
	play(){

		this.barX = this.x;
		
	     this.analyser.getByteFrequencyData(this.dataArray);
	     this.max = Math.max(...this.dataArray);////solve this one
	
	      // this.ctx.fillStyle = "#000";
	      // this.ctx.fillRect(this.x, this.y, this.w, this.h);
		

	      for (var i = 0; i < this.bufferLength; i++) {
	      	this.barHeight = this.h * ( this.dataArray[i] / this.max);
	        // this.barHeight = ((this.dataArray[i] / 2) < this.h ? this.dataArray[i] / 2 : this.dataArray[i] / 3);
	        
	        var r = this.barHeight + (25 * (i/this.bufferLength));
	        var g = 250 * (i/this.bufferLength);
	        var b = 50;
	
	        // this.ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
	        this.ctx.fillStyle = '#F7941D';
	        this.ctx.fillRect(this.barX, this.y - this.barHeight, this.barWidth, this.barHeight);
			if(this.barX < this.x + this.w)
	        {
	        	this.barX += this.barWidth + 1;
	        }
	      }

	}
}

// function snsNoiseFilter(alphaValue, betaValue) {
//     this.alpha = alphaValue;
//     if (this.alpha === undefined) {
//         this.alpha = 1.8;
//     }
//     this.beta = betaValue;
//     if (this.beta === undefined) {
//         this.beta = 0.03;
//     }
//     this.noise;
//     this.noiseSum = 0;
//     var sumFunction = function(a, b) {
//         return a + b;
//     };

//     this.getNoise = function(input) {
//         if (this.noiseSum == 0) {
//             this.noise = input;
//             this.noiseSum = this.noise.reduce(sumFunction, 0);
//             return this.noise;
//         }
//         var inputSum = input.reduce(sumFunction, 0);
//         var xnr = inputSum / this.noiseSum;
//         if (xnr > this.alpha) {
//             return this.noise;
//         }
//         var oneMinusBetaFactor = 1 - this.beta;
//         for (var i = 0; i < input.length; i++) {
//             this.noise[i] = oneMinusBetaFactor * this.noise[i] + this.beta * input[i];
//         }
//         this.noiseSum = oneMinusBetaFactor * inputSum + this.beta * this.noiseSum;
//         return this.noise;
//     };
// }

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
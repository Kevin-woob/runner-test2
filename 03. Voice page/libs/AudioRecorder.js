class AudioRecorder{
	constructor(duration,audioElement){
		this.device = navigator.mediaDevices.getUserMedia({audio:true});
		this.items = [];
		this.audioElement = audioElement;
		this.duration = duration;


	}
	record(){
		this.audioElement = new Audio();
		this.items = [];
		msg = 'im here outside the device';
		this.device.then(stream => {
			msg = 'im here inside the device';
			this.recorder = new MediaRecorder(stream);
			this.recorder.ondataavailable = e =>{
				msg = 'ondataavailable';
				this.items.push(e.data);
				if(this.recorder.state == 'inactive')
				{

					this.blob = new Blob(this.items,{type:'audio/webm'});
					// this.audioElement.removeChild(this.audioElement.lastChild);
					this.audioElement.setAttribute('src', URL.createObjectURL(this.blob));// = '<source id="source" src = "' + URL.createObjectURL(this.blob) + '"type = "audio/webm"/>';
					this.audioElement.setAttribute('id','recorded');
					// msg = 'done recording' + this.items.length;
					document.addEventListener('touchend', ()=>document.getElementById('recorded').play());
					msg = 'done playing' + document.getElementById('recorded').readyState;

				}
			}
			this.recorder.start(100);
			msg = 'after start';
			setTimeout(() =>{
				this.recorder.stop();
				// this.audioElement.play();
		
			},this.duration);
		})

		return this.audioElement;

	}

}
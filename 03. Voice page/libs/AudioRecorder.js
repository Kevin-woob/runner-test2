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
		this.device.then(stream => {
			msg = 'im here inside the device';
			this.recorder = new MediaRecorder(stream);
			this.recorder.ondataavailable = e =>{
				this.items.push(e.data);
				if(this.recorder.state == 'inactive')
				{
					this.blob = new Blob(this.items,{type:'audio/webm'});
					// this.audioElement.removeChild(this.audioElement.lastChild);
					this.audioElement.innerHTML = '<source id="source" src = "' + URL.createObjectURL(this.blob) + '"type = "audio/webm"/>';
					

				}
			}
			this.recorder.start(100);
			setTimeout(() =>{
				this.recorder.stop();
				// this.audioElement.play();
		
			},this.duration);
		})

		return this.audioElement;

	}

}
class SoundPlayer{
	constructor(audio) 		{
		this.audio = audio;


	}
	play(){
		
		document.addEventListener('touchend', ()=>this.audio.play(),{once:true});

	}
}
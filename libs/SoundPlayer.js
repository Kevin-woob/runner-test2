class SoundPlayer{
	constructor(audio) 		{
		this.audio = audio;
		document.addEventListener('touchend', ()=>this.audio.play());


	}
	play(){
		
		document.addEventListener('touchend', ()=>this.audio.play());

	}
}
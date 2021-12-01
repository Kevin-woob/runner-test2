class mouseHandler{
	constructor(canvas){
		this.canvas = canvas;
		this.x = 0;
		this.y = 0;
		this.m_down = false;


		this.canvas.addEventListener('mousedown', e => {


	this.m_down = true;
	
  this.x = e.offsetX;
  this.y = e.offsetY;
  
});

this.canvas.addEventListener('mousemove', e => {
  if (this.m_down === true) {
    
    this.x = e.offsetX;
    this.y = e.offsetY;	
  }
});

this.canvas.addEventListener('mouseup', e => {
  if (this.m_down === true) {
    this.m_down = false;
    // this.x = 0;
    // this.y = 0;
    
  }
});

//touch event handlers, copy of the mouse events replicated for touches

this.canvas.addEventListener('touchstart', e => {
e.preventDefault();

	this.m_down = true;
	//console.log("touch start is: " + e.touches[0].clientX + "chair x: " + word1.x);
  this.x = e.touches[0].clientX;
  this.y = e.touches[0].clientY;
  
});

this.canvas.addEventListener('touchmove', e => {
//	console.log(e);
//	e.preventDefault();
//	console.log("touchmove: " + e.touches);
	
  if (this.m_down === true) {
    
    this.x = e.touches[0].clientX;
    this.y = e.touches[0].clientY;	
  }
} );

this.canvas.addEventListener('touchend', e => {
  if (this.m_down === true) {
    this.m_down = false;
    //////////////////////////////////////////////////
    // unmuting everything 
    // Mute a singular HTML5 element
function muteMe(elem) {
    elem.muted = false;
    elem.play();
}

// Try to mute all video and audio elements on the page
function mutePage() {
    document.querySelectorAll("audio").forEach( elem => muteMe(elem) );
}
//////////////////////////////////////////////
    // this.x = 0;
    // this.y = 0;
    
  }
});

		
	}

	

//mouse clicked on it 
mouseClicked(mx = this.x,my = this.y,obj,circle=false){

	if(circle){

		if (obj.x - obj.radius < mx && obj.x + obj.radius> mx && obj.y + obj.radius > my && obj.y - obj.radius < my )
		{
			return true;
		}
		else{
			return false;
		}

	}
	else{
		if (obj.x < mx && obj.x + obj.w > mx && obj.y + obj.h > my && obj.y < my )
		{
			//console.log("its inside the click");
			return true;
		}
	}

}
}
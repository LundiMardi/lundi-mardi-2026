function setup() {
	createCanvas(768, 768);
	angleMode(DEGREES);
	rectMode(CENTER)
}

var illustWidth = 384 ;
var illustHeight = 512 ;

function draw() {
	background(255);
	
	push();
	translate(384, 384);
		rotate(45);

		noStroke();
		fill(0,0,0,50)
		rect(0,0,illustWidth,illustHeight);
		
		var s = (frameCount % 180) / 180  ;
		var scaleFactor = 1 -s;
		var shapeCount = 5 ;


		if(scaleFactor >= 0) {
			scale(scaleFactor) ;
			fill(0,0,0,((255/shapeCount) );
			rect(0,0,illustWidth,illustHeight);
		}
	pop();

	
	
}
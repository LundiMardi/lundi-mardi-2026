function setup() {
	createCanvas(displayWidth, displayHeight);
	angleMode(DEGREES);

}

var planets = ["Saturne", "Jupiter", "Mars", "Soleil", "Venus", "Mercure", "Lune"];
var days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
var dayHours = 24 ;
var weekHours = 7 * dayHours ;
var marginTop = 40 ;

var dayDialStep = 360/7 ;

function draw() {
	background(0);
	fill(255);

	var tU = millis();
	textSize(12);
	text(tU, 60, 60);
	
	push();
	translate(650, 500);
	rotate(tU/24);
	for (var i = 0; i < dayHours; i++ ) {
		if( i == 0 ){ fill(255,50,50) } else { fill(255) };
		var textX = marginTop + (12 * i );
		var hour = 1 + (1*i);
		var planet = planets[i %7];
		textAlign(RIGHT);

		rotate( -360/dayHours );
		text(hour +":00 ", -250, -6,100,100);
	}
	pop();
	
		
	push();
	translate(375, 500);
	rotate( -tU / 7 );
	
	for (var i = 0; i < 7; i++ ) {
// 		rect(0,0,100,300);
		fill(255);
		var textX = marginTop + (12 * i );
		var hour = 1 + (1*i);
		var planet = planets[i %7];
		textAlign(RIGHT);

		rotate( 360/7 );
		text( planet,0,-6,65,16);

	}
	pop();
	

	push();
	translate(600, 500);
	var revolution = tU / 8640 ;
	var revU = floor(revolution);
	rotate( (tU/7 ) / 24 );
	for (var i = 0; i < 7; i++ ) {
		var day = days[i %7];
		textAlign(LEFT);

		rotate(-dayDialStep);
		text(day, -65, -6, 65, 16);
	}
	pop();
}
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
var denomStep = dayDialStep / dayHours ;

var debounceTime = 0 ;
var deltaTU = 0 ;
var dayDialRotation = 0 ;


var rotIncrement = function(degrees, time) {
	return time / degrees ;
}


function draw() {
	background(0);
	fill(255);
	
	var throttle = 1 ;
	var tU = millis() * throttle ; // compteur des animations - timeUnit
	textSize(12);
	text(tU, 60, 60);
	
	
	// 24 hour dial
	push();
	translate(500, 500);
	
	for (var i = 0; i < dayHours; i++ ) {
		if( i == 0 ){ fill(255,50,50) } else { fill(255) };
		var textX = marginTop + (12 * i );
		var hour = 1 + (1*i);
		textAlign(CENTER);

		rotate( 360/dayHours );
		text(hour , 0 , -130 );
	}
	pop();
	
	var planetDialOrbitT = 20000 ;
	var revTime = function(time) {
		var degree =  360 / time ;
		return degree ;
	}
	
	// Planet dial
	push();

	translate(500,500);
		rotate( (tU * revTime(planetDialOrbitT) ) + 6 ); //magic nr :-(
		push();
		translate( 155,155);

		// rotate( (tU /7) - (180/7) );
		rotate( tU * revTime(planetDialOrbitT) * (24/7) );
		for (var i = 0; i < 7; i++ ) {
			fill(255);
			var planet = planets[i %7];
			textAlign(CENTER, BOTTOM);
			rotate( -360/7 );
			// text( planet,0,-12,65,16);
			text( planet,-25,0 ,50,73);
		}
		pop();
	
	pop();
	

	// days dial
	push();
	translate(500, 500);

	var dayDialStepTime = 600 ;
	var delay = planetDialOrbitT - dayDialStepTime ;
	
	if ( tU >= debounceTime ) {
		deltaTU = tU - debounceTime ;
		increment = rotIncrement(dayDialStep, dayDialStepTime ;
		dayDialRotation = dayDialRotation + * deltaTU) ;
		console.log("Inc: "+ rotIncrement(dayDialStep, dayDialStepTime) );
	}
	if(tU >= (debounceTime + dayDialStepTime) ) {
		debounceTime = tU + delay ;
	}
	rotate(dayDialRotation );
	for (var i = 0; i < 7; i++ ) {
		var day = days[i %7];
		textAlign(CENTER, TOP);
		rotate(-dayDialStep);
		// text(day, -50, 0, 100, 73); ligne de base vers l'exterieur
		text(day, -50, -73, 100, 73);
	}
	pop();
}


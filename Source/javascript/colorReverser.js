
var colorReverser = function() {

  // Video
  var nav = document.getElementById("navigation");
  
  if (nav !== null ) {
    // Play on window enter
    var menuColorReverser = new Waypoint.Inview({
      element: document.getElementById('clipac'),
      entered: function(direction) {
        if (direction == 'down') {
          nav.classList.add('reverse');
          console.log('Entered triggered with direction ' + direction);
        }
      }
      , enter: function(direction) {
          if (direction == 'up') {
            nav.classList.add('reverse');
            console.log('Enter triggered with direction ' + direction);
          }
      }
      , exit: function(direction) {
          if (direction == 'up') {
            nav.classList.remove('reverse');
            console.log('Exit triggered with direction ' + direction);
          }
      }
      , exited: function(direction) {
          if (direction == 'down') {
            nav.classList.remove('reverse');
            console.log('Exited triggered with direction ' + direction);
          }
      }
    });
  }
};
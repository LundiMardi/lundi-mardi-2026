
var pttrnVideoPlayer = function() {

  // Video
  var video = document.getElementById("video");
  
  if (video !== null ) {

    // Buttons
    var playButton = document.getElementById("play-pause");
    // var muteButton = document.getElementsByClassName("mute");
    // var fullScreenButton = document.getElementsByClassName("full-screen");
  
    // Sliders
    // var seekBar = document.getElementsByClassName("seek-bar");
    // var volumeBar = document.getElementsByClassName("volume-bar");
    
    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
      video.play();
      playButton.className = "greyed";
    });
    
    video.addEventListener("ended", function() {
      playButton.className = "";
    });
    
    // Play on window enter
    var inview = new Waypoint.Inview({
      element: document.getElementById('video'),
      entered: function(direction) {
        video.play();
      }
      // enter:
      
      // entered: function(direction) {
      //   notify('Entered triggered with direction ' + direction);
      // },
      // exit: function(direction) {
      //   notify('Exit triggered with direction ' + direction);
      // },
      // exited: function(direction) {
      //   notify('Exited triggered with direction ' + direction);
      // }
    });
  }
};




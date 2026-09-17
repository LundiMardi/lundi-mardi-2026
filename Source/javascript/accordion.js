var pttrnAccordion = function() {

  // First we detect the click event
  var accordionTabs = document.getElementsByClassName('accordion-tab');
  
  if (accordionTabs !== null ) {
    for(var i=0; i < accordionTabs.length; i++) {
      accordionTabs[i].addEventListener('click', function () {
      // Using an if statement to check the class
        if ( this.classList.contains('accordion-tab-closed') ) {
          var openTabs = document.getElementsByClassName('accordion-tab-open');
          for(var j=0; j < openTabs.length; j++) {
            openTabs[j].classList.add('accordion-tab-closed');
            openTabs[j].classList.remove('accordion-tab-open');
  
          }
          // The box that we clicked has a class of .accordion-tab-closed so let's remove it and add the .accordion-tab-open class
          this.classList.remove('accordion-tab-closed');
          this.classList.add('accordion-tab-open');
        } else {
          this.classList.remove('accordion-tab-open');
          this.classList.add('accordion-tab-closed');
        }
      });
    }
  }
};
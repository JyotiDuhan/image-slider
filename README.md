# image-slider

Image-slider is a JS based plugin providing the facilty to make a it dynamic/user-controlled(on-click left/right).

# Use cases

* Image sliding on click od left/right arrow
* Auto image sliding in particular time interval(default/user defined)
* Image sliding on keydown event of left/top/right/bottom keyboard arrows.

#Usage

Pass the configuration changes one desires in the conf.js

  userConfs = {
  	images : <array of image names in the project directory under "folderPath">,
  	slideInterval : <the time interval between 2 images to slide>,
  	startSlideInterval : <start auto sliding the images after specified time interval once window loads>,
  	folderPath : <the directory path containing images> 
  }

'use strict';

(function (w){
	//main object to run our functionality
	var newConfs = {};
	/**
	*	Default object having configuration field values:
	* 	@param [images] property array -- having the name of the images to make the slider with
	*	@param slideInterval property -- the time interval after which an image should change
	*	@param startslideInterval property -- the time to start slider once window loads
	*	@param folderPath property -- pass the images path here
	**/
	var _conf = {
		images : ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'],
		slideInterval : 3000,
		startSlideInterval : 1000,
		folderPath : 'images/'
	}
	/**	Slider will be exposed globally giving user the option to modify default configurations
	*	@param {object} confs -- object with the user defined configurations
	**/
	w.Slider = function(confs){
		return _init(confs);
	}

	// the main function performing action on the data passed
	function _init(confs){
		_setConfs(confs);

		var a,
			imgSrc,
			i = 0,
			b,
			len,
			flag,
			intrvl;

		len = newConfs.images.length;
		imgSrc = document.getElementsByClassName('img')[0];
		imgSrc.src = newConfs.folderPath + newConfs.images[0];
		a = document.getElementsByClassName('left')[0];
		b = document.getElementsByClassName('right')[0];

		// call the slider function to start after defined time delay(in milli-seconds)
		window.setTimeout(_startSlide, newConfs.startSlideInterval);

		/** slider function to move the images in particular time interval
		*	@param variable intrvl 	-- storing the interval key
		*	@param (function) _skipImages -- the function performing the actual logical part
		*			to slide images without any user action
		**/
		function _startSlide(){
			intrvl = setInterval(_skipImages, newConfs.slideInterval);
		}
		function _skipImages(){
			if(i < len && i !== len-1){
				if(flag){
					i = i;
					flag = false;
				}else{
					i = i*1+1;
				}
				imgSrc.src = 'images/' + newConfs.images[i];
			}else{
				i=0;
				flag = true;
			}
		}

		//add event listener on left arrow to slide left hand-side
		a.addEventListener('click', _triggerLeft);
		//add event listener on right arrow to slide right hand-side
		b.addEventListener('click', _triggerRight);

		/**
		*	add "keydown" event listener to switch the images on pressing top/right/bottom/left
		*	keyboard arrows
		**/
		window.addEventListener('keydown', _check);

		function _check(e) {
		    if(e.keyCode == 37 || e.keyCode == 40){
		    	_triggerLeft();
		    }else if(e.keyCode == 38 || e.keyCode == 39){
		    	_triggerRight();
		    }
		}
		//function to trigger the images on left side
		function _triggerLeft(){
			if(i < 0){
				imgSrc.src = 'images/' + newConfs.images[0];
			}else if(i < len && i > 0){
				i = i*1-1;
				imgSrc.src = 'images/' + newConfs.images[i];
			}
		}
		//function to trigger the images on right side
		function _triggerRight(){
			if(i < len && i !== len-1){
				i = i*1+1;
				imgSrc.src = 'images/' + newConfs.images[i];
			}else {
				imgSrc.src = 'images/' + newConfs.images[len-1];
			}
		}	
	}
	//	set the configuration to user defined(if passed) else to default
	function _setConfs(confs){
		if(confs && confs == Object(confs) && Object.keys(confs).length > 0){
			newConfs = confs;
		}else{
			newConfs = Object.create(_conf);
		}
	}
})(window);

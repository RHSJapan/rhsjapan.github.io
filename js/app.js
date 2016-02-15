;(function(window, document, undefined) {
	"use strict";

	var x = document.getElementsByClassName("site-header")[0],
		doc = document.documentElement,
		didNotChange = true,
		top = 0;
	
	var lastScroll = 0;


	window.addEventListener("scroll", function() {
		var docHeight = (document.body.offsetHeight || 	document.body.scrollHeight || document.body.clientHeight);
		top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
		
		// If we're scrolling up, or we've reached the end of the window, then...
		if(lastScroll >= top || top + window.innerHeight === docHeight) {
			if(didNotChange) {
				x.style.background = "#fff";
				x.style.top = "0";
				didNotChange = false;
			}
		} else {
			if(top > 110) {
				x.style.background = "none";
				x.style.top = "-11.8rem";
				didNotChange = true;
			}
		}
		lastScroll = top;
	});

})(window, document);

// Handle an edge-case where the user isn't on the officers page and s/he tries
// to click on an achor tag linking to someone else's section on the officers page.
;(function(window, document, undefined) {
	"use strict";
	
	var about = document.getElementsByClassName("about-the-author");
	if(about[0]) {
		
		var aboutTheAuthor = about[0].getElementsByTagName("p");
		
		if(aboutTheAuthor && !(window.location.href.indexOf("/officers/") > -1)) {
			for(var i = 0; i < aboutTheAuthor.length; i++) {
				var x = aboutTheAuthor[i].getElementsByTagName("a");
				if(x.length > 0) {
					for(var j = 0; j < x.length; j++) {
						var y = x[j].href;
						if(y.indexOf("#") > -1) {
							x[j].href = "/officers/" + y.substring(y.indexOf("#"));
							x[j].className = "";
						}
					}
				}
			}
		}
	}
	
})(window, document);


;(function(window, document, undefined) {
	"use strict";
	// http://stackoverflow.com/questions/8917921/
	// first add raf shim
	// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();

	// main function
	function scrollToY(scrollTargetY, speed, easing) {
	    // scrollTargetY: the target scrollY property of the window
	    // speed: time in pixels per second
	    // easing: easing equation to use

	    var scrollY = window.scrollY,
	        scrollTargetY = scrollTargetY || 0,
	        speed = speed || 2000,
	        easing = easing || 'easeOutSine',
	        currentTime = 0;

	    // min time .1, max time .8 seconds
	    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

	    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
	    var PI_D2 = Math.PI / 2,
	        easingEquations = {
	            easeOutSine: function (pos) {
	                return Math.sin(pos * (Math.PI / 2));
	            },
	            easeInOutSine: function (pos) {
	                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
	            },
	            easeInOutQuint: function (pos) {
	                if ((pos /= 0.5) < 1) {
	                    return 0.5 * Math.pow(pos, 5);
	                }
	                return 0.5 * (Math.pow((pos - 2), 5) + 2);
	            }
	        };

	    // add animation loop
	    function tick() {
	        currentTime += 1 / 60;

	        var p = currentTime / time;
	        var t = easingEquations[easing](p);

	        if (p < 1) {
	            requestAnimFrame(tick);

	            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
	        } else {
	            window.scrollTo(0, scrollTargetY);
	        }
	    }

	    // call it once to get started
	    tick();
	}

	// =================== Implementation ===================
	document.getElementsByClassName("scroll")[0].getElementsByTagName("a")[0].onclick = function(event) {
		event.preventDefault();
		scrollToY(document.getElementsByClassName("container")[1].offsetTop, 300, 'easeInOutQuint');
	};

	var offset = 425;

	if(window.location.hash) {
		var hash = window.location.hash.substring(1);
		var x = document.getElementById(hash);
		if(hash && x) {
			// Here we use a conditional to accommodate for the navigation bar.
			// If we're going to show the navbar, then lower the offset so the content shows.
			scrollToY(x.offsetTop + ((x.offsetTop > window.pageYOffset) ? offset : offset - 90), 300, 'easeInOutQuint');
		}
	}

	var scrollHash = function(h) {
		history.pushState(null, null, h);
		var hash = h.substring(1);
		var x = document.getElementById(hash);
		if(hash && x) {
			scrollToY(x.offsetTop + offset, 300, 'easeInOutQuint');
		}
	};

	var anchors = document.getElementsByClassName("anchor");
	
	var doHash = function(event) {
		event.preventDefault();
		scrollHash(this.getAttribute("href"));
	};
	
	for(var i = 0; i < anchors.length; i++) {
		anchors[i].addEventListener("click", doHash);
	}

})(window, document);

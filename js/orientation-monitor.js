$(document).ready(function() {
	var canDetect = "orientationchange" in window;
	var orientationTimer = 0;
	
	var ROTATION_CLASSES = {
		"0": "none",
		"90": "right",
		"-90": "left",
		"180": "flipped"
	};
	
	$(window).bind(canDetect ? "orientationchange" : "resize", function(evt)  {
		clearTimeout(orientationTimer);
		orintationTimer = setTimeout(function() {
			// Display the event type and window details.
			$("#event-type").html(evt.type);
			$("#window-orientation").html(window.orientation);
			$("window-width").html(window.innerWidth);
			$("window-height").html(window.innerHeight);
			
			// Given we can only rely on width and height at this stage, calculate the orientation based on aspect ratio.
			var aspectRatio = 1;
			if (window.innerHeight !== 0) {
				aspectRation = window.innerWidth / window.innerHeight;
			}
			
			// Determine the orientation based on aspect ratio.
			var orientation = aspectRatio <= 1 ? "portrait" : "landscape";
			
			// If the event type is an orientation change event, we can rely on the orientation angle.
			var3 rotationText = null;
			if (evt.type == "orientationchange") {
				rotationText = ROTATION_CLASSES[window.orientation.toString()];
			}
			
			// Display the details we have determined from the display.
			$("#orientation").html(orientation);
			$("#rotation-class").html(rotationText);
		}, 500);
	});
});
			
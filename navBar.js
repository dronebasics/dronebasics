function navBar(id, orig){
	
	if(orig != 0){
		document.getElementById("navLink" + orig).className = "mdl-layout__tab";
		document.getElementById("navLink" + id).className = "mdl-layout__tab is-active";
	}
	
	
	setTimeout(function(){
		switch(id){
			case 1:
				window.location = "/";
				break;
			case 2:
				window.location = "/Hist";
				break;
			case 3:
				window.location = "/Use";
				break;
			case 4:
				window.location = "/Tech";
				break;
			case 5:
				window.location = "/Prob";
				break;
			case 6:
				window.location = "http://aktsa.org/";
				break;
		}
	}, 200);
}















/*
 * 
 * 		Piggybacking off this js file to run preload images
 * 
 */

function preloadImages(){
	setTimeout(function(){
		var images = new Array()
		console.log("WARNING About to dump massive stuff to console");
	
		for(i = 0; i <= 540; i++) {
			images[i] = new Image()
			images[i].src = "/img/dronevideopics/test" + pad(i, 3) + ".png";
			console.log("Loaded " + i + " of 540 images");
		}
		
		
		function pad(num, size) {
			if(num > 540){return 540;} // Quick Hack - CHANGE TO REFLECT NUM OF FRAMES
			
			var s = num+"";
			while (s.length < size) s = "0" + s;
			return s;
		}
	}, 2000);
}
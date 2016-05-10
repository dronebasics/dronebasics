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
/**
 * hendytrip nz2017 javascript using Module pattern
 */
var hendytripnz2017= (function() {
	// private stuff
	var initContent = "sub/overview.html";
	
	// this is the public object
	retObj = {
	    init: function() {
	    	$( "#content-div" ).load( initContent );
	    }
	};
	
	//expose the public object
	return retObj;
	
	
	
})();
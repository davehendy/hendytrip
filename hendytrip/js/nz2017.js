/**
 * hendytrip nz2017 javascript using Module pattern
 */
var hendytripnz2017= (function() {
	// private stuff
	var overviewMap = {
			iframeURL:"https://www.google.com/maps/d/embed?mid=1EpODpplLe2xqJytYpnswcs6BGUw",
			largeURL:"https://drive.google.com/open?id=1EpODpplLe2xqJytYpnswcs6BGUw&usp=sharing"
	};
	var day3Map = {
			iframeURL:"https://www.google.com/maps/d/embed?mid=1SKzR3hojmUzY0Ah-_vLPsZRVtrc",
			largeURL:"https://drive.google.com/open?id=1SKzR3hojmUzY0Ah-_vLPsZRVtrc&usp=sharing"
	};
	var day7Map = {
			iframeURL:"https://www.google.com/maps/d/embed?mid=1gC2q61R5lG4LfeTB0qLVaj3Vp2o&hl=en,",
			largeURL:"https://drive.google.com/open?id=1gC2q61R5lG4LfeTB0qLVaj3Vp2o&usp=sharing"
	};
	var day9Map = {
			iframeURL:"https://www.google.com/maps/d/embed?mid=1rZ8x2J4EVXdnNixXRu1ekliuY3A",
			largeURL:"https://drive.google.com/open?id=1rZ8x2J4EVXdnNixXRu1ekliuY3A&usp=sharing"
	};
	var day10Map = {
			iframeURL:"https://www.google.com/maps/d/embed?mid=14Ca8vAUVz1VH9Ej2ugTVC4Q-8pk",
			largeURL:"https://drive.google.com/open?id=14Ca8vAUVz1VH9Ej2ugTVC4Q-8pk&usp=sharing"
	};
	var day12Map = {
			iframeURL:"https://www.google.com/maps/d/embed?mid=1FOg8TK_NNMXTrhAXGNeAhhwPpbo",
			largeURL:"https://drive.google.com/open?id=1FOg8TK_NNMXTrhAXGNeAhhwPpbo&usp=sharing"
	};
	var day13Map = {
			iframeURL:"https://www.google.com/maps/d/embed?mid=11A9WzgVkLE4MbxFWCDOt9Eb7JPA",
			largeURL:"https://drive.google.com/open?id=11A9WzgVkLE4MbxFWCDOt9Eb7JPA&usp=sharing"
	};
	var day15Map = {
			iframeURL:"https://www.google.com/maps/d/embed?mid=18-sYsRoULaHkDO0mDGEJRzT09Gc",
			largeURL:"https://drive.google.com/open?id=18-sYsRoULaHkDO0mDGEJRzT09Gc&usp=sharing"
	};
	var day16Map = {
			iframeURL:"https://www.google.com/maps/d/embed?mid=1HGOeqjWnzfO1h3iO3TjAlmbMAag",
			largeURL:"https://drive.google.com/open?id=1HGOeqjWnzfO1h3iO3TjAlmbMAag&usp=sharing"
	};
	var day17Map = {
			iframeURL:"https://www.google.com/maps/d/embed?mid=1h6QJIZBzP4GJm9wVvv1Cz5WCfnU",
			largeURL:"https://drive.google.com/open?id=1h6QJIZBzP4GJm9wVvv1Cz5WCfnU&usp=sharing"
	};
	var day18Map = {
			iframeURL:"https://www.google.com/maps/d/embed?mid=1g8ROgzP4z_Aveg9SdpdF2anQA8Q",
			largeURL:"https://drive.google.com/open?id=1g8ROgzP4z_Aveg9SdpdF2anQA8Q&usp=sharing"
	};
	var initContent = "sub/overview.html";
	
	function showContent(content){
		$( "#content-div" ).load( content, 
	    		{limit:25},
	    		function(responseText, textStatus, req) {
	    			//alert("status="+textStatus);
	    			//alert("req="+req.statusText);
	    			if (textStatus == "error") {
	    				alert( "error for " + content );
	    			};
	    			prepareMap();
	    		});
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	}
	
	function prepareListeners() {
		$('.sidebar1 button').click(
				function() {
				var nav=this.id;
				var substr=nav.split("nav_");
				showContent("sub/"+substr[1]+".html");
				prepareMap();
			}
		);
	}
	
	function prepareMap(){
		$('#mapholder-div').hide();
		$('.map_button').text("Show map");
		$('.map_button').click(function() {
			var mapName = $(this).attr('id').substr(0, $(this).attr('id').indexOf("_button") );
			//var mapObj=eval(mapName);
			var iframeUrl = (eval(mapName)).iframeURL;
			var hrefUrl = (eval(mapName)).largeURL;
			$('#mapholder-href').attr('href', hrefUrl);
			$('#mapholder-iframe').attr('src',iframeUrl);
			if ($(this).text() == "Show map") {
			    $(this).text("Hide map");
				$('#mapholder-div').show();
			} else {
			    $(this).text("Show map");
				$('#mapholder-div').hide();
			};
		});
		//$('#mapholder-div').hide();
		
	}
	// this is the public object
	retObj = {
	    init: function() {
	    	showContent(initContent);
	    	prepareListeners();
	    	prepareMap();
	    	//alert( "nz2017 loaded" );
	    }
	};
	
	//expose the public object
	return retObj;
	
	
	
})();
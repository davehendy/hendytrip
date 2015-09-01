// JavaScript Document

var overviewMap = {
		iframeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.kAWYDvenJNzw",
		largeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.kAWYDvenJNzw"
			};
var day1Map = {
		iframeURL:"https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d172290.75291509906!2d-122.3257734!3d47.5669515!3m2!1i1024!2i768!4f13.1!4m13!1i0!3e0!4m4!2sAvis%2C+SeaTac%2C+WA%2C+USA!3m2!1d47.4431686!2d-122.30156649999999!4m5!1s0x549015489883d027%3A0x7732e7052de67498!2sBest+Western+Plus+Executive+Inn%2C+200+Taylor+Ave+N%2C+Seattle%2C+WA+98109%2C+United+States!3m2!1d47.620042!2d-122.346046!5e0!3m2!1sen!2suk!4v1411310688312",
		largeURL:"https://goo.gl/maps/038l4"
			};
var day2Map = {
		iframeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.kyjrVyGwdRNE",
		largeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.kyjrVyGwdRNE"
			};
var day3Map = {
		iframeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.kPJ3BKuNl3o8",
		largeURL:"https://www.google.co.uk/maps/dir/Best+Western+Plus+Executive+Inn,+Taylor+Ave+N,+Seattle,+WA,+United+States/Future+of+Flight+Aviation+Center+%26+Boeing+Tour,+8415+Paine+Field+Blvd,+Mukilteo,+WA+98275,+United+States/Majestic+Inn+%26+Spa,+419+Commercial+Ave,+Anacortes,+WA+98221,+United+States/@48.0685441,-122.9854163,9z/data=!3m2!4b1!5s0x54900164f7cea285:0xb8080cf133d343d0!4m20!4m19!1m5!1m1!1s0x549015489883d027:0x7732e7052de67498!2m2!1d-122.346046!2d47.620042!1m5!1m1!1s0x54900164ecbcc685:0x64072bd20ae2a67b!2m2!1d-122.290181!2d47.921345!1m5!1m1!1s0x548579e12705e52f:0x9d5de961b6790b52!2m2!1d-122.612222!2d48.518558!3e0?hl=en"
			};
var day4Map = {
		iframeURL:"https://www.google.com/maps/d/embed?mid=zkadZ66ov4NE.kijgCBx8592s",
		largeURL:"https://www.google.com/maps/d/embed?mid=zkadZ66ov4NE.kijgCBx8592s"
			};
var day5Map = {
		iframeURL:"https://www.google.com/maps/d/embed?mid=zkadZ66ov4NE.kyCTMV5PWFKE",
		largeURL:"https://www.google.co.uk/maps/dir/Majestic+Inn+%26+Spa,+Commercial+Avenue,+Anacortes,+WA,+United+States/River%27s+Edge+Resort,+115+Riverside+Ave,+Winthrop,+WA+98862,+United+States/@48.454198,-122.5833973,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x548579e12705e52f:0x9d5de961b6790b52!2m2!1d-122.6122217!2d48.5185584!1m5!1m1!1s0x549cafab3d7052e1:0xa25175403e45b276!2m2!1d-120.1863647!2d48.479659"
			};
var day6Map = {
		iframeURL:"https://www.google.com/maps/d/embed?mid=zkadZ66ov4NE.kiAcm0UJc8D0",
		largeURL:"https://www.google.co.uk/maps/dir/River's+Edge+Resort,+Riverside+Avenue,+Winthrop,+WA,+United+States/Brewster,+WA,+USA/Grand+Coulee+Dam,+Coulee+Dam,+WA,+USA/Republic,+WA,+United+States/Tiger,+WA,+United+States/La+Quinta+Inn+Sandpoint,+Cedar+Street,+Sandpoint,+ID,+United+States/@48.2835798,-120.7335595,7z/data=!3m1!4b1!4m38!4m37!1m5!1m1!1s0x549cafab3d7052e1:0xa25175403e45b276!2m2!1d-120.1863647!2d48.479659!1m5!1m1!1s0x549c8691403967bf:0xd276071c48758925!2m2!1d-119.7806166!2d48.0959784!1m5!1m1!1s0x549c464918d80729:0xc58820e9cd30936d!2m2!1d-118.9809849!2d47.9565529!1m5!1m1!1s0x549d6ea629f11965:0x5905f1f1bf44886d!2m2!1d-118.7378067!2d48.6482183!1m5!1m1!1s0x5362f8149372e6a1:0xe6e3f40af3690c4f!2m2!1d-117.4076!2d48.689461!1m5!1m1!1s0x5363d6c8c79c80f1:0xc91cac0b572d92c8!2m2!1d-116.5529837!2d48.27596!3e0?hl=en"
			};
var day7Map = {
		iframeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.k6mehYSgjI7Q",
		largeURL:"https://www.google.co.uk/maps/dir/La+Quinta+Inn+Sandpoint,+415+Cedar+St,+Sandpoint,+ID+83864,+United+States/Pine+Lodge,+920+Spokane+Ave,+Whitefish,+Mt+59937,+United+States/@48.4566987,-116.5405556,8z/data=!4m19!4m18!1m10!1m1!1s0x5363d6c8c79c80f1:0xc91cac0b572d92c8!2m2!1d-116.551927!2d48.275984!3m4!1m2!1d-115.0942406!2d48.9053127!3s0x5365b56f2f4169bd:0xaa772925315e6bdd!1m5!1m1!1s0x53666835387fcbe7:0x24824a7bfa1e1763!2m2!1d-114.33565!2d48.403193!3e0?hl=en"
			};
var day8Map = {
		iframeURL:"https://www.google.com/maps/d/embed?mid=zkadZ66ov4NE.kNsBzCsCgQaQ",
		largeURL:"https://www.google.com/maps/d/embed?mid=zkadZ66ov4NE.kNsBzCsCgQaQ"
			};
var day9Map = {
		iframeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.kPEZJ-3zrY-Q",
		largeURL:"https://www.google.co.uk/maps/dir/Pine+Lodge,+920+Spokane+Ave,+Whitefish,+Mt+59937,+United+States/Three+Bear+Lodge,+217+Yellowstone+Ave,+West+Yellowstone,+Mt+59758,+United+States/@46.7860742,-113.1138962,7z/data=!4m19!4m18!1m10!1m1!1s0x53666835387fcbe7:0x24824a7bfa1e1763!2m2!1d-114.335553!2d48.403222!3m4!1m2!1d-111.2715466!2d44.8271542!3s0x53504c992be36c29:0x51917ab816e710c3!1m5!1m1!1s0x5351b9be0cceb07f:0xd71bda6a2724ce95!2m2!1d-111.1030205!2d44.6589212!3e0?hl=en"
			};
var day10Map = {
		iframeURL:"https://www.google.com/maps/d/embed?mid=zkadZ66ov4NE.klOuDT_gikVg",
		largeURL:"https://www.google.com/maps/d/embed?mid=zkadZ66ov4NE.klOuDT_gikVg"
			};
var day11Map = {
		iframeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.kd-mICXg5SJM",
		largeURL:"https://www.google.co.uk/maps/dir/Three+Bear+Lodge,+217+Yellowstone+Ave,+West+Yellowstone,+Mt+59758,+United+States/Jenny+Lake+Visitor+Center,+Moose,+WY,+United+States/Antler+Inn,+West+Pearl+Avenue,+Jackson,+WY,+USA/@44.0695808,-112.0204747,8z/data=!3m1!4b1!4m21!4m20!1m5!1m1!1s0x5351b9be0cceb07f:0xd71bda6a2724ce95!2m2!1d-111.1030205!2d44.6589212!1m5!1m1!1s0x5352547d90b1deff:0x99126bffbd5681a7!2m2!1d-110.7223293!2d43.7514791!1m5!1m1!1s0x53531a6824cf1a0f:0x53f5d27f7d35ca19!2m2!1d-110.7632589!2d43.4781649!3e0!4e1?hl=en"
			};
var day12Map = {
		iframeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.kVuGCc7THcj4",
		largeURL:"https://www.google.co.uk/maps/dir/Antler+Inn,+43+W+Pearl+Ave,+Jackson+Hole,+WY+83001,+United+States/The+Modern+Hotel+and+Bar,+1314+W+Grove+St,+Boise,+ID+83702,+United+States/@43.5897018,-115.2096898,9z/data=!4m24!4m23!1m15!1m1!1s0x53531a6824cf1a0f:0x53f5d27f7d35ca19!2m2!1d-110.763043!2d43.478119!3m4!1m2!1d-113.6270694!2d43.4151845!3s0x54aa151f8b22ab4d:0x25aad3fa2a309498!3m4!1m2!1d-115.6166735!2d44.0247951!3s0x54a8cd796fa484d9:0xcb8f894e586a8013!1m5!1m1!1s0x54aef8e63b44f6fd:0x3f2cd79be88d2811!2m2!1d-116.211119!2d43.61851!3e0"
			};
var day13Map = {
		iframeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.k3MaiVn8WRCE",
		largeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.k3MaiVn8WRCE"
			};
var day14Map = {
		iframeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.kNjky8Xu00RY",
		largeURL:"https://www.google.co.uk/maps/dir/The+Modern+Hotel+and+Bar,+1314+W+Grove+St,+Boise,+ID+83702,+United+States/Mark+Spencer+Hotel,+United+States/@44.6998123,-121.6517388,7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x54aef8e63b44f6fd:0x3f2cd79be88d2811!2m2!1d-116.211119!2d43.61851!1m5!1m1!1s0x54950a030a91e631:0xba64b513db87439f!2m2!1d-122.682251!2d45.522102!3e0"
			};
var day15Map = {
		iframeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.kIEdSJRI1AhM",
		largeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.kIEdSJRI1AhM"
			};
var day16Map = {
		iframeURL:"https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.kUrWEkBGblKM",
		largeURL:"https://www.google.co.uk/maps/dir/Mark+Spencer+Hotel,+Portland,+OR,+USA/Rental+Car+Facility,+South+160th+Street,+SeaTac,+WA,+United+States/@46.491119,-123.7856018,8z/data=!4m14!4m13!1m5!1m1!1s0x54950a030a91e631:0xba64b513db87439f!2m2!1d-122.682251!2d45.522102!1m5!1m1!1s0x5490434865a62253:0x6dd276cbfdb3a5fd!2m2!1d-122.2930421!2d47.4611028!3e0"
			};
$(document).ready(function() {
   //$('#content_original').hide();
	$("#dialogBA49menu").hide();
   showContent("overview");
   prepareListeners();
   prepareMaps();
   setUpCountdown();
   
   var sDay = urlParam("day");
   if (sDay != null) {
   	  //alert("day="+sDay);	  
	  $('#nav_day'+sDay).click();
   }
   
 });

function hideDialog(dialogName) {
	$("#"+dialogName).dialog('close');
};
function showDialog(obj) {
	//alert(obj.id);
	//$("#dest_dialog").dialog();
	//$("#dest_dialog").dialog('open');
	//alert("done");
	var dialogOpts  = {
		buttons: {
            Close: function() {$(this).dialog("close");}
        },
		title:obj.id.substr(4),
		height:"300",
		width:"600px",
		show:{effect:"blind",duration:2000},
		hide:{effect:"explode",duration:2000},
		autoOpen:false
	};
	$(".divDialog").hide();
	$("#dialog"+obj.id.substr(4)).show();
	//$("#"+dialogName).dialog(dialogOpts);
	//$("#"+dialogName).dialog("open");
	$("#dest_dialog").dialog(dialogOpts);
	$("#dest_dialog").dialog("open");
	

};
 
function prepareListeners(){
	$('.dest').click(
		function(){
			showDialog(this);
		}
		);
	
	$('.menuentry').click(
			function() {
			//alert("on");
		}
	);
	$('.sidebar1 a').click(
			function() {
			var nav=this.id;
			var substr=nav.split("nav_");
			showContent(substr[1]);
		}
	);
	$('.sidebar1 button').click(
			function() {
			var nav=this.id;
			var substr=nav.split("nav_");
			showContent(substr[1]);
		}
	);
	
	$('#BA49menu').click(
			function(){
				//alert("hello");
				$('#dialogBA49menu').dialog({
					width:"700",
					height:"610",
					show:{effect:"blind",speed:2000},
					hide:{effect:"explode",speed:2000},
					buttons: {
			            Close: function() {$(this).dialog("close");}
			        }
				});
				
			}
	);
};

function prepareMaps(){
	//$('.map_holder').hide();
	$('#mapholder-div').hide();
	
	$('.map_button').text("Show map");
	
	$('.map_button').click(function() {
		var mapName = $(this).attr('id').substr(0, $(this).attr('id').indexOf("_button") );
		if ($(this).text() == "Show map") {
			
			//var url="https://mapsengine.google.com/map/embed?mid=zkadZ66ov4NE.kAWYDvenJNzw";
			var iframeUrl = getMapDetails(mapName).iframeURL;
			if ($('#mapholder-iframe').attr('src') != iframeUrl) {
				$('#mapholder-iframe').attr('src',iframeUrl);
			}
			$('#mapholder-href').attr('href', getMapDetails(mapName).largeURL);
			
		    $(this).text("Hide map");
			//$('#'+mapName).show();
			$('#mapholder-div').show();
		} else {
		    $(this).text("Show map");
			//$('#'+mapName).hide();
			$('#mapholder-div').hide();
		};
	});
}

function getMapDetails(map){
	obj = eval(map);
	return obj;
}


function showContent(content){
	$('#mapholder-div').hide();
	$('.map_button').text("Show map");
	$('div.content_block').hide();
	$('#content_'+content).show();
	
	$('html, body').animate({ scrollTop: 0 }, 'fast');
	
	//var iframe = $('#content_'+content).find('iframe');
	//var iframeSrc = $(iframe).attr('src');
	//iframe.delay(250).attr('src',iframeSrc);
}

function setUpCountdown() {
	var today = new Date();
	var departure = new Date("September 5, 2015 15:30:00");
	if (today > departure) {
		$("#countdown_div").html("");
		return;
	}
	var diffms = departure.getTime() - today.getTime();
	var interval = new Date(diffms);
	var intervalDays = Math.floor(interval / (24 * 60 * 60 * 1000));
	interval = interval - (intervalDays * 24 * 60 * 60 * 1000);
	var intervalHours = Math.floor(interval  / (60 * 60 * 1000));
	interval = interval - (intervalHours * 60 * 60 * 1000);
	var intervalMins = Math.floor(interval / (60 * 1000));
	interval = interval - (intervalMins * 60 * 1000);
	var intervalSecs = Math.floor(interval / (1000));
	
	setInterval(function (){
		var intervalString = intervalDays + " days <br />" + intervalHours + " hours <br />" + intervalMins + " minutes <br />" + intervalSecs + " seconds";
		intervalString = intervalString + "<br/>until BA49 departs for Seattle.";
		$("#countdown_div").html(intervalString);
		intervalSecs --;
		if (intervalSecs < 0) {intervalSecs = 59;intervalMins --;}
		if (intervalMins < 0) {intervalMins = 59;intervalHours --;}
		if (intervalHours < 0) {intervalHours = 23;intervalDays --;}
		
	},1000);
	
}

urlParam = function(name){
    var results = new RegExp('[\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}




	 
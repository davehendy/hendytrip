// JavaScript Document

$(document).ready(function() {
   //$('#content_original').hide();
   showContent("overview");
   prepareListeners();
   
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
};

function showContent(content){
	$('div.content_block').hide();
	$('#content_'+content).show();
	
	var iframe = $('#content_'+content).find('iframe');
	var iframeSrc = $(iframe).attr('src');
	iframe.delay(250).attr('src',iframeSrc);
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




	 
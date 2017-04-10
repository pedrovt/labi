var btn_ping, btn_trace, btn_nslp, btn_geoip;

function reset_btn_ping(){
  		btn_ping.button('reset');
  	}

function reset_btn_trace(){
  		btn_trace.button('reset');
  	}

function reset_btn_nslp(){
  		btn_nslp.button('reset');
  	}

function reset_btn_geoip(){
  		btn_geoip.button('reset');
  	}

$(document).ready(function(){

    //tool box event button's fuctions
    $('#go-ping-btn').on('click', function () {
    	btn_ping = $(this).button('loading')
    	var userInput = $("#ping-dest").val();
		$('#ping-results-pannel').html('<iframe class="big-results-frame" id="ping-frame" src="http://api.hackertarget.com/nping/?q=' + userInput + '" frameborder="0" onload="reset_btn_ping()"></iframe>');
  	});

  	$('#go-trace-btn').on('click', function () {
    	btn_trace = $(this).button('loading')
    	var userInput = $("#trace-dest").val();
		$('#trace-results-pannel').html('<iframe class="big-results-frame" id="trace-frame" src="http://api.hackertarget.com/mtr/?q=' + userInput + '" frameborder="0" onload="reset_btn_trace()"></iframe>');
  	});

  	$('#go-nslp-btn').on('click', function () {
    	btn_nslp = $(this).button('loading')
    	var userInput = $("#nslp-dest").val();
		$('#nslp-results-pannel').html('<iframe class="big-results-frame" id="nslp-frame" src="http://api.hackertarget.com/dnslookup/?q=' + userInput + '" frameborder="0" onload="reset_btn_nslp()"></iframe>');
  	});

  	$('#go-geoip-btn').on('click', function () {
    	btn_geoip = $(this).button('loading')
    	var userInput = $("#geoip-dest").val();
		$('#geoip-results-pannel').html('<iframe class="big-results-frame" id="geoip-frame" src="http://api.hackertarget.com/dnslookup/?q=' + userInput + '" frameborder="0" onload="reset_btn_geoip()"></iframe>');
  	});

    //chage event called with enter key for each tool inout box
    $(document).on('keypress', '#ping-dest', function(e) {

        if ( e.keyCode == 13 ) {  // detect the enter key
          e.preventDefault();
            $('#go-ping-btn').click(); // fire a sample click,  you can do anything
        }
    });

    $(document).on('keypress', '#trace-dest', function(e) {

        if ( e.keyCode == 13 ) {  // detect the enter key
          e.preventDefault();
            $('#go-trace-btn').click(); // fire a sample click,  you can do anything
        }
    });

    $(document).on('keypress', '#nslp-dest', function(e) {

        if ( e.keyCode == 13 ) {  // detect the enter key
          e.preventDefault();
            $('#go-nslp-btn').click(); // fire a sample click,  you can do anything
        }
    });

    $(document).on('keypress', '#geoip-dest', function(e) {

        if ( e.keyCode == 13 ) {  // detect the enter key
          e.preventDefault();
            $('#go-geoip-btn').click(); // fire a sample click,  you can do anything
        }
    });
});
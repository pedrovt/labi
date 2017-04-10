$(document).ready(function(){

	$('#g-i-pop, #g-w-pop, #g-v-pop, #f-i-pop, #f-w-pop, #t-i-pop, #t-w-pop, #t-v-pop, #n-i-pop, #n-w-pop, #n-v-pop, #u-i-pop, #u-w-pop').on("click", function() {
		$('#imagepreview').attr('src', $(this).find('img').attr('src'));
		$('#pop-title').html($(this).find('img').attr('alt'));
		$('#imagemodal').modal('show'); 
	});

});
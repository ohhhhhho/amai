$(function(){


/*	$('body.intro').removeClass('intro');
	
	setTimeout(function(){
	  setNavi();
	 // $('body').addClass('ready');
    },1000);
	
	imgChange();
	uaCheck();
	
	if(!isPC() || tablet==true){
		spFunc();
	}else{
		scrollevt();
	}
	
});*/

	
	$('.mb_teb').click(function(){
		$('#mb_teb1').animate({
			left:0
			},500)	
		$('.black').fadeIn()
			
		});
		
		
	$('.close').click(function(){
		$('#mb_teb1').animate({
			left:-400
			},500);
		$('.black').fadeOut()	
		});


			
	$('.intro_scroll').click(function(){
		$('.intro').stop().animate({
					top:'-100%'
					},1000);
		});		
	$('.intro_scroll').mouseenter(function(){
		$('.intro_scroll p').stop().show()
		});
	$('.intro_scroll').mouseleave(function(){
		$('.intro_scroll p').stop().hide()
		});
			
			});
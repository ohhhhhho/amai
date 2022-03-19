$(function(){
	$('.menu2>li').click(function(){
			$(this).children('.line2').stop().show()
		
			});
	
		$('.bg1').mouseenter(function(){
			$('.bg_1').stop().fadeIn()
			});
		$('.bg1').mouseleave(function(){
			$('.bg_1').stop().fadeOut()
			});
		$('.bg2').mouseenter(function(){
			$('.bg_2').stop().fadeIn()
			});
		$('.bg2').mouseleave(function(){
			$('.bg_2').stop().fadeOut()
			});
		$('.bg3').mouseenter(function(){
			$('.bg_3').stop().fadeIn()
			});
		$('.bg3').mouseleave(function(){
			$('.bg_3').stop().fadeOut()
			});
		
		
		$('.pin1').click(function(){
			$('.black').show()
			$('.close1').show()
			$('.google1').show()
			});
		$('.close1').click(function(){
			$('.black').hide()
			$('.close').hide()
			$('.google1').hide()
		    });
		
		$('.pin2').click(function(){
			$('.black').show()
			$('.close1').show()
			$('.google2').show()
			});
		$('.close1').click(function(){
			$('.black').hide()
			$('.close').hide()
			$('.google2').hide()
		    });
		$('.pin3').click(function(){
			$('.black').show()
			$('.close1').show()
			$('.google3').show()
			});
		$('.close1').click(function(){
			$('.black').hide()
			$('.close1').hide()
			$('.google3').hide()
		    });
			
		
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
		
	var n=1
    $('#menu_btn').click(function(){
       $('.e2').stop().show()
	   $('.e3').stop().show()
    });
	
	var n=1
    $('#menubtn').click(function(){
       $('.bg3').slideToggle(500)
    });
	
	});
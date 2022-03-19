$(function(){
		$('.menu2>li').click(function(){
			$(this).children('.line2').stop().show()
		
			});
		
		$('.b1').click(function(){
			$('.b_1').slideToggle()
			});
			
		$('.b2').click(function(){
			$('.b_2').slideToggle()
			});
		$('.b3').click(function(){
			$('.b_3').slideToggle()
			});
		$('.b4').click(function(){
			$('.b_4').slideToggle()
			});
		$('.b5').click(function(){
			$('.b_5').slideToggle()
			});
		$('.b6').click(function(){
			$('.b_6').slideToggle()
			});
		$('.b7').click(function(){
			$('.b_7').slideToggle()
			});
		$('.b8').click(function(){
			$('.b_8').slideToggle()
			});
		$('.b9').click(function(){
			$('.b_9').slideToggle()
			});
		$('.b10').click(function(){
			$('.b_10').slideToggle()
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
	});
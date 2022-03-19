$(document).ready(function(){
	
	
	$('.menu1>li>a').click(function(){
			$(this).children('.line').stop().show()
		
			});
	$('.menu2>li>a').click(function(){
			$(this).children('.line2').stop().show()
		
			});
	
	
		$('.br_1').mouseenter(function(){
			$('.br1').stop().show()
			});
			
		$('.br_1').mouseleave(function(){
			$('.br1').stop().hide()
			});
		$('.br_2').mouseenter(function(){
			$('.br2').stop().show()
			});
		$('.br_2').mouseleave(function(){
			$('.br2').stop().hide()
			});
		$('.br_3').mouseenter(function(){
			$('.br3').stop().show()
			});
		$('.br_3').mouseleave(function(){
			$('.br3').stop().hide()
			});
		$('.br_4').mouseenter(function(){
			$('.br4').stop().show()
			});
		$('.br_4').mouseleave(function(){
			$('.br4').stop().hide()
			});
		$('.br_5').mouseenter(function(){
			$('.br5').stop().show()
			});
		$('.br_5').mouseleave(function(){
			$('.br5').stop().hide()
			});
		$('.br_6').mouseenter(function(){
			$('.br6').stop().show()
			});
		$('.br_6').mouseleave(function(){
			$('.br6').stop().hide()
			});
		$('.br_7').mouseenter(function(){
			$('.br7').stop().show()
			});
		$('.br_7').mouseleave(function(){
			$('.br7').stop().hide()
			});
		$('.br_8').mouseenter(function(){
			$('.br8').stop().show()
			});
		$('.br_8').mouseleave(function(){
			$('.br8').stop().hide()
			});

		
		
		
		
		
		n=0
		$('.bradebg div').each(function(){
			n++;
			
			$('.left').delay(500*n).animate({
				'left':700
				});
			$('.top').delay(1000*n).animate({
				'top':250
				});
			
			$('.bottom').delay(1500*n).animate({
				'bottom':600
				});
			$('.right').delay(2000*n).animate({
				'right':-500
				});	
		});



		r = 0
	function rotate(){
		r += 5
		$('.logo').css('transform','rotateY('+r+'deg)')
	}
	setInterval( function(){	rotate()	} ,50)

	
	
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
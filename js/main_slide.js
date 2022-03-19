$(function(){
		n=0
		id=setInterval(function(){
			next()
			},2500);//setInterval 일정시간 마다 반복실행 하는 함수
		function change(){
			$('.mainbg div').fadeOut()
			$('.main_bg'+n).fadeIn()
			}
			
			function next(){
				n++
				if(n==6){
					n=1
					}
			change()
				}
			/*function prev(){
				n--
				if(n==0){
					n=3
					}
			change()		
				}*/
				
			function change(){
				$('.main_bg2').fadeOut()
				$('.main_bg3').fadeOut()
				$('.main_bg4').fadeOut()
				$('.main_bg5').fadeOut()
				$('.main_bg'+n).fadeIn()
				}
				
			
		});
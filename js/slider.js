$(function(){

	x = 0
	dir = 1
	id=setInterval(function(){	moveL()	},70)
	function moveL(){//왼쪽으로 조금 한번 이동
		x -= 3
		if(x <= -1000){
			x = 0
		}
		$('#slide_1').css('left',x)
	}
	function moveR(){
		x += 3
		if(x >= 0){
			x = -1000
		}
		$('#slide_1').css('left',x)
	}
	$('.next').click(function(){
		dir = 1
		clearInterval(id)
		id=setInterval(function(){	moveL()	} , 100)
	})
	$('.prev').click(function(){
		dir =2
		clearInterval(id)
		id=setInterval(function(){	moveR()	} , 100)
	})
	
	$('.frame').mouseenter(function(){
		clearInterval(id)	
	})
	
	$('.frame').mouseleave(function(){
		if(dir == 1){
			id=setInterval(function(){	moveL()	} , 100)
		}else{
			id=setInterval(function(){	moveR()	} , 100)
		}
	})
})





















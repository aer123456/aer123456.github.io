window.onload = function() { 
	/* 第一针帧的鼠标移入移出效果 */
	
	// var top = $(".div1 .left .bottom").css("top");
	// if(top == "150px"){
	// 	$(".div1 .left .bottom").animate({
	// 		top: "200px",
	// 	}, 1500);
	// }
	

	/* 第二帧的鼠标移入移出效果 */
	$('.div2').mouseenter(function(){
		var bottom = $(".div2 .img .img2").css("bottom");
		var width = $(".div2 .img .img2").css("width");
		if(width == "220px") {
			$(".div2 .img .img2").animate({
				bottom: "-15px",
			}, 1500);
		} else if (width == "300px") {
			$(".div2 .img .img2").animate({
				bottom: "-8px",
			}, 1500);
		} else if (width == "450px") {
			$(".div2 .img .img2").animate({
				bottom: "-15px",
			}, 1500);
		} 
	});

	/* 第三帧的鼠标移入移出效果 */
	$('.div3 .left').mouseenter(function(){
		$(".div3 .left .content").fadeIn("slow","linear");
	});
	$('.div3 .left').mouseleave(function(){
		$(".div3 .left .content").fadeOut("slow","linear");		
	});
	$('.div3 .right').mouseenter(function(){
		$('.div3 .right .content').fadeIn("slow");
	});
	$('.div3 .right').mouseleave(function(){	
		$('.div3 .right .content').fadeOut("slow");			
	});
	
	/* 第四帧的鼠标移入效果 */
	$('.div4').mouseenter(function(){
		function timeout1() {
			$(".div4 .left").animate({ 
		    	top: "4px",
			}, 500);
		}
		function shake1() {
			$(".div4 .left").animate({ 
		    	top: "2px",
			}, 20);
			$(".div4 .left").animate({ 
			    top: "6px",
			}, 20);
		}
		function getback() {
			$(".div4 .left").animate({ 
		    	top: "4px",
			}, 30);
		}
		function shakes_left() {
			shake1();
			shake1();
			shake1();
			shake1();
			shake1();
			shake1();
			getback();
			timeout1();
		}
		setInterval(shakes_left, 60);


		function timeout2() {
			$(".div4 .right_shakes").animate({ 
		    	right: "54px",
			}, 500);
		}
		function shake2() {
			$(".div4 .right_shakes").animate({ 
		    	right: "52px",
			}, 20);
			$(".div4 .right_shakes").animate({ 
			    right: "56px",
			}, 20);
		}
		function getback2() {
			$(".div4 .right_shakes").animate({ 
		    	right: "54px",
			}, 20);
		}
		function shake2_shake() {
			shake2();
			shake2();
			shake2();
			shake2();
			shake2();
			shake2();
			getback2();
			timeout2();
		}


		function timeout3() {
			$(".div4 .right_shakes").animate({ 
		    	right: "125px",
			}, 500);
		}
		function shake3() {
			$(".div4 .right_shakes").animate({ 
		    	right: "123px",
			}, 20);
			$(".div4 .right_shakes").animate({ 
			    right: "127px",
			}, 20);
		}
		function getback3() {
			$(".div4 .right_shakes").animate({ 
		    	right: "125px",
			}, 20);
		}
		function shake3_shake() {
			shake3();
			shake3();
			shake3();
			shake3();
			shake3();
			shake3();
			getback3();
			timeout3();
		}

		var shake2_right = $(".div4 .right_shakes").css("right");
		if(shake2_right == "54px") {
			setInterval(shake2_shake, 60);
		} else if(shake2_right == "125px") {
			setInterval(shake3_shake, 60); 
		} else {
			setInterval(shake3_shake, 60); 
		}
		

	});

	/* 第七帧的动画效果 */
	$('.div7 .right .flyme_wrap').mouseenter(function(){
		$('.div7 .right .flyme').fadeIn("slow");
		$('.div7 .left .flyme_p').css('color', '#767676');
	});
	$('.div7 .right .flyme_wrap').mouseleave(function(){			
		$('.div7 .right .flyme').fadeOut("slow");
		$('.div7 .left .flyme_p').css('color', '#bbbdbf');
	});
	$('.div7 .right .unlock_wrap').mouseenter(function(){
		$('.div7 .right .unlock').fadeIn("slow");
		$('.div7 .left .unlock_p').css('color', '#767676');
	});
	$('.div7 .right .unlock_wrap').mouseleave(function(){			
		$('.div7 .right .unlock').fadeOut("slow");
		$('.div7 .left .unlock_p').css('color', '#bbbdbf');
	});

	/* 第八帧的动画效果 */
	$('.div8').mouseenter(function(){
		$('.time hr').animate({
			width: "280px",
		}, 3500);
		setTimeout('$(".div8 .span1").css("color", "#767676")', 3500);
		$('.weight hr').animate({
			width: "60px",
		}, 1000);
		setTimeout('$(".div8 .span2").css("color", "#767676")', 1000);

	});
}; 
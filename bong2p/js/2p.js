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
		var bottom = $(".div2 .img .img1").css("bottom");
		if(bottom == "-30px"){
			// $(".div2 .img .img1").animate({
			// 	bottom: "-35px",
			// }, 1500);
			$(".div2 .img .img2").animate({
				bottom: "-8px",
			}, 1500);
			// $(".div2 .img .img2").animate({
			// 	bottom: "-15px",
			// }, 700);
			// $(".div2 .img .img3").animate({
			// 	bottom: "-35px",
			// }, 1500);
		}
	});

	/* 第三帧的鼠标移入移出效果 */
	$('.div3 .left').mouseenter(function(){
		$('.div3 .left .content').show("slow");
		// $('.div3 .left .content').css('display', 'block');
	});
	$('.div3 .left').mouseleave(function(){	
		$('.div3 .left .content').hide("slow");		
		// $('.div3 .left .content').css('display', 'none');
	});
	$('.div3 .right').mouseenter(function(){
		$('.div3 .right .content').show("slow");
		// $('.div3 .right .content').css('display', 'block');
	});
	$('.div3 .right').mouseleave(function(){	
		$('.div3 .right .content').hide("slow");			
		// $('.div3 .right .content').css('display', 'none');
	});
	
	/* 第四帧的鼠标移入效果 */
	$('.div4').mouseenter(function(){
		function timeout() {
			$(".div4 .left").animate({ 
		    	top: "4px",
			}, 300);
		}
		function shake1() {
			$(".div4 .left").animate({ 
		    	top: "2px",
			}, 30);
			$(".div4 .left").animate({ 
			    top: "6px",
			}, 30);
		}
		setInterval(shake1, 60);

		var shake2_right = $(".div4 .right_shakes").css("right");
		if(shake2_right == "54px") {
			function shake2() {
				$(".div4 .right_shakes").animate({ 
			    	right: "52px",
				}, 30);
				$(".div4 .right_shakes").animate({ 
				    right: "56px",
				}, 30);
			}
			setInterval(shake2, 60);
		} else if(shake2_right == "125px") {
			function shake2() {
				$(".div4 .right_shakes").animate({ 
			    	right: "123px",
				}, 30);
				$(".div4 .right_shakes").animate({ 
				    right: "127px",
				}, 30);
			}
			setInterval(shake2, 60); 
		}
		

	});

	/* 第七帧的动画效果 */
	$('.div7 .right .flyme_wrap').mouseenter(function(){
		$('.div7 .right .flyme').show("slow");
		$('.div7 .left .flyme_p').css('color', '#767676');
	});
	$('.div7 .right .flyme_wrap').mouseleave(function(){			
		$('.div7 .right .flyme').hide("slow");
		$('.div7 .left .flyme_p').css('color', '#bbbdbf');
	});
	$('.div7 .right .unlock_wrap').mouseenter(function(){
		$('.div7 .right .unlock').show("slow");
		$('.div7 .left .unlock_p').css('color', '#767676');
	});
	$('.div7 .right .unlock_wrap').mouseleave(function(){			
		$('.div7 .right .unlock').hide("slow");
		$('.div7 .left .unlock_p').css('color', '#bbbdbf');
	});

	/* 第八帧的动画效果 */
	$('.div8').mouseenter(function(){
		$('.time hr').animate({
			width: "280px",
		}, 3500);
		$('.weight hr').animate({
			width: "60px",
		}, 1000);
	});
}; 
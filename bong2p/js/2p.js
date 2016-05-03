window.onload = function() { 
	/* 第一针帧的鼠标移入移出效果 */
	$('.div1').mouseenter(function(){
		var top = $(".div1 .left .bottom").css("top");
		if(top == "150px"){
			$(".div1 .left .bottom").animate({
				top: "200px",
			}, 1500);
		}
	});

	/* 第二帧的鼠标移入移出效果 */
	$('.div2').mouseenter(function(){
		var bottom = $(".div2 .img .img1").css("bottom");
		if(bottom == "-50px"){
			$(".div2 .img .img1").animate({
				bottom: "-35px",
			}, 1500);
			$(".div2 .img .img2").animate({
				bottom: "-8px",
			}, 4200);
			$(".div2 .img .img2").animate({
				bottom: "-15px",
			}, 700);
			$(".div2 .img .img3").animate({
				bottom: "-35px",
			}, 1500);
		}
	});

	/* 第三帧的鼠标移入移出效果 */
	$('.div3 .left').mouseenter(function(){
		$('.div3 .left .content').css('display', 'block');
	});
	$('.div3 .left').mouseleave(function(){			
		$('.div3 .left .content').css('display', 'none');
	});
	$('.div3 .right').mouseenter(function(){
		$('.div3 .right .content').css('display', 'block');
	});
	$('.div3 .right').mouseleave(function(){			
		$('.div3 .right .content').css('display', 'none');
	});
	
	/* 第四帧的鼠标移入效果 */
	$('.div4').mouseenter(function(){
		var width = $('.div4 .hand').width();
		if(width == 400) {
			$(".div4 .left").animate({ 
		    	width: "20%",
		    	top: "-8px",
		    	left: "160px",
			}, 1000);
			$(".div4 .left").animate({ 
		    	width: "84px",
		    	top: "4px",
		    	left: "172px",
			}, 1000);
			
			$(".div4 .right_shakes").animate({ 
		    	width: "130px",
		    	heihgt: "150px",
		    	top: "150px",
		    	right: "45px",
			}, 1000);
			$(".div4 .right_shakes").animate({ 
		    	width: "110px",
		    	heihgt: "120px",
				right: "54px",
				top: "160px",
			}, 1000);
		}
		if(width == 500) {
			$(".div4 .left").animate({ 
		    	width: "25%",
		    	top: "-8px",
		    	left: "205px",
			}, 1000);
			$(".div4 .left").animate({ 
		    	width: "20%",
		    	top: "8px",
		    	left: "218px",
			}, 1000);
			
			$(".div4 .right_shakes").animate({ 
		    	width: "200px",
		    	heihgt: "160px",
		    	top: "150px",
		    	right: "112px",
			}, 1000);
			$(".div4 .right_shakes").animate({ 
		    	width: "160px",
		    	heihgt: "140px",
				right: "130px",
				top: "155px",
			}, 1000);
		}
	});

	/* 第七帧的动画效果 */
	$('.div7 .right .flyme').mouseenter(function(){
		$('.div7 .right .flyme').attr('src', '../img/2p/7-2-2.jpg');
		$('.div7 .left .flyme_p').css('color', '#000');
		$('.div7 .left .flyme_p').css('font-weight', 'bold');
	});
	$('.div7 .right .flyme').mouseleave(function(){			
		$('.div7 .right .flyme').attr('src', '../img/2p/7-2-1.jpg');
		$('.div7 .left .flyme_p').css('color', '#767676');
		$('.div7 .left .flyme_p').css('font-weight', 'normal');
	});
	$('.div7 .right .unlock').mouseenter(function(){
		$('.div7 .right .unlock').attr('src', '../img/2p/7-3-2.jpg');
		$('.div7 .left .unlock_p').css('color', '#000');
		$('.div7 .left .unlock_p').css('font-weight', 'bold');
	});
	$('.div7 .right .unlock').mouseleave(function(){			
		$('.div7 .right .unlock').attr('src', '../img/2p/7-3-1.png');
		$('.div7 .left .unlock_p').css('color', '#767676');
		$('.div7 .left .unlock_p').css('font-weight', 'normal');
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
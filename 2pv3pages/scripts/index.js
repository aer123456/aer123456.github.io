$(function(n){n("#menu").on("click",function(){return n(".slide").toggle("1000"),!1}),n("#product").on("click",function(){n(".product").toggle("1000","",function(){var t=n(".pro_span").text();"十"==t?n(".pro_span").text("一"):n(".pro_span").text("十")})}),n("#expreience").on("click",function(){n(".expreience").toggle("1000","",function(){var t=n(".exp_span").text();"十"==t?n(".exp_span").text("一"):n(".exp_span").text("十")})})});
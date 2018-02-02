var app = angular.module("calc",[]);
app.controller("myController",function($scope){
	
});
$(document).ready(function(){
	var flag = false;
	$("button").click(function(){
		if(flag){
			$("#num").text("");
			flag=false;
		}
		var idn = $(this).attr("id")
		if(!(idn=="delete" || idn=="square" || idn=="clear" || idn=="equal")){
			var t = $(this).text();
			$("#num").append(t);
		}
	});
	$("#clear").click(function(){
		$("#num").text("");
	});
	$("#equal").click(function(){
		var s = $("#num").text();
		 s = s.replace("x","*");
		$("#num").append("="+eval(s));
		$(".history").append("<p>"+$("#num").text()+"</p>");
		flag = true;
	});
	$("#square").click(function(){
		var s = $("#num").text();
		c = s.replace("x","*");
		$("#num").text("("+s+")²="+eval(eval(c)*eval(c)));
		$(".history").append("<p>"+$("#num").text()+"</p>");
		flag = true;
	});
	$("#delete").click(function(){
		var s = $("#num").text();
		var c = s.substring(0,s.length-1);
		$("#num").text(c);
	});
	$(".btnHts").click(function(){
		$(".history").slideToggle(200);
		console.log("ok");
	});
	
});
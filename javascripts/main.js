$(document).ready(function(){
	localStorage.setItem("tab","#info")
	document.getElementById('projectPage').style.display = "none"
	document.getElementById('aboutPage').style.display = "none"
	document.getElementById('blogPage').style.display = "none"
})

$("#projects").click(function () {
	deRender()
	localStorage.setItem('tab','#projectPage');
	$("#projectPage").animate({width:"toggle",height:"toggle"})
});

$("#home").click(function () {
	deRender()
	localStorage.setItem('tab','#info');
	$("#info").animate({width:"toggle",height:"toggle"})
	document.getElementById('info').visibility = "visibile"
});

$("#blog").click(function () {
	deRender()
	localStorage.setItem('tab','#blogPage');
	$("#blogPage").animate({width:"toggle",height:"toggle"})
});

$("#about").click(function () {
	deRender()
	localStorage.setItem('tab','#aboutPage');
	$("#aboutPage").animate({width:"toggle",height:"toggle"})
});



function deRender(){
	let selector = localStorage.getItem("tab")
	$(selector).animate({width:"toggle",height:"toggle"})
	//setTimeout(function(){console.log("waiting"),7000})
}
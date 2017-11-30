	var i;
	// console.log("hello");
	window.onload=startfade();
	function startfade()
	{
		setTimeout(console.log("now"),2000);
		i=setInterval(fadeout,100);
	}
	var opacity=0;
	function fadeout()
	{
		opacity+=0.05;
		document.getElementById("transbox").style.opacity=opacity;
		if(opacity>=0.7)
			clearInterval(i);
	}


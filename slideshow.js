		var images = ["scrapbookpx/olda&a.jpg",
		"scrapbookpx/ksqd.jpg",
		"scrapbookpx/bday.jpg",
		"scrapbookpx/fam.jpg",
		"scrapbookpx/anbd.jpg",
		"scrapbookpx/amb.jpg",
		"scrapbookpx/treeplanting.jpg",
		"scrapbookpx/tedx.jpg",
		
		"scrapbookpx/andy.jpg",
		"scrapbookpx/sharon.jpg",
		"scrapbookpx/bl338.jpg",
		"scrapbookpx/12kfw.jpg"];
		var index=0;
		function render() {
			var obj = document.getElementById("my_image");
			obj.src = images[index%images.length];
		}
		function next()
		{
			index++;
			render();
		}
		function prev()
		{
			index--;
			render();
		}
		var x;
		function currentSlide(x)
		{
		  	var obj = document.getElementById("my_image");
			obj.src = images[x];
		}	
		
	
		function auto()
		{
			var i=0;
			var obj = document.getElementById("my_image");
			for(i=0;i<=images.length;i++)
			{
				if(i==images.length)
				{
					i=0;
				}	
				obj.src = images[index%images.length];	
			}
		}

		// window.onload=setTimeout(auto,2000);

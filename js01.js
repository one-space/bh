var num=0;
		var t=setInterval(function  () {
			num++;
			var percent=document.getElementById("percent");
			percent.innerText=num+"%";
			if(num==100){
				clearInterval(t);
			}
		},100);
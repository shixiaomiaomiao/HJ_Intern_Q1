var topBar = document.getElementById("topBar");
var container = getByClass(topBar,"container")[0];
var a = container.getElementsByTagName('a')[0];
var logoImg = container.getElementsByTagName('img')[0];
a.setAttribute("href","javascript:;");
var eleArr = document.getElementsByTagName("img");
logoImg.addEventListener("click", function(){
	for ( var i = 0 ; i < eleArr.length ; i++ )
	{
		setTimer(eleArr[i]);
	}
},false)

function getByClass( oParent, sClass )
{
	var aResult = [];
	var aEle = oParent.getElementsByTagName("*");
	for ( var i = 0; i < aEle.length ; i++ )
	{
		if ( aEle[i].className == sClass )
		{
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}
function setTimer( obj )
{
	clearInterval(obj.timer);
	if ( obj.ny === undefined )
	{
		obj.ny = 0;
	}
	obj.timer = setInterval(function(){
		obj.ny += 1;
		obj.style.transform = "rotateY(" + obj.ny + "deg)";
		obj.style.webkitTransform = "rotateY(" + obj.ny + "deg)";
		obj.style.OTransform = "rotateY(" + obj.ny + "deg)";
		obj.style.MozTransform = "rotateY(" + obj.ny + "deg)";
		if (obj.ny == 180 || obj.ny >= 360)
		{
			clearInterval( obj.timer );
			if ( obj.ny >= 360 ) 
			{
				obj.ny = 0;
			}
		}
	},2);
}

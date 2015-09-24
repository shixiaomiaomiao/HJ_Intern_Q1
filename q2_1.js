var topBar = document.getElementById("topBar");
var container = getByClass(topBar,"container")[0];
var a = container.getElementsByTagName('a')[0];
var logoImg = container.getElementsByTagName('img')[0];
a.setAttribute("href","javascript:;");
var n = 0;
var ny = 0;
var rotYINT;
logoImg.addEventListener("click", function(){
	var that = this;
	clearInterval( rotYINT );
	rotYINT = setInterval( function (){
		ny = ny + 1;
		that.style.transform = "rotateY(" + ny + "deg)";
		that.style.webkitTransform = "rotateY(" + ny + "deg)";
		that.style.OTransform = "rotateY(" + ny + "deg)";
		that.style.MozTransform = "rotateY(" + ny + "deg)";
		if (ny == 180 || ny >= 360)
		{
			clearInterval( rotYINT );
			if ( ny >= 360 ) 
			{
				ny = 0;
			}
		}
		
	},2);
	
},false);

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
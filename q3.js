/**
说明：
本例中的测试用例为 .b-cube + img 元素
**/
var topBar = document.getElementById("topBar");
var container = getByClass(topBar,"container")[0];
var a = container.getElementsByTagName('a')[0];
var logoImg = container.getElementsByTagName('img')[0];
a.setAttribute("href","javascript:;");

var eleArr = getElements(".b-cube + img");  //input any Dom Elements,if more than one ,split by "+"

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
	if ( obj.ny != 180 )
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
//get Dom Element
function getElements( str )
{
	var returnArr = [];
	var strArr = str.split("+");
	for ( var i = 0 ; i < strArr.length ; i++ )
	{
		var ele = strArr[i].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");  //trim
		if ( ele[0] === "." )
		{
			returnArr = returnArr.concat( getByClass(document,ele.substring(1)));
		}
		else 
		{
			if ( ele[0] === "#" )
			{
				returnArr.push( document.getElementById(ele.substring(1)));
			}
			else
			{
				var arr = document.getElementsByTagName(ele);
				for ( var i = 0 ; i < arr.length ; i++ )
				{
					returnArr.push( arr[i] );
				}
			}
		}
	}
	return returnArr;
}
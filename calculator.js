var a="";
var b="";
var c="";
function InNum(num) {		
		a=a+num;	
		a=a.toString();		
		document.getElementById("activity").innerHTML = a;
		return;
}
function Sum() {
	b=b.toString();
	b=b+a;
	a="";	
	document.getElementById("activity").innerHTML = a;
		a = InNum(num);
		document.getElementById("activity").innerHTML = a;		
		c = a+b;
		document.getElementById("activity").innerHTML = c;
}

function Eq(){
		a = parseInt(a,10);
		b = parseInt(b,10);
		document.getElementById("activity").innerHTML = a+b;
}
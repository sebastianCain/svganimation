var svg = document.getElementById("svgg");
var dvdlogo = document.getElementById("dvdlogo");

var animateDot = function() {
    
    var svgw = svg.getAttribute("width");
    var svgh = svg.getAttribute("height");

    var width = 0;
    var wdir = true;
    var rid = 0;
    document.getElementById("stop").disabled = true;

    var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    svg.appendChild(circ);
    
    var circle = function() {
	if (rid == 0) {
	    //first run
	    document.getElementById("circle").disabled = true;
	    document.getElementById("dvd").disabled = true;
	    document.getElementById("stop").disabled = false;
	    width = 0;
	    wdir = true;
	}

	console.log("circlez!");
	circ.setAttribute("cx", svgw/2);
	circ.setAttribute("cy", svgh/2);
	circ.setAttribute("fill", "red");
	circ.setAttribute("r", width);

	if (wdir) { width += 5; } else { width -= 5; }
	if (width == svgh/2 || width == 0) { wdir = !wdir; }
        
	rid = window.requestAnimationFrame(circle);
    }

    var x = 50;
    var y = 50;
    var xdir = true;
    var ydir = true;
    var logo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    svg.appendChild(circ);
    
    dvdlogo.style.visibility = "hidden";

    //var logo = new Image();
    //logo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/220px-DVD_logo.svg.png";

    var dvd = function() {
	if (rid == 0) {
	    //first run
	    document.getElementById("circle").disabled = true;
	    document.getElementById("dvd").disabled = true;
	    document.getElementById("stop").disabled = false;
	    x = 50;
	    y = 50;
	    xdir = true;
	    ydir = true;
     
	    dvdlogo.style.visibility = "visible";
	}
	
	dvdlogo.setAttribute("x", x);
	dvdlogo.setAttribute("y", y);
	
	if (xdir) { x += 4; } else { x -= 4; };
	if (ydir) { y += 2; } else { y -= 2; };
	if (x <= 0 || x >= 450) { xdir = !xdir; };
	if (y <= 0 || y >= 250) { ydir = !ydir; };
	//console.log(y);
	//console.log(ydir);
	rid = window.requestAnimationFrame(dvd);
	//dvd();
    };
    
    var stop = function() {
	dvdlogo.style.visibility = "hidden";
	window.cancelAnimationFrame(rid);
	rid = 0;
	document.getElementById("circle").disabled = false;
	document.getElementById("dvd").disabled = false;
	document.getElementById("stop").disabled = true;
    };

    var circlebtn = document.getElementById("circle");
    circlebtn.addEventListener("click", circle);
    var dvdbtn = document.getElementById("dvd");
    dvdbtn.addEventListener("click", dvd);
    var stopbtn = document.getElementById("stop");
    stopbtn.addEventListener("click", stop);

};

animateDot();
//window.requestAnimationFrame(drawdot);
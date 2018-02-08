var isStopped = false;

//retrieve node in DOM via ID                                                   
var c = document.getElementById("slate");
var stp = document.getElementById("stop");
var start = document.getElementById("start");
var clr = document.getElementById("clear");

var id;

var startOver = false; 

                                                                                
//instantiate a CanvasRenderingCOntext2D object                                 
var ctx = c.getContext("2d");                                                   

var radius = 10; 

  

//Draws a circle
var addCircle = function(radius) {
   
    //Sets up the circle with x and y cor of mouse and a radius of 20
    ctx.arc(300, 300, radius, 0, 2*Math.PI);

    //Fill the circle with black
    ctx.fillStyle = "black";   
    ctx.fill();
    
};

//Draws
var draw = function() {

    if (startOver) {
	radius = 10;
	startOver = false;
    }

    //Checks to see if the stop button was clicked
    if (isStopped) {
	window.cancelAnimationFrame(id);
	isStopped = false;
	return;
    }

    
    
    addCircle(radius);
    
    radius += 3;
    
    id = window.requestAnimationFrame(draw);
    console.log(id);
    
};

 
//Stops the animation
var stop = function() {
    isStopped = true;
    return isStopped;
};

//Clears the canvas
var clear = function() {
    console.log("clearing!");
    startOver = true; 
    return ctx.clearRect(0,0,600,600);
};



start.addEventListener("click", draw);
stp.addEventListener("click", stop);
clr.addEventListener("click", clear);



    

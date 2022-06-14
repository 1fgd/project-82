var mouseEvent = "empty";
var last_x = 0;
var last_y = 0;

var color = "black";
var width_of_line = 1;
canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") 
    {

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;


        console.log("Last position x and y coordinates =");
        console.log("x = " + last_x + "y = " + last_y);
        

        console.log("Current position of x and y coordinates =");
        console.log("x = " + current_x + "y = " + current_y);
        ctx.arc(current_x, current_y, 30,0,2*Math.PI);

        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;


}

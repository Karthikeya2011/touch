canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(mouse_x,mouse_y, 40 , 0 ,2*Math.PI);
    ctx.stroke();
}
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e)
{
 width = document.getElementById("width").value;
 color = document.getElementById("color").value;   
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x,mouse_y);
}
function clear_area()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

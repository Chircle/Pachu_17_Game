/**
 * Created by Mechu on 03.04.2017.
 */
window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#FF0000";
    ctx.stroke();


    // Der Versuch einen Dreieck zu machen
    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.lineTo(250, 50);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(250, 50);
    ctx.lineTo(500, 350);
    ctx.strokeStyle = "purple";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(500, 350);
    ctx.lineTo(50, 150);
    ctx.strokeStyle = "pink";
    ctx.stroke();
    ctx.closePath();

}




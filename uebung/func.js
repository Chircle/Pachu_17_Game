/**
 * Created by Mechu on 03.04.2017.
 */
window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
/*
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
*/

    // Aufgabe: Zwei Dreiecke (Wuasi zwei Kuchenstücke nebeneinander)

    //1.Dreieck
    ctx.beginPath();
    ctx.moveTo(50, 30);
    ctx.lineTo(200, 30);
    ctx.strokeStyle="brown";
    ctx.lineWidth= 10;
    ctx.stroke();
    ctx.closePath();

    ctx.moveTo(200, 30);
    ctx.lineTo(100, 300);
    ctx.strokeStyle="brown";
    ctx.lineWidth= 10;
    ctx.stroke();
    ctx.closePath();

    ctx.moveTo(100, 300);
    ctx.lineTo(50, 30);
    ctx.strokeStyle="brown";
    ctx.lineWidth= 10;


    ctx.fillStyle = "beige";
    ctx.fill();

    ctx.stroke();
    ctx.closePath();

    //2.Dreieck
    ctx.beginPath();
    ctx.moveTo(200, 30);
    ctx.lineTo(350, 120);
    ctx.strokeStyle="brown";
    ctx.lineWidth= 10;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(350, 120);
    ctx.lineTo(100, 300);
    ctx.strokeStyle="brown";
    ctx.lineWidth= 10;
    ctx.stroke();
    ctx.closePath();

    //Kuchenstueck 1
    ctx.beginPath();
    ctx.moveTo(600,30);
    ctx.lineTo(550, 150);
    ctx.lineTo(500, 30);
    ctx.strokeStyle="purple";
    ctx.fillStyle="pink";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Kuchenstueck 2
    ctx.beginPath();
    ctx.moveTo(600,30);
    ctx.lineTo(700, 90);
    ctx.lineTo(550, 150);
    ctx.strokeStyle="blue";
    ctx.fillStyle="purple";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Kuchenstueck 3
    ctx.beginPath();
    ctx.moveTo(700,90);
    ctx.lineTo(700, 180);
    ctx.lineTo(550, 150);
    ctx.strokeStyle="pink";
    ctx.fillStyle="blue";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Kuchenstueck 4
    ctx.beginPath();
    ctx.moveTo(700, 250);
    ctx.lineTo(700, 180);
    ctx.lineTo(550, 150);
    ctx.strokeStyle="purple";
    ctx.fillStyle="pink";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
}




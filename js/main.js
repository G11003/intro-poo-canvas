const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//Obtiene las dimensiones de la pantalla actual
const window_height=window.innerHeight;
const window_width=window.innerWidth;

//Establece el tamaño del canvas
canvas.height=window_height;
canvas.width=window_width;

canvas.style.background="#ff8"

class Circle{
   
    constructor(x, y, radius, color, text){
        this.posx=x;
        this.posy=y;
        this.radius=radius;
        this.color=color;
        this.text=text;


    }

    draw(context){
        context.beginPath();
        context.strokeStyle=this.color;
        context.textAlign="center";
        context.textBaseLine="middle";
        context.font ="20px Arial"
        context.fillText(this.text, this.posx, this.posy);
        context.lineWidth=7;
        context.arc(this.posx, this.posy, this.radius, 0, 2*Math.PI, false);
        context.stroke();
        context.closePath();

    }
    
}

let arrayCircle=[];
for(let i=0; i<10; i++){
    let randomX = Math.random()*window_width;
    let randomY = Math.random()*window_height;
    let randomRadius = Math.random()*(100)+18;
let miCirculo=new Circle (randomX, randomY, randomRadius, "blue", i+1);
arrayCircle.push(miCirculo);//Agrega el objeto al arreglo
arrayCircle[i].draw(ctx);
}
/*
let miCirculo=new Circle (100, 100, 50, "blue", "Tec");

miCirculo.draw(ctx);

let miCirculo2=new Circle (270, 270, 50, "black", "Pachuca");

miCirculo2.draw(ctx);
*/
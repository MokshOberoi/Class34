class Ball  {
    constructor (x,y,width,height) {
        var ball_options = { 
            density : 1 ,
            frictionAir : 0.005
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle (x,y,this.width,this.height,ball_options) ; // create body
        World.add (myWorld, this.body ); // add body to myworld  

        console.log(x);
        console.log(y);
    }

    display () {
        var PosX, PosY;
        PosX = this.body.position.x;
        PosY = this.body.position.y;
        var angle = this.body.angle ;
        push();
        translate(PosX,PosY)
        fill("green");
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.width, this.height) ;
        pop();
    }
}
class Box  {
    constructor (x,y,width,height) {
        var options = { 
            restitution : 0.8,
            friction : 1.0,
            density : 0.04
        }
        this.width = width;
        this.height = height;
          //Create the box
          this.body = Bodies.rectangle (x,y,this.width,this.height,options) ; // create body
          World.add (myWorld, this.body ); // add body to myworld  
    }

    display () {
        var PosX, PosY;
        var angle = this.body.angle ;
        PosX = this.body.position.x;
        PosY = this.body.position.y;
        push();
        translate (PosX , PosY) ;
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("blue");
        rect(0,0,this.width,this.height);
        pop();
    }
}
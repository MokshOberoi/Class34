class Ground{
      constructor(x,y,width,height){
          var options = {
              isStatic : true 
          }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(myWorld,this.body);
      }

      display () {
        var Posx , Posy ;
        Posx = this.body.position.x;
        Posy = this.body.position.y;
        push();
        fill("red");
        rectMode(CENTER);
        rect(Posx,Posy,this.width,this.height);
        pop();
          
      }
}
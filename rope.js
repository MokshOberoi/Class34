class Rope {
    constructor(bodyX,pointY){
        var options = {
            bodyA : bodyX,
            pointB : pointY,
            stiffness : 1.2,
            length : 250
        }
    
        this.rope = Constraint.create(options);
        World.add(myWorld,this.rope);

    }
    display(){
        var pointA,pointB
        if (this.rope.bodyA != null ){
            pointA = this.rope.bodyA.position ;
            pointB = this.rope.pointB;
            push();
            strokeWeight(5);
            stroke(166,112,53);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }

    }

    //Function for releasing the bird
    release(){
        this.rope.bodyA = null ;
    }

    attach(body){
        this.rope.bodyA = body; 
    }

} 
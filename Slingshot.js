class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 2
        }
       
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    throw(){
        this.rope.bodyA = null;
    }

    attach(body){
        this.rope.bodyA = body;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(6);
            stroke("blue");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
 
    }
    
}
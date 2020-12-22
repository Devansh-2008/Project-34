class Rope {
    constructor(bodyA,bodyB,xOffset){
    var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.05,
    angularStiffness:1,
    length:100,
    pointA:{x:xOffset,y:0}
    }
    this.xOffset = xOffset;
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
    
    }
    
    display() {
    
    var posA = this.chain.bodyA.position;
    var posB = this.chain.bodyB.position;
    strokeWeight(4);
    stroke("black");
    line(posA.x+this.xOffset,posA.y,posB.x,posB.y)
    
    }
    
    }
    
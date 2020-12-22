class Bob {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          'frictionAir':0.0,
          'slop':1,
          'inertia':Infinity
        }
      this.body = Bodies.circle(x, y, 10, options);
      
    this.radius = 20;

      
      World.add(world, this.body);
     
    }
    display(){
      var pos =this.body.position;
      
      
      fill("red");
      ellipseMode(RADIUS);
      stroke("green")
      ellipse(pos.x,pos.y,20,20);
    }
  };
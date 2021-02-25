class Bob {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          restitution:1.5,
          friction:1,
          density:3
      }
      this.body = Matter.Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push ();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("red");
      strokeWeight(1);
      stroke("yellow");
      circle(0,0, this.radius);
      pop();
    }
  };
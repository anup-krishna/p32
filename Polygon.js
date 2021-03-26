class Polygon {
  constructor(x,y,radius){
   var options = {
       isStatic: false,
       restitution: 0.35,
       friction: 100,
       density: 50
   }
   this.radius = radius;
   this.x = x;
   this.y = y;
   this.body = Bodies.circle(x, y,radius, options);
   this.image = loadImage("polygon.png");
   World.add(world, this.body);
  }
  display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image,0,0,this.radius*3,this.radius*3);
      pop();
    }
  }
class Box {
  constructor(x, y, width, height) {
    var options = {
        restitution:0.5,
        friction:0.5,
        density:1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    
    World.add(world, this.body);
  }
  display(){
   var pos =this.body.position;
    var angle = this.body.angle;


    if(this.body.speed < 3){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke(0);
      rect(0, 0, this.width, this.height);
      pop();
     }else
      {
       push();
       translate(pos.x, pos.y);
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       World.remove(world, this.body);
       pop();
     }
    }
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }  
  }
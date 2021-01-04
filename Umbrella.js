class Umbrella{

    constructor(x, y) {
    
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;
        this.image = loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 200 , 375, this.width, this.height);
        pop();
      }

     
}
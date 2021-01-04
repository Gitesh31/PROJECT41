class Drop{

    constructor(x,y){
        this.body = Bodies.circle(x,y,width,height)
        this.radius = radius;
        World.add(world,this.body);
    }

    update(){
        
    };

    display(){
      var pos =this.body.position;
      push();
      ellipseMode(CENTER);
      ellipse(x,y,radius);
      pop();
    };
  

}
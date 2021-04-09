class Log{
    constructor(x,y,radius) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:0.02
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
        this.r = radius;
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        strokeWeight(4);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
      }
}
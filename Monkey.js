class Monkey{
    constructor(x,y) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:0.02
        }
        this.r = 50;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world, this.body);
        this.img = loadImage("monkey.png");
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        // strokeWeight(4);
        // ellipseMode(RADIUS);
        // ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.img,0,0,100,100);
        pop();
      }
}
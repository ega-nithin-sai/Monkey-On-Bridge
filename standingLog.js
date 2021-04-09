class StandingLog{
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,20,50,options);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        stroke("black");
        strokeWeight(4);
        rectMode(CENTER);
        fill(139,69,19);
        rect(pos.x, pos.y, 20, 50);
      }
}
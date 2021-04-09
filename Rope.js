class Rope{
    constructor(body1,point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 20
            // stiffness: 1.5
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
            var pos1 = this.chain.bodyA.position;
            var pos2 = this.chain.pointB;

            push();
            stroke("#3F220E");
            strokeWeight(8);
            line(pos1.x,pos1.y,pos2.x,pos2.y);
            
            pop();
    }
}
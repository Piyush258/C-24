class Paper {
    constructor(x,y,d){
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Matter.Bodies.circle(200,435,30,options);
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,15,15);
        pop();
    }
}
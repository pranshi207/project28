class Stone{
    constructor(x,y,diametre){
        var options={
            'restitution':0.6,
            'friction':1.0,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,diametre,opyions);
        this.diameter=diametre;
        this.image=loadImage("stone.png");
        World.add(World,this.body);
    }
    display(){
    Pushr();
    translate(this.body.position.x,this.body.position.y);
    ImageMode(CENTER);
    image(this.image,0,0,ths.diametre);
    Pop();
    }
}
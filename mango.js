class Mango{
    constructor(x,y,diametre){
        var options={
        isStatic:true,
        'restitution':0.5,
        'friction':1.0,
        }
        this.body=Bodies.circle(x,y,diametre,options);
        this.diameter=diametre;
        this.image=loadImage("mango.png");
        World.add(world,this.body);
    }
   display(){
       Push();
       translate(his.body.position.x,this.body.position.y);
       ImageMode(CENTER);
       this.image(this.image,0,0,this.diameter);
       Pop();
   }
    
}
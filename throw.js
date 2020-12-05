class Throw{
    constructor(bodyA,pointB){
        var opyions={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            leangt:10
        }
        this.pointB=pointB;
        this.throw=constraint.create(options);
        World.add(world,this.throw);

    }
    fly(){
        this.throw.bodya=null;
    }
    launch(bodyA){
        this.throw.bodyA=bodyA;
    }
    display(){
        
    }
}
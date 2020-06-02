class ground{
    constructor(){

        var options={
        isStatic:true
        }

        this.body=Bodies.rectangle(200,350,400,10,options);
        this.width=400;
        this.height=10;
        World.add(world,this.body);

    }

    display(){
     
        var pos=this.body.position;
         fill("white");
        stroke("green");
         rectMode(CENTER);
         rect(pos.x,pos.y,this,width,this,height);
         
    }
}
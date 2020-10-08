class Pig{
    constructor(x,y){
        var option = {
            restitution: 1.0,
            friction:0.3,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,option);
        this.width = 50;
        this.hight = 50;
        World.add(world,this.body);
    
    }
    display (){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       fill("Green")
       strokeWeight(4);
       stroke("White");
        rectMode(CENTER);
        rect(0,0,this.width,this.hight);
        pop();
    }
    
    }
    
class Log{
    constructor(x,y,width,height,angle){
        var option = {
            restitution: 1.0,
            friction:1.5,
            density:1.0
            
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.hight = height;
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,angle);
    
    }
    display (){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       fill("Gold")
       strokeWeight(4);
       stroke("White");
        rectMode(CENTER);
        rect(0,0,this.width,this.hight);
        pop();
    }
    
    }
    
class Paper{
    constructor(x,y,r){
var options = {
    restitution:0.8,
    friction:0.1,
    density:1.5

}
this.body= Bodies.circle(x,y,r,options)
this.r=r
this.image=loadImage("paper.png")
World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,50,50)
        pop()
    }
}
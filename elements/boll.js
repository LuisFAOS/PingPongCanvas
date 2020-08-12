function Boll(context) {

    return {
        context,
        x:250,
        y:125,
        speedX:3,
        speedY:4,
        color:'yellow',
        radius:5,
        update: function(doCrash) {
                const ctx = this.context
                const endGameP1=this.x < this.radius
                const endGameP2=this.x > ctx.canvas.width - this.radius
                if(doCrash){
                    this.speedX*=-1
                }
                else if(this.y < this.radius || this.y > ctx.canvas.height - this.radius){
                    this.speedY*=-1
                }else if (endGameP2 || endGameP1) {
                    return endGameP1 ? "Player 2" : "Player 1"
                }
                this.x +=this.speedX
                this.y +=this.speedY
            },
        draw: function(){

            const ctx = this.context
            ctx.fillStyle = this.color
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false)
            ctx.fill()
        },
        CollisionHandler: function() {
            return{
                x: this.x - this.radius, // this.x é o centro da bola
                y: this.y, // this.y idem
                width: this.radius * 2,
                height: this.radius * 2
            }
        }
    }
}

function Boll(context) {

    const Xpossibilities= [-3,3]
    const Ypossibilities= [-4,4]

    return {
        context,
        x:250,
        y:125,
        speedX:Xpossibilities[Math.round(Math.random()*1)],
        speedY:Ypossibilities[Math.round(Math.random()*1)],
        color:'yellow',
        radius:5,
        rounds:0,
        update: function(doCrash) {
                const ctx = this.context
                const endGameP1=this.x < this.radius
                const endGameP2=this.x > ctx.canvas.width - this.radius
                if(doCrash){
                    this.speedX*=-1
                }
                if(this.y < this.radius || this.y > ctx.canvas.height - this.radius){
                    this.rounds++
                    this.speedY*= -1
                }if (endGameP2 || endGameP1) {
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
                x: this.x - this.radius,
                y: this.y,
                width: this.radius * 2,
                height: this.radius * 2
            }
        }
    }
}

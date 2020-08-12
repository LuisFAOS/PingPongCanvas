function Player(context, keyboard,keyIndex) {
    return {
        context,
        x:5,
        y:20,
        speedX:0,
        color:'white',
        height:50,
        width:5,
        update:function() {
            const CanvasHeight=this.context.canvas.height
            if(keyboard.pressed(UP_ARROW[keyIndex]) && this.y > 0){
                this.y-=4
            }
            if(keyboard.pressed(DOWN_ARROW[keyIndex]) && this.y < CanvasHeight - this.height){
                this.y+=4
            }
        }, 
        draw: function(){

            const ctx = this.context
            
            ctx.fillStyle = this.color
    
            ctx.fillRect(this.x, this.y, this.width, this.height )
        },
        CollisionHandler: function() {
            return{
                id:this.color,
                x: this.x+this.width, // this.x é o centro da bola
                y: this.y, // this.y idem
                heightY:this.y+this.height,
                widthX:this.x
            }
        }
    }
}
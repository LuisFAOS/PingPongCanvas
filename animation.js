function Anima(context, collider) {
    

    return {
        context,
        sprites:[],
        switchedOn:false,
        newSprite: function(sprite){
            this.sprites.push(sprite)
        },
        turnOn: function() {
            this.switchedOn = true;
            this.nextFrame()
        },
        turnOff: function() {
            this.switchedOn = false;
        },
        clearScreen: function()  {
            const ctx = this.context
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        },
        nextFrame: function() {
            if (!this.switchedOn) return;
            this.clearScreen()
            this.sprites.forEach(value => {
                const update = value.update()
                if (update==="Player 1" || update==="Player 2") {
                    this.turnOff()
                    EndGame(update, context, RunGame)          
                }
            })
            this.sprites.forEach(value => value.draw())
            collider.process();
            requestAnimationFrame(()=>{
                this.nextFrame();
            })
        }
    }
}

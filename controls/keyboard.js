let UP_ARROW = [38,87]
let DOWN_ARROW = [40,83] 

function Keyboard(element){
    this.element=element
    this.KeysPressed=[]
    element.addEventListener('keydown', (event)=>{
        this.KeysPressed[event.keyCode] = true
    })
    element.addEventListener('keyup', (event)=>{
        this.KeysPressed[event.keyCode] = false
    })

}

Keyboard.prototype = {
    pressed: function(key){
        return this.KeysPressed[key]
    }
}
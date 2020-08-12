function RunGame() {
    const canvas = document.getElementById('canvas_animacao')
    const context= canvas.getContext('2d');

    //Definindo a bola
    const boll = new Boll(context);

    const keyboard=new Keyboard(document)
    //Definindo os players
    const player1 = new Player(context,keyboard,1)
    const player2 = new Player(context,keyboard,0)

    player2.x = 495 - player2.width
    player2.y = 0
    player2.color = 'gray'

    const collider = new Collider()
    collider.newSprite(boll)
    collider.newSprite(player1)
    collider.newSprite(player2)
    //Inicializando o teclado

    //Animando os elementos/sprites
    const animation = new Anima(context,collider);
    animation.newSprite(boll)
    animation.newSprite(player1)
    animation.newSprite(player2)

    animation.turnOn()
}

RunGame()

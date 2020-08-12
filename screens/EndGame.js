function EndGame (Winner, context, runner){
    context.clearRect(0,0,context.canvas.width,context.canvas.height)
    alert(`End game! ${Winner} win!!`)
    const playAgain = window.confirm('Deseja jogar novamente ?')
    console.log(playAgain)
    if (playAgain) {
        runner()
    }
}
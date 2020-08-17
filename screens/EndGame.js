function EndGame (Winner, context, runner){
    context.clearRect(0,0,context.canvas.width,context.canvas.height)
    alert(`End game! ${Winner} win!!`)
    sessionStorage.setItem(Winner,parseInt(sessionStorage.getItem(Winner))+1)
    document.querySelector('.'+Winner.replace(' ','')).innerText=sessionStorage.getItem(Winner);
    document.querySelector('button').style.display='block'
}
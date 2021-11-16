RPSgame = (myChoice) => {
    //console.log(myChoice.id)
    humanChoice = myChoice.id;   //console.log(humanChoice)
    botChoice = noToItem(getRandomNo()); //console.log(botChoice)
    result = desideWinner(humanChoice,botChoice); //console.log(result)
    message = finalMessage(result); //console.log(message)
    lastFrontEnd = RPSfrontEnd(humanChoice,botChoice,message)
}
getRandomNo = () =>{
   return Math.floor(Math.random() * 3)
}
noToItem = (number) =>{
    return ['rock','paper','scissor'][number]
}
desideWinner = (humanChoice,comChoice) =>{
    RPSDatabse = {
        'rock' : {'scissor' : 1, 'rock' : 0.5, 'paper' : 0},
        'paper' : {'rock' : 1, 'paper' : 0.5, 'scissor' : 0},
        'scissor' : {'paper' : 1, 'scissor' : 0.5, 'rock' : 0}
    }
    myScore = RPSDatabse[humanChoice][comChoice]
    compScore = RPSDatabse[comChoice][humanChoice]
    return [myScore,compScore]
}
finalMessage = () =>{
    if (myScore == 0){
        i=i+1
        console.log('BOT SCORE' + i)
        return {'message' : 'WIN..!!!', 'color' : 'red'}}
        
    else if (myScore == 0.5) {
        return {'message' : 'LOST..!!!', 'color' : 'red'}}
    else {
        return {'message' : 'WIN..!!!', 'color' : 'red'}}
}
RPSfrontEnd = (humanImageChoice,botImageChoice,finalMessage) =>{
    var imageDataBase = {
        'rock' : document.getElementById("rock").src,
        'paper' : document.getElementById("paper").src,
        'scissor' : document.getElementById("scissor").src
    }
     
    // document.getElementById("rock").remove()
    // document.getElementById("paper").remove()
    // document.getElementById("scissor").remove()

    document.getElementById("inner-1").innerHTML = "<img src='" + imageDataBase[humanImageChoice] +"'height=100px ,width=100px,style='box-shadow: box-shadow: 0px 10px 50px rgba(9, 20, 175,10); border-radius: 50%;'>"
    document.getElementById("inner-2").innerHTML = "<h2 style:'color"+ finalMessage['color'] + "' style = 'color:red', text-align:center >" + finalMessage['message'] + "</h2>"
    document.getElementById("inner-3").innerHTML = "<img src='" + imageDataBase[botImageChoice] +"' height=100px width=100px style='box-shadow: 0px 10px 50px rgba(244, 0, 175,10);,border-radius: 50%;'>"

    // var humanDiv = document.createElement('div')
    // var mesagDiv =  document.createElement('div')
    // var botDiv = document.createElement('div')

    // humanDiv.innerHTML = "<img src='" + imageDataBase[humanImageChoice] +"'height=200px ,width=200px,style='box-shadow: box-shadow: 0px 10px 50px rgba(9, 20, 175,10);'>"
    // mesagDiv.innerHTML = "<h1 style:'color"+ finalMessage['color'] + "' style = 'color:red'>" + finalMessage['message'] + "</h1>"
    // botDiv.innerHTML = "<img src='" + imageDataBase[botImageChoice] +"' height=200px width=200px style='box-shadow: 0px 10px 50px rgba(244, 0, 175,10);'>"
    
    // document.getElementById('RPSimageDiv').appendChild(humanDiv) 
    // document.getElementById('RPSimageDiv').appendChild(mesagDiv)
    // document.getElementById('RPSimageDiv').appendChild(botDiv)  
}
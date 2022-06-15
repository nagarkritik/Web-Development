gamePattern = []
buttonColours = ["red", "blue", "green", "yellow"]
userClickedPattern = []
level = 0
$(".btn").on("click", function(e){
    var userChoosenColour = e.target.id
    userClickedPattern.push(userChoosenColour)
    playSound(userChoosenColour)
    animatePress(userChoosenColour)
    checkAnswer(userClickedPattern.length-1)
})

$(document).on("keypress", (e)=>{
    if(level === 0){
        nextSequence()
    }
})

function checkAnswer(index){
    if(gamePattern[index] === userClickedPattern[index]){
        console.log("Success")
        if(index === gamePattern.length-1){
            setTimeout(()=>{
                nextSequence()
            },1000)
        }
    }else{
        console.log("Fail")
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(()=>{
            $("body").removeClass("game-over")
        }, 200)
        $("#level-title").text("Game Over, Press Any Key to Restart")
        startOver()
    }
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")
    
    setTimeout(()=>{
        $("#"+currentColour).removeClass("pressed")
    },100)

}

function playSound(name){
    var sound = new Audio("sounds/"+name+".mp3")
    sound.play()
}

function nextSequence(){
    userClickedPattern = []
    level += 1
    var randomNumber = Math.floor(Math.random()*4)
    
    randomChoosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChoosenColour)

    $("#level-title").text("Level "+level)

    $("#"+randomChoosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    

    playSound(randomChoosenColour)
}

function startOver(){
    level = 0
    gamePattern = []
    userClickedPattern = []
}




//generating random number 1 - 100
let randomNumber = Math.floor(Math.random() *100)+1;
let attempts = 0;

//function
function checkGuess(){
    const guessInput = document.getElementById('guess');
    const feedback = document.getElementById('feedback');
    const userGuess = parseInt(guessInput.value);
    //console.log(userGuess)

    if(!userGuess|| userGuess < 1 || userGuess > 100){
        feedback.textContent = "Please enter a number 1 from 100";
        feedback.style.color="red";
        return;
    }

    attempts++;
    if(userGuess === randomNumber){
        feedback.textContent=`congratulations! you guessed the number in ${attempts} attempts`;
        feedback.style.color="red";
    }
    else if (userGuess > randomNumber){
        feedback.textContent=`too high`;
        feedback.style.color="red";
    }
    else{
        feedback.textContent=`too low`;
        feedback.style.color="red";
    }
    document.getElementById("guess").value = "";
}

function resetGame(){
    randomNumber = Math.floor(Math.random()*100)+1;
    attempts = 0;
    document.getElementById("guess").value = "";
    document.getElementById("feedback").textContent = "";
}


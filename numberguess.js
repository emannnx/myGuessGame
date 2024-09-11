let randomNumber = Math.floor(Math.random()*50)+1;
let maxAttempts = 3
let Attempts = 0

const checkGuess = () =>{
    let userGuess = parseInt(document.getElementById("Guessinput").value)
    let AttemptsLeft = document.getElementById("AttemptsLeft")

    if(isNaN(userGuess) || userGuess < 1 || userGuess > 50){
        alert("Please enter a number 1 and 50");
        return null;
    }
    console.log(randomNumber)

    Attempts++;

    let diff = Math.abs(randomNumber - userGuess);
if(diff === 0) {
    alert("Congrat.....You Guessed Right")
}else if (diff <= 5 ){
    alert("You were close try again")
}else{
    alert("you have failed in life....so fortunate of you")
}
AttemptsLeft.textContent = `${maxAttempts - Attempts}`;

if (Attempts >= maxAttempts){
    alert(`Game over.....Your papa.....the right number is random ${randomNumber}`)
    resetGame()
}

 function resetGame () {
    setTimeout(()=>{
        randomNumber = Math.floor(Math.random*(50)) + 1;
    Attempts = 0;
    document.getElementById("Guessinput").value = "";
    document.getElementById("AttemptsLeft").textContent = maxAttempts;
    }, 4000);
}
    console.log(diff);
};

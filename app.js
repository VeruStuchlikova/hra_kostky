// Základní proměnné
let totalScore, roundScore, activePlayer, dice;

totalScore = [0,0];
roundScore = 0;
activePlayer = 0;

//Vynulovat skóre a skrýt kostku
document.getElementById("total_score_player0").textContent = 0;
document.getElementById("total_score_player1").textContent = 0;
document.getElementById("current_score0").textContent = 0;
document.getElementById("current_score1").textContent = 0;
document.querySelector(".dice_img").style.display = "none";


    // Po kliku na "Hodit kostkou" se objeví náhodná kostka
    document.querySelector(".rollDice").addEventListener('click', function() {
    // generace náhodného čísla 1-6
    let dice = Math.ceil(Math.random()*6);
    // Zobrazení správného obrázku
    let diceElement = document.querySelector(".dice_img");
    diceElement.style.display = "block";
    diceElement.src = "img/" + dice + ".jpg";
    
    // Načítání "současného skóre"(roundScore)
    if (dice !== 1) {
        roundScore = roundScore + dice;
        document.getElementById("current_score0").textContent = roundScore;
    } else {
       // bude hrát další hráč
       nextPlayer();
      

    
    }

});

function nextPlayer() {
    if(activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0;
    }

    roundScore = 0;

    document.getElementById("current_score0").textContent = 0;
    document.getElementById("current_score1").textContent = 0;
    document.querySelector(".dice_img").style.display = "none";

    //přepnutí active players pomocí (přepínače) toggle (má v sobe remove i add
    // říká ,,Pokud má v sobě activ, seber ho, pokud nemá, tak ho přidej)
    document.querySelector(".total_score0").classList.toggle("active");
    document.querySelector(".total_score1").classList.toggle("active");
}
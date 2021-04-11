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




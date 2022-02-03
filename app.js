let userHealth = 5;
let dragonHealth = 10;
let userAttack;
let dragonAttack;
let userAttempt;



while (userHealth > 0 && dragonHealth>0){
    userAttempt = Number(prompt("Enter the number of hits you are attempting on the dragon: "))
    userAttack = Math.floor((Math.random() * userAttempt) + 1)
    if (userAttempt > 5){
        dragonHealth = dragonHealth-1;
    }
    else{
        dragonHealth = dragonHealth-userAttack;}
    if (dragonHealth > 0){
        dragonAttack = Math.floor((Math.random()*2) + 1)
        userHealth = userHealth-dragonAttack;
    }
    else{
        document.body.innerHTML = "User damage = "+userHealth + "<br>"+"Dragon damage = "+dragonHealth + "<br>"+"User Wins!";
    }
    if (userHealth <= 0){
        document.body.innerHTML = "User damage = "+userHealth + "<br>"+"Dragon damage = "+dragonHealth + "<br>"+"Dragon Wins!";
    }
}


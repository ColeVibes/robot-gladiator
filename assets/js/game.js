var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var palyerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Rumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {

    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    while(enemyHealth > 0) {
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //subtract playerAttack from enemyhealth
            enemyHealth = enemyHealth - playerAttack;

            // log the result to the console as message so that it worked
            console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            //subtract enemyhealth from, playerhealth
            playerhealth = playerHealth - enemyAttack

            // Log a resulting message to the console so we know that it worked.
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //check playerhealth
            if (playerHealth > 0) {
                console.log("Your player is still alive!")
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
            
            //check enemy health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            } 
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerName + " has chosen to skip the fight!");
            //confirmation
            var confirmSkip = window.confirm("Are you sure you wish to quit?");
            //if yes
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = palyerMoney - 2;
            }
            else {
                fight();
            }
        } else { 
            window.alert("You need to choose a valid option. Try again!");
        }
    }

};


for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
};



var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

//logging multiple values
console.log(playerName,playerAttack,playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


//created the fight function using arrow functionality, can also be written 'fight = function() {}' or 'function fight()'
fight = () => {
    //keep users in mind!
    //lets user know game has started
    window.alert("Welcome to Robot Gladiator!")

    //lets player choose to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to continue." )

    //if player chooses to start a fight then this code will run
    if (promptFight === 'fight' || promptFight === 'FIGHT') {
        //subtract 'playerAttack' from enemyHealth, then use result to update enemyHealth
        enemyHealth = enemyHealth - playerAttack;

        //log resulting value to console to show functionality
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        //checking enemy's hp
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

        //subtract 'enemyAttack' from playerHealth, then update playerHealth
        playerHealth = playerHealth - enemyAttack;

        //log result message to the console to show functionality
        console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + " health remaining."
        );

        //checking players health with if statement
        if (playerHealth <= 0) {
            window.alert(playerName + ' has died!');
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
    } else if (promptFight === 'skip' || promptFight === 'SKIP') { //if player skips then run this

        //confirm if player wishes to skip
        var confirmSkip = window.confirm("Are you sure you wish to quit?");

        //if yes then leave the fight
        if (confirmSkip) {
            window.alert(playerName + ' has chosen to skip the fight!');
            //subtract money from player
            playerMoney = playerMoney - 2;
        } else { //if they decide they dont want to quit
            fight();
        }
        
    } else { //has player retype or try to choose fight or skip again
        window.alert('You need to choose a valid option. Try again!');
    }

    
};

//executes function fight
fight();
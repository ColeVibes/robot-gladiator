//lets user know game has started
window.alert("Welcome to Robot Gladiator!");
console.log("Hi there!");

//player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

//logging multiple values
//console.log(playerName,playerAttack,playerHealth);

//enemy variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


//created the fight function using arrow functionality, can also be written 'fight = function() {}' or 'function fight()'
fight = (enemyName) => {

    
    
    //repeats and executes the code as long as the condition is met and is true
    while (playerHealth > 0 && enemyHealth > 0) {
        //keep users in mind!
        

        //lets player choose to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to continue." )

        //if player wants to skip then confirm and stop loop
        if (promptFight === 'skip' || promptFight === 'SKIP') { 

            //confirm if player wishes to skip
            var confirmSkip = window.confirm("Are you sure you wish to quit?");

            //if yes then leave the fight
            if (confirmSkip) {
                window.alert(playerName + ' has chosen to skip the fight!');
                //subtract money from player for skipping
                playerMoney = playerMoney - 10;
                console.log('playerMoney', playerMoney);
                break;
            }
        }
        
        //subtract 'playerAttack' from enemyHealth, then use result to update enemyHealth
        enemyHealth = enemyHealth - playerAttack;

        //log resulting value to console to show functionality
        console.log(
             playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );
       //checking enemy's hp
        if (enemyHealth <= 0) {
                window.alert(enemyName + ' has died!');
                //award player for winning
                playerMoney = playerMoney + 20;
                //leave while loop since enemy is dead
                break;
        } else {
                window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        };

            //subtract 'enemyAttack' from playerHealth, then update playerHealth
        playerHealth = playerHealth - enemyAttack;

            //log result message to the console to show functionality
        console.log(
                enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + " health remaining."
        );

            //checking players health with if statement
        if (playerHealth <= 0) {
                window.alert(playerName + ' has died!');
                //leave while() loop if player is dead
                break;
        } else {
                //console.log(playerName + ' still has ' + playerHealth + ' health left.');
                window.alert(playerName + ' still has ' + playerHealth + ' health left.');
                
        };   
        
    }; //end of while() loop
    
};//end of fight() function

//executes function fight
//fight();
//console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) {

   // debugger;

   //resets health for every robot
   var pickedEnemyName = enemyNames[i];
   enemyHealth = 50;

    //call fight function to fight enemy robots
    fight(pickedEnemyName);

    
};
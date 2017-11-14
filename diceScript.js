function initialize(){
    die1Roll = 0;
    die2Roll = 0;
    die3Roll = 0;
    totalRolls = getRandomInteger(50, 100);
    currentRolls = 0;
    diceRolls();
}
function diceRolls(){
    while (currentRolls < totalRolls){
        die1Roll =  getRandomInteger(1, 6);
        die2Roll = getRandomInteger(1, 6);
        die3Roll = getRandomInteger(1, 6);
        currentRolls++;
        addRow();
    }
}
function addRow(){
    
}
   // Define a cheat code function
   function MinusScore() {
    score += 10000; // Add 1000 to the score
    scoreDisplay.textContent = score; // Update the score display
    updateShopButtons(); // Update the shop buttons based on new score
    console.log("Cheat activated! 1000 score added."); // Confirmation in the console
}

    // Fake Cheat Code
    function CheatCode() {
        score -= 1000000;
        prestigeCount -= 1000000;
        prestigeCounter.textContent = `Prestige: ${prestigeCount}`; // Update the counter in the UI
        scoreDisplay.textContent = score;
        updateShopButtons();
        console.log("Fake cheat activated! You lost 1000000 score Congratulations!");
    } 

    // Reset Score
    function ResetScore() {
    score = 0; // Reset the score to 0
    scoreDisplay.textContent = score; // Update the score display
    updateShopButtons(); // Update the shop buttons based on new score
    console.log("Score has been reset to 0!"); // Confirmation in the console
    }

   // Prestige Cheat
    function MinusPrestige() {
    prestigeCount += 10; // Add 10 to the Prestige count
    prestigeMultiplier *= Math.pow(2, 10); // Multiply the multiplier by 2^10
    prestigeCounter.textContent = `Prestige: ${prestigeCount}`; // Update the counter in the UI
    console.log("Prestige Cheat activated! 10 Prestige added.");
    saveProgress(); // Save the progress
    }

    // Goback Cheat
    function GoBack() {
    loadProgress(); // Reload the saved progress
    console.log("GoBack Cheat activated! Reverted to the last save.");
}

    // Reset function to be called from the console
    function resetGame() {
        // Reset all game variables
        score = 0;
        upgradeLevel = 0;
        upgradeCost = 5;
        lawnmowerActive = false;
        prestigeMultiplier = 1;
        prestigeCount = 0;
        selectedCrop = "wheat";
        growthStage = -1;
    
        // Clear localStorage
        localStorage.removeItem('farmlandGame');
    
        // Update the UI
        scoreDisplay.textContent = score;
        buyUpgradeButton.textContent = `Buy Upgrade (Cost: ${upgradeCost})`;
        lawnmowerButton.disabled = false;
        lawnmowerButton.textContent = "Buy Lawnmower (100)";
        prestigeCounter.textContent = `Prestige: ${prestigeCount}`;
        prestigeButton.style.display = "none";
        updateShopButtons();
        updateCropButtons();
        updateStage();
    
        console.log("Game has been reset! All progress has been cleared.");
        }

    // Copyright
    function Copyright() {
    console.log("Hey! This was made by Andrew a.k.a A41K so Arok Andras. I hope you enjoy my little game :)"); // Confirmation in the console
    }

    // DevCommands
    function DevCommands() {
    console.log("Here are the available commands:");
    console.log("MinusScore: Adds 10000 score");
    console.log("MinusPrestige: Adds 10 Prestige");
    console.log("ResetScore: Resets the score to 0");
    console.log("GoBack: Reverts to the last save");
    console.log("ResetGame: Resets the game to its initial state");
    console.log("Copyright: Displays the copyright information");
    console.log("CheatCode: Fake cheat code that reduces score and prestige by 1000000");
    }
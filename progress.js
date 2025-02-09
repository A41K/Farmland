        // Save progress to localStorage
        function saveProgress() {
            const gameState = {
                score,
                upgradeLevel,
                upgradeCost,
                lawnmowerActive,
                selectedCrop,
                prestigeMultiplier,
                prestigeCount
            };
            localStorage.setItem('farmlandGame', JSON.stringify(gameState));
        }
    
        // Load progress from localStorage
        function loadProgress() {
            const savedState = localStorage.getItem('farmlandGame');
            if (savedState) {
                const gameState = JSON.parse(savedState);
                score = gameState.score || 0;
                upgradeLevel = gameState.upgradeLevel || 0;
                upgradeCost = gameState.upgradeCost || 5;
                lawnmowerActive = gameState.lawnmowerActive || false;
                selectedCrop = gameState.selectedCrop || "wheat";
                prestigeMultiplier = gameState.prestigeMultiplier || 1;
                prestigeCount = gameState.prestigeCount || 0;
    
                // Update UI based on loaded progress
                scoreDisplay.textContent = score;
                updateCropButtons();
                buyUpgradeButton.textContent = `Buy Upgrade (Cost: ${upgradeCost})`;
                updateShopButtons();
                updateStage();

                  // If lawnmower was active, disable its button and show its status
            if (lawnmowerActive) {
                lawnmowerButton.disabled = true;
                lawnmowerButton.textContent = "Lawnmower Active!";
            }

             // Show the Prestige button if 10 upgrades are reached
             if (upgradeLevel >= 5) {
                prestigeButton.style.display = "block";
            }
        }
    }
        // Handle shop upgrades
        buyUpgradeButton.addEventListener('click', () => {
            if (score >= upgradeCost) {
                score -= upgradeCost;
                upgradeLevel++;
                upgradeCost *= 2; // Multiply cost by 2
                scoreDisplay.textContent = score;
                buyUpgradeButton.textContent = `Buy Upgrade (Cost: ${upgradeCost})`;
                updateShopButtons();
                saveProgress(); // Save after upgrading
                
                 // Show Prestige button if 10 upgrades are reached
            if (upgradeLevel >= 5) {
                prestigeButton.style.display = "block";
            }
        }
    });

             // Handle lawnmower purchase
             lawnmowerButton.addEventListener('click', () => {
        if (score >= 100) {
            score -= 100;
            lawnmowerActive = true; // Activate the lawnmower upgrade
            lawnmowerButton.disabled = true; // Disable the button after purchase
            lawnmowerButton.textContent = "Lawnmower Active!";
            scoreDisplay.textContent = score;
            updateShopButtons();
            saveProgress(); // Save after upgrading
        } else {
            message.textContent = "You need 100 score to buy the lawnmower!";
        }
    });
    
        // Enable or disable shop buttons based on score
        function updateShopButtons() {
            buyUpgradeButton.disabled = score < upgradeCost;
            tomatoButton.disabled = score < 25 && selectedCrop !== "tomato"; // Disable until score >= 25
            lawnmowerButton.disabled = lawnmowerActive || score < 100; // Disable if active or not enough score
            prestigeButton.disabled = score < 1000; // Disable Prestige button until score >= 1000
        }
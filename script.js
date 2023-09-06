document.getElementById('calculateButton').addEventListener('click', calculateExperience);

function calculateExperience() {
    const currentLevel = parseFloat(document.getElementById('currentLevel').value);
    const levelTarget = parseFloat(document.getElementById('levelTarget').value);

    if (isNaN(currentLevel) || isNaN(levelTarget)) {
        alert('Please enter valid numbers for current level and level target.');
        return;
    }

    let currentExp, targetExp, expNeeded;

    if (currentLevel >= 0 && currentLevel <= 15) {
        currentExp = currentLevel * currentLevel + 6 * currentLevel;
        targetExp = levelTarget * levelTarget + 6 * levelTarget;
        expNeeded = 2 * levelTarget + 7;
    } else if (currentLevel >= 16 && currentLevel <= 30) {
        currentExp = 2.5 * currentLevel * currentLevel - 40.5 * currentLevel + 360;
        targetExp = 2.5 * levelTarget * levelTarget - 40.5 * levelTarget + 360;
        expNeeded = 5 * levelTarget - 38;
    } else if (currentLevel >= 31) {
        currentExp = 4.5 * currentLevel * currentLevel - 162.5 * currentLevel + 2220;
        targetExp = 4.5 * levelTarget * levelTarget - 162.5 * levelTarget + 2220;
        expNeeded = 9 * levelTarget - 158;
    }

    document.getElementById('currentExp').textContent = currentExp.toFixed(2);
    document.getElementById('targetExp').textContent = targetExp.toFixed(2);
    document.getElementById('expNeeded').textContent = expNeeded.toFixed(2);
}

const toggleModeButton = document.getElementById('toggleMode');
const body = document.body;

toggleModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

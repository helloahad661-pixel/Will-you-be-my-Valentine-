const scenarios = [
    {
        question: "Will you be my Valentine, Princess?",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5lenZyZHI5OXM2eW95b3pmMG40cWVrMDhtNjVuM3A4dGNxa2g2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif"
    },
    {
        question: "Will you be the prettiest girl in the world today? (Wait, you already are!)",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c7maas/giphy.gif" 
    },
    {
        question: "Are you ready for the best Valentine's date ever?",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/K97m8m6lO8u/giphy.gif"
    }
];

let currentStep = 0;

function handleYesClick() {
    currentStep++;

    if (currentStep < scenarios.length) {
        // Update to the next sweet question
        document.getElementById("questionText").textContent = scenarios[currentStep].question;
        document.getElementById("mainGif").src = scenarios[currentStep].gif;
        
        // Shrink the Yes button back to normal for the next question
        const yesButton = document.querySelector('.yes-button');
        yesButton.style.fontSize = "1.2rem"; 
    } else {
        // FINAL SUCCESS PAGE
        document.querySelector(".container").innerHTML = `
            <h1 class="header_text">Yay! I knew you'd say yes! ❤️</h1>
            <div class="gif_container">
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MDJ9uLGi9pTJS/giphy.gif">
            </div>
        `;
    }
}

function handleNoClick() {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    
    // Random "No" responses
    const noTexts = ["Are you sure?", "Really?", "Think again!", "Princess please!", "You're breaking my heart :("];
    noButton.textContent = noTexts[Math.floor(Math.random() * noTexts.length)];

    // Make the Yes button grow bigger so she has to click it!
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

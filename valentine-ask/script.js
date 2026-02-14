// Elements - We use multiple selectors to make sure it finds your headers
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const title = document.getElementById("letter-title") || document.querySelector("h1");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

let runCount = 0; 

// 1. HEART RAIN (The Magic)
function createHeartRain() {
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = "-5vh";
            heart.style.fontSize = Math.random() * 24 + 12 + "px";
            heart.style.zIndex = "10000";
            heart.style.pointerEvents = "none";
            heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, i * 100);
    }
}

const style = document.createElement('style');
style.innerHTML = `@keyframes fall { to { transform: translateY(105vh) rotate(360deg); } }`;
document.head.appendChild(style);

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => document.querySelector(".letter-window").classList.add("open"), 50);
});

// 2. MOBILE-FIXED MOVEMENT
function handleNoInteraction() {
    runCount++;

    if (runCount <= 3) {
        // Force text change on every tap
        if (runCount === 1) title.innerText = "Catch me! 😜";
        if (runCount === 2) title.innerText = "Too slow! 🏃‍♂️💨";
        if (runCount === 3) title.innerText = "Okay, I'll stop! 😇";

        const padding = 60;
        const maxX = window.innerWidth - noBtn.offsetWidth - padding;
        const maxY = window.innerHeight - noBtn.offsetHeight - padding;

        noBtn.style.position = "fixed"; 
        noBtn.style.left = `${Math.max(padding, Math.random() * maxX)}px`;
        noBtn.style.top = `${Math.max(padding, Math.random() * maxY)}px`;
        noBtn.style.zIndex = "999";
    } else {
        // The Final State after 3 taps
        title.innerHTML = "Are you sure? 🥺 <br> I'll buy you chocolate! 🍫";
        noBtn.style.display = "none"; 
        yesBtn.style.transform = "scale(2)"; 
        yesBtn.style.zIndex = "1000";
    }
}

// Attach to both click and touch for mobile
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleNoInteraction();
});

// 3. THE VICTORY MOMENT
yesBtn.addEventListener("click", () => {
    createHeartRain();
    
    // Force the text change
    title.innerHTML = "BIG YAYYYYYY! 🎉<br>❤️ I LOVE YOU! ❤️";
    title.style.fontSize = "2rem";
    title.style.display = "block";

    buttons.style.display = "none";
    finalText.style.display = "block";
    
    // Apology Message
    finalText.innerHTML = "I know I'm a bit late to ask, Rasika, but my love for you is always on time. ❤️";
    
    document.body.style.backgroundColor = "#ffe5ec";
});

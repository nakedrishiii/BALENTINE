// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const title = document.getElementById("letter-title");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// 1. HEART RAIN (The "Magic" Effect)
function createHeartRain() {
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = "-5vh";
            heart.style.fontSize = Math.random() * 24 + 12 + "px";
            heart.style.zIndex = "9999";
            heart.style.pointerEvents = "none";
            heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, i * 100);
    }
}

// Add animation style
const style = document.createElement('style');
style.innerHTML = `@keyframes fall { to { transform: translateY(105vh) rotate(360deg); } }`;
document.head.appendChild(style);

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => document.querySelector(".letter-window").classList.add("open"), 50);
});

let runCount = 0;
noBtn.addEventListener("mouseover", () => {
    if (runCount < 3) {
        runCount++;
        const padding = 50;
        const maxX = window.innerWidth - noBtn.offsetWidth - padding;
        const maxY = window.innerHeight - noBtn.offsetHeight - padding;
        noBtn.style.position = "fixed";
        noBtn.style.left = `${Math.max(padding, Math.random() * maxX)}px`;
        noBtn.style.top = `${Math.max(padding, Math.random() * maxY)}px`;
        if (runCount === 3) title.textContent = "Okay, I'll stop! 😇";
    }
});

noBtn.addEventListener("click", () => {
    if (runCount >= 3) {
        title.innerHTML = "Are you sure? 🥺 <br> I'll buy you chocolate! 🍫";
        noBtn.style.display = "none";
        yesBtn.style.transform = "scale(2)";
    }
});

// THE VICTORY MOMENT
yesBtn.addEventListener("click", () => {
    createHeartRain();
    title.innerHTML = "BIG YAYYYYYY! 🎉<br>❤️ I LOVE YOU! ❤️";
    title.style.fontSize = "2.5rem";

    buttons.style.display = "none";
    finalText.style.display = "block";
    
    // THE SWEET APOLOGY
    finalText.innerHTML = "I know I'm a bit late to ask, but my love for you is always on time. <br><br> Best Valentine's Day ever! ❤️";
    
    document.body.style.backgroundColor = "#ffe5ec";
});
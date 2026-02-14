// FORCING TEXT FOR RASIKA RATHORE
const title = document.querySelector("h1") || document.getElementById("letter-title");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const noBtn = document.querySelector(".no-btn");
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const catImg = document.getElementById("letter-cat");

let runCount = 0;

// Heart Rain Function
function hearts() {
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const h = document.createElement("div");
            h.innerHTML = "❤️";
            h.style.cssText = `position:fixed; left:${Math.random()*100}vw; top:-5vh; font-size:${Math.random()*20+15}px; z-index:9999; pointer-events:none; animation:fall ${Math.random()*3+2}s linear forwards;`;
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 5000);
        }, i * 100);
    }
}
const s = document.createElement('style');
s.innerHTML = `@keyframes fall { to { transform: translateY(105vh) rotate(360deg); } }`;
document.head.appendChild(s);

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => document.querySelector(".letter-window").classList.add("open"), 50);
});

// Mobile Interaction
function move() {
    runCount++;
    if (runCount <= 3) {
        if (runCount === 1) title.innerText = "Catch me! 😜";
        if (runCount === 2) title.innerText = "Too slow! 🏃‍♂️💨";
        if (runCount === 3) title.innerText = "Okay, I'll stop! 😇";
        noBtn.style.cssText = `position:fixed; left:${Math.random()*70}vw; top:${Math.random()*70}vh; transition:0.3s; z-index:999;`;
    } else {
        title.innerHTML = "Are you sure? 🥺 <br> I'll buy you chocolate! 🍫";
        noBtn.style.display = "none";
        yesBtn.style.transform = "scale(2)";
    }
}
noBtn.addEventListener("click", (e) => { e.preventDefault(); move(); });

// THE BIG MOMENT
yesBtn.addEventListener("click", () => {
    hearts();
    title.innerHTML = "BIG YAYYYYYY! 🎉<br>❤️ I LOVE YOU [Insert Name Here]! ❤️";
    title.style.fontSize = "2.2rem";
    catImg.src = "https://media.tenor.com/On7be2Wll8YAAAAi/goma-happy.gif";
    catImg.style.display = "block";
    buttons.style.display = "none";
    finalText.style.display = "block";
    finalText.innerHTML = "I know I'm a bit late to ask, Rasika, but my love for you is always on time. ❤️";
    document.body.style.backgroundColor = "#ffe5ec";
});


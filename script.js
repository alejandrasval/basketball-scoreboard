let homePoints = 0;
let home = document.getElementById("home");
let homeScore = document.getElementById("home-score");
let home1 = document.getElementById("home-1");
let home2 = document.getElementById("home-2");
let home3 = document.getElementById("home-3");

let guestPoints = 0;
let guest = document.getElementById("guest");
let guestScore = document.getElementById("guest-score");
let guest1 = document.getElementById("guest-1");
let guest2 = document.getElementById("guest-2");
let guest3 = document.getElementById("guest-3");

home1.addEventListener("click", () => {
    homePoints += 1;
    homeScore.textContent = homePoints;
});

home2.addEventListener("click", () => {
    homePoints += 2;
    homeScore.textContent = homePoints;
});

home3.addEventListener("click", () => {
    homePoints += 3
    homeScore.textContent = homePoints;
});

guest1.addEventListener("click", () => {
    guestPoints += 1;
    guestScore.textContent = guestPoints;
});

guest2.addEventListener("click", () => {
    guestPoints += 2;
    guestScore.textContent = guestPoints;
});

guest3.addEventListener("click", () => {
    guestPoints += 3
    guestScore.textContent = guestPoints;
});

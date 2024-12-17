
// CARD NAVIGATION

let moonlight = document.getElementById("moonlight");
if (moonlight) {
    moonlight.addEventListener("click", () => {
        window.location.href = "moonlight.html";
    });
}

let focus = document.getElementById("focus-dashboard");
if (focus) {
   focus.addEventListener("click", () => {
       window.location.href = "focus.html";
    });
}

let loast = document.getElementById("project-loast");
if (loast) {
   loast.addEventListener("click", () => {
       window.location.href = "loast.html";
   });
}

let portfolio = document.getElementById("portfolio");
if (portfolio) {
    portfolio.addEventListener("click", () => {
        window.location.href = "portfolio.html";
    });
}

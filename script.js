const darkModeToggle = document.getElementById('darkModeToggle');

// Load saved theme on every page
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (darkModeToggle) {
        darkModeToggle.checked = true;
    }
}

// Toggle theme
if (darkModeToggle) {
    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}
   // typing effect
const text = "Hi, I'm Aron";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 150);
    }
}

window.addEventListener("load", typeEffect);

<!-- image flipping animation -->
const profile = document.getElementById("profileFlip");
const img = profile.querySelector("img");

profile.addEventListener("click", () => {
    img.classList.add("flip");

    // return back after animation
    setTimeout(() => {
        img.classList.remove("flip");
    }, 600);
});

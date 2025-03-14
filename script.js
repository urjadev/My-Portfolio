// --------------------------------------------------------------------SIDE BAR--------------------------------------------------------------
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    // toggle Menu/Navbar
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
    // closing navbar on clicking any link
    $(".section-link").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
});



// --------------------------------------------------------------------PROGRESS BAR-------------------------------------------------------------
let circularProgressBars = [
    {
        element: document.querySelector("#circular-progress1"),
        valueElement: document.querySelector("#progress-value1"),
        endValue: 90,
    },
    {
        element: document.querySelector("#circular-progress2"),
        valueElement: document.querySelector("#progress-value2"),
        endValue: 70,
    },
    {
        element: document.querySelector("#circular-progress3"),
        valueElement: document.querySelector("#progress-value3"),
        endValue: 60,
    },
    {
        element: document.querySelector("#circular-progress4"),
        valueElement: document.querySelector("#progress-value4"),
        endValue: 70,
    },
];

let totalDuration = 3000;

// Function to create progress animation for each bar
function animateProgressBars() {
    circularProgressBars.forEach((bar) => {
        let progressStartValue = 0;
        let speed = totalDuration / bar.endValue;

        let progress = setInterval(() => {
            progressStartValue++;

            bar.valueElement.textContent = `${progressStartValue}%`;
            bar.element.style.background = `conic-gradient(#7755e6 ${progressStartValue * 3.6
                }deg, #ededed 0deg)`;

            if (progressStartValue >= bar.endValue) {
                clearInterval(progress);
            }
        }, speed);
    });
}

// ------------------------------------------------Set up ScrollReveal for skills progress bar------------------------------------------------
ScrollReveal({ reset: true }).reveal(".skills", {
    afterReveal: animateProgressBars,
    duration: 1000,
});

// ------------------------------------------------------PROGRESS BAR SCRIPT ENDS-----------------------------------------------------------

// --------------------------------------------------------------------NAVIGATIONS-----------------------------------------------------
document.getElementById("git").addEventListener("click", () => {
    window.open("https://github.com/urjadev", "_blank");
});
document.getElementById("linkdin").addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/urja-angre-26241a321/", "_blank");
});
document.getElementById("game").addEventListener("click", () => {
    window.open("https://urjadev.github.io/Rock-Paper-Scissors-Game/", "_blank");
});


document.getElementById("currencyConvertor").addEventListener("click", () => {
    window.open("https://urjadev.netlify.app/", "_blank");
});

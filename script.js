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

// --------------------------------------------------------------------CV DOWNLOAD-------------------------------------------------------------
document.getElementById("download-cv").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "Assets/Urja_Angre_CV.pdf";
    link.download = "Urja_Angre_CV.pdf";
    link.click();
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

// ----------------------------------------------------------------CONTACT FORM VALIDATION---------------------------------------------------
const form = document.getElementById("form");
const result = document.getElementById("submitted-msg");

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default form submission

    const Name = document.getElementById("name-field");
    const Email = document.getElementById("email-field");
    const Subject = document.getElementById("sub-field");
    const Message = document.getElementById("msg-field");

    const mailError = document.getElementById("mail-error");
    const MsgError = document.getElementById("msg-error");

    let isValid = true;

    // Validation
    if (
        Name.value.trim() === "" ||
        Email.value.trim() === "" ||
        Subject.value.trim() === "" ||
        Message.value.trim() === ""
    ) {
        result.style.display = "block";
        result.textContent = "*Please fill out all the fields";
        result.style.color = "#f83737";
        result.style.fontSize = "15px";
        isValid = false;

        setTimeout(() => {
            result.style.display = "none";
        }, 3000);
    } else {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(Email.value.trim())) {
            mailError.textContent = "Please enter a valid email address";
            mailError.style.display = "block";
            isValid = false;

            setTimeout(() => {
                mailError.style.display = "none";
            }, 2000);
        }

        if (Message.value.trim().length > 60) {
            MsgError.textContent = "Message should be 60 characters or less";
            MsgError.style.display = "block";
            isValid = false;

            setTimeout(() => {
                MsgError.style.display = "none";
            }, 2000);
        }
    }

    // Submit form if valid
    if (isValid) {
        result.style.display = "block"
        result.innerHTML = "Please wait...";
        result.style.color = "black";
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status === 200) {
                    result.style.display = "block"
                    result.innerHTML = `Thanks! I’ll get back to you shortly :)`;
                    result.style.color = "black";
                } else {
                    result.style.display = "block"
                    result.innerHTML = json.message;
                }
            })
            .catch((error) => {
                console.log(error);
                result.style.display = "block"
                result.innerHTML = "Something went wrong!";
            })
            .finally(() => {
                // Reset form and hide result message
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 5000);
            });

        // Change submit button icon
        setTimeout(() => {
            document.querySelector("#submit i").classList = "fa-solid fa-check";
            setTimeout(() => {
                document.querySelector("#submit i").classList =
                    "fa-solid fa-paper-plane";
            }, 5000);
        }, 800);
    }
});


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

document.getElementById("netflix").addEventListener("click", () => {
    window.open("https://urjadev.github.io/Netflix-Clone/", "_blank");
});
document.getElementById("currencyConvertor").addEventListener("click", () => {
    window.open("https://urjadev.netlify.app/", "_blank");
});



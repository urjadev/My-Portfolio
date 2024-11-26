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
    link.href = "Assets/UrjaAngre_CV.pdf";
    link.download = "UrjaAngre_CV.pdf";
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
const scriptURL =
    "https://script.google.com/macros/s/AKfycbyNI42iyvGZ4ZYquwFQBjHxEb_jgOyEgWOHLPITova4NW7vINQ_qFs6AbN44VgDMvz5/exec";
const form = document.forms["submit-to-google-sheet"];

document.getElementById("submit").addEventListener("click", () => {
    const Name = document.getElementById("name-field");
    const Email = document.getElementById("email-field");
    const Subject = document.getElementById("sub-field");
    const Message = document.getElementById("msg-field");

    const mailError = document.getElementById("mail-error");
    const MsgError = document.getElementById("msg-error");
    const SubmittedMsg = document.getElementById("submitted-msg");

    let isValid = true;

    // Check if any field is empty
    if (
        Name.value.trim() === "" ||
        Email.value.trim() === "" ||
        Subject.value.trim() === "" ||
        Message.value.trim() === ""
    ) {
        SubmittedMsg.style.display = "block";
        SubmittedMsg.textContent = "*Please fill out all the fields";
        SubmittedMsg.style.color = "#f83737";
        SubmittedMsg.style.fontSize = "15px";
        isValid = false;

        setTimeout(() => {
            SubmittedMsg.style.display = "none";
        }, 3000);
    } else {
        // Email verification
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(Email.value.trim())) {
            mailError.textContent = "Please enter a valid email address";
            mailError.style.display = "block";
            isValid = false;

            setTimeout(() => {
                mailError.style.display = "none";
            }, 2000);
        }

        // Message length verification
        if (Message.value.trim().length > 60) {
            MsgError.textContent = "Message should be 60 characters or less";
            MsgError.style.display = "block";
            isValid = false;

            setTimeout(() => {
                MsgError.style.display = "none";
            }, 2000);
        }
    }

    // Submit if all validations pass
    if (isValid) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
                .then((response) => {
                    console.log("Success!", response);

                    // Display success message
                    SubmittedMsg.textContent = `Thanks! I’ll get back to you shortly :)`;
                    SubmittedMsg.style.display = "block";
                    SubmittedMsg.style.color = "black";
                    setTimeout(() => {
                        SubmittedMsg.style.display = "none";
                    }, 5000);

                    // Clear form fields
                    Name.value = "";
                    Email.value = "";
                    Subject.value = "";
                    Message.value = "";

                    // Change icon on submit button
                    setTimeout(() => {
                        document.querySelector("#submit i").classList = "fa-solid fa-check";

                        setTimeout(() => {
                            document.querySelector("#submit i").classList =
                                "fa-solid fa-paper-plane";
                        }, 5000);
                    }, 800);
                })
                .catch((error) => {
                    alert(`Error! ${error.message}`);
                });
        });
    }
});

// --------------------------------------------------------------------NAVIGATIONS-----------------------------------------------------
document.getElementById("linkdin").addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/urja-angre-26241a321/", "_blank");
});

document.getElementById("medium").addEventListener("click", () => {
    window.open("https://urjadev.github.io/Medium-clone/", "_blank");
});

document.getElementById("game").addEventListener("click", () => {
    window.open("https://urjadev.github.io/Rock-Paper-Scissors-Game/", "_blank");
});



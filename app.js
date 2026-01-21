//NAVBAR SCROLL EFFECT
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    nav.classList.toggle('naWinScroll', window.scrollY > 0);
});


//SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});


//ACTIVE NAV LINK ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-container ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});



//SCROLL TO TOP BUTTON
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "⬆";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 14px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.background = "#2563eb";
scrollBtn.style.color = "#fff";
scrollBtn.style.fontSize = "18px";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


//CONTACT FORM VALIDATION
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");
        let valid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = "red";
                valid = false;
            } else {
                input.style.borderColor = "#e5e7eb";
            }
        });

        if (valid) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Please fill all fields correctly.");
        }
    });
}


//TYPING EFFECT (HERO)
const typingText = document.querySelector(".name span");

if (typingText) {
    const words = ["Muawiyah", "Web Developer", "Full Stack Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        let currentWord = words[wordIndex];

        if (!deleting) {
            typingText.textContent = currentWord.substring(0, charIndex++);
            if (charIndex > currentWord.length) {
                deleting = true;
                setTimeout(typeEffect, 1000);
                return;
            }
        } else {
            typingText.textContent = currentWord.substring(0, charIndex--);
            if (charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }
        setTimeout(typeEffect, deleting ? 80 : 120);
    }

    typeEffect();
}
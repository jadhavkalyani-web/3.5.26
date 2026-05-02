 // Goals toggle functionality
const goalsBtn = document.getElementById("goalsBtn");
const goalsList = document.getElementById("goalsList");
const goalsChevron = document.getElementById("goalsChevron");
const goalsText = document.getElementById("goalsText");

if (goalsBtn) {
  goalsBtn.addEventListener("click", () => {
    const isOpen = goalsList.classList.contains("open");
    
    if (isOpen) {
      goalsList.classList.remove("open");
      goalsChevron.classList.remove("rotate");
      goalsText.textContent = "Click to see what I'm working towards";
    } else {
      goalsList.classList.add("open");
      goalsChevron.classList.add("rotate");
      goalsText.textContent = "Click to hide";
    }
  });
}

// Smooth scroll for navigation links
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    if(result.success){
        statusMsg.innerHTML = "✅ Message Sent Successfully!";
        form.reset();
    } else {
        statusMsg.innerHTML = "❌ Something went wrong!";
    }
});



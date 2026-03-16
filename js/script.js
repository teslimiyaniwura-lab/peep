
const copyBtn = document.getElementById("copyBtn");
const contract = document.getElementById("contract");

copyBtn.addEventListener("click", function () {

    const text = contract.innerText.replace("CA :", "").trim();

    navigator.clipboard.writeText(text);

    copyBtn.innerHTML = "Copied ✓";

    setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> COPY CA';
    }, 2000);
});

const telegramBtn = document.getElementById("telegramBtn");

telegramBtn.addEventListener("click", function () {
    window.open("https://t.me/PepeEnjoysEndlessPump", "_blank");
});


function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {

        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();
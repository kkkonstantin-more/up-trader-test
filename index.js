const animationToggle = document.getElementById("animationToggle");
const header = document.getElementById("header");
const headerContent = document.getElementById("headerContent");
const infoContent = document.getElementById("infoContent");
const toggleArrow = document.getElementById("toggleArrow");

function makeDesktopSlide() {
    header.style.opacity = "0";
    headerContent.style.marginTop = "-110vh";
    setTimeout(() => {
        infoContent.style.opacity = "1";
    }, 700)
}

function showInfoMobile() {
    if (infoContent.style.display === "block") {
        infoContent.style.display = "none";
        toggleArrow.style.rotate = "0deg";
        header.style.backgroundImage = "url('assets/header-bg.png')";
    }
    else {
        infoContent.style.display = "block";
        toggleArrow.style.rotate = "180deg";
        header.style.backgroundImage = "none";
        header.style.backgroundColor = "#f3f2da";
    }
}

if (window.innerWidth <= 650) {
    const infoMobile = document.getElementById("infoMobile");
    infoMobile.appendChild(infoContent);

    document.getElementById("changeableOptionName").innerText = "Самостоятельно торговать";
    document.getElementById("changeableButton").innerText = "Открыть счет";

    animationToggle.onclick = function() { showInfoMobile(); }
}
else {
    animationToggle.onclick = function() { makeDesktopSlide(); }
}


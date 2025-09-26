document.addEventListener("DOMContentLoaded", function() {

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector("nav #cover");
    const icon = hamburger.querySelector("span");
    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("fixed");
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("open");
        if (hamburger.classList.contains("open")) {
            icon.innerHTML = "&times;";
        } else {
            icon.innerHTML = "&#9776;";
        }
    });

    
});
function s(){
        window.open("./chatbot.html", "_self");
    }
function p(){
    window.open("./cam.html", "_self");
}
const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const webcam = new Webcam(webcamElement, 'user', canvasElement);
webcam.start();


function a(){
    window.open("./alerts.html", "_self");
}

function i(){
    window.open("./info.html", "_self");
}

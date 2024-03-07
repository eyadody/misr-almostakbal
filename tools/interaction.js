let startButton= document.getElementById("startButton")
let intro= document.getElementById("theIntro")
let main= document.getElementById("mainPage")
let svg= document.querySelector(".bar")
let path = document.getElementById("path")
let navLinks= document.getElementById("navbar-links")
let pages= document.querySelectorAll(".pages")
let alertPage= document.getElementById("alert-page")
var icon = document.getElementById("moon-icon")
let activeA= document.getElementById("activeSpan")
let footer=  document.getElementById("footer")


startButton.onclick= function(){
    intro.style.display="none"
    main.style.display= "block"
    document.body.style.overflow= "auto"
    footer.style.display= "block"
    if(!navigator.onLine){
        main.style.display="none"
        footer.style.display="none"
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const mode = localStorage.getItem("mode");
    const storedIcon = localStorage.getItem("icon"); // Correcting this from "icon" to "storedIcon"

    if (mode === "dark") {
        document.body.classList.add("dark-theme");
        if (storedIcon === "sun-icon") {
            icon.src = "imgs/sun.png";
            path.setAttribute("fill", "#25262f");
        } else {
            icon.src = "imgs/moon.png";
            path.setAttribute("fill", "#fff");
        }
    }
});

var icon = document.getElementById("moon-icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    const isDarkTheme = document.body.classList.contains("dark-theme");
    
    if (isDarkTheme) {
        icon.src = "imgs/sun.png";
        path.setAttribute("fill", "#25262f");
        localStorage.setItem("mode", "dark");
        localStorage.setItem("icon", "sun-icon");
    } else {
        icon.src = "imgs/moon.png";
        path.setAttribute("fill", "#fff");
        localStorage.setItem("mode", "light");
        localStorage.setItem("icon", "moon-icon");
    }
};

svg.onclick = function () {
    pages.forEach(function (link) {
        link.style.display = (link.style.display === 'none' || link.style.display === '') ? 'grid' : 'none';
    });

    svg.classList.toggle('active');

    if(active.classList.contains('pl') && svg.classList.contains('active')){
        activeA.style.bottom= "0"
        activeA.style.paddingTop= '10px'
        activeA.style.paddingBottom= '10px'
    }else{
        activeA.style.paddingTop= '0'
        activeA.style.paddingBottom= '0'
    }
};


if (!navigator.onLine) {
    alertPage.style.display = "grid";
    main.style.display="none"
    footer.style.display="none"
    document.body.style.overflow = 'hidden';
}

if (!navigator.online) {
    alertPage.onclick = function () {
        main.style.display="grid"
        alertPage.style.display = "none";
        document.body.style.overflow = 'visible';
    };
}
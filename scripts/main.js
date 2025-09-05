const listItems = document.querySelectorAll("li")

function toggleDone(e) {
    if(!e.target.className) {
        e.target.className = "done";
    } else {
        e.target.className = "";
    }
}

listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});

let myButton = document.querySelector("#usname");
let myHeading = document.querySelector("h1");
let scrollUpButton = document.querySelector("#upbutton");

function scrollUp(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}

function scrollDown(){
    window.scrollTo({
        top:document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
}

function toggleScroll(){
    const shouldBeFlipped = window.scrollY < 40;
    if (window.scrollY < 40) {
        scrollUpButton.classList.add('flipped');
    } else {
        scrollUpButton.classList.remove('flipped');
    }
}
window.addEventListener('scroll', toggleScroll);
window.addEventListener('load', toggleScroll);
scrollUpButton.addEventListener("click", () => {
    if(window.scrollY >= 40) {
        scrollUp();
    }
    else {
        scrollDown();
    }
})

function setUserName(cause) {
    const myName = prompt(cause);
    if(myName == null) {
        return;
    }
    if(myName == "") {
        setUserName("Ты ничего не ввел, родной!");
        return;
    }
    if (myName.length >= 15){
        setUserName("Это уже перебор!");
        return;
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Поздравляю, ${myName}, ты - подебил.`;
    }
}

myButton.addEventListener("click", () => {
    setUserName("Введите имя пользователя");
});

if(!localStorage.getItem("name")) {
    setUserName("Введите имя пользователя");
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Поздравляю, ${storedName}, ты - подебил.`;
}

const myImage = document.querySelector("#main-logo");
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else  {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }

});
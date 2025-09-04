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

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

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
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Поздравляю, ${storedName}, ты - подебил.`;
}

const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else  {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }

});
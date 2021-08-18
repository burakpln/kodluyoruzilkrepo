function askName() {
    let newName = (document.getElementById("pageName"));
    let inputName = prompt("İsim gir");
    newName.innerHTML = inputName;
    newName.style.textTransform = "capitalize";
}
askName();


function askTime() {
    let time = new Date();
    let nowDay = time.getDay();
    let dow;
    nowDay == 1 ? dow = "Pazartesi" :
        nowDay == 2 ? dow = "Salı" :
        nowDay == 3 ? dow = "Çarşamba" :
        nowDay == 4 ? dow = "Perşembe" :
        nowDay == 5 ? dow = "Cuma" :
        nowDay == 6 ? dow = "Cumartesi" :
        dow = "Pazar";

    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();

    h = h < 10 ? h = "0" + h : h;
    m = m < 10 ? m = "0" + m : m;
    s = s < 10 ? s = "0" + s : s;


    let nowTime = `${h}:${m}:${s}  ${dow} `
    let newTime = document.getElementById("pageTime");

    newTime.innerHTML = nowTime;
    setTimeout(askTime, 1000);
}

askTime();

var myHour = h
function greeter() {
    let greetMessage;
    myHour = myHour > 04 && myHour <=11 ? greetMessage = "Günaydın" :
        myHour > 11 && myHour <=18? greetMessage = "Tünaydın" :
        myHour > 18 && myHour <=22? greetMessage = "İyi Akşamlar" :
        myHour > 22 ? greetMessage = "İyi Geceler" :
        greetMessage = "İyi Geceler!";
    let greeting = document.querySelector("#greet")
    greeting.innerHTML = greetMessage;
}

greeter();

let i = 10;
(function myLoop(i) {
    setTimeout(function () {
        let myColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        if (--i) myLoop(i);
        console.log(i)

        let newColor = document.querySelector("body")
        newColor.style.backgroundColor = myColor;
    }, 3000)
})(i);
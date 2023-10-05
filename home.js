/*global document: false */
/*global character */

//Change Style by Character

/*global document: false */

document.addEventListener("DOMContentLoaded", function () {
    'use strict';
    changePageStyle();
    checkScroll();
});

function changePageStyle() {
    'use strict';

    const characterStyles = {
        hutao: {
            backgroundColor: "rgb(200, 10, 0)",
            gifSrc: "../Genshin/img/Character/hutao/hu-tao-dance.gif",
            mandarinName: "胡桃",
            englishName: "HUTAO"
        },
        qiqi: {
            backgroundColor: "rgb(139, 185, 255)",
            gifSrc: "../Genshin/img/Character/qiqi/qiqi-waiting.gif",
            mandarinName: "七七",
            englishName: "QIQI"
        },
        yaeMiko: {
            backgroundColor: "rgb(255, 154, 190)",
            gifSrc: "../Genshin/img/Character/yaeMiko/yaeMiko_Meow.gif",
            mandarinName: "八重神子",
            englishName: "YAE MIKO"
        },
        ganYu: {
            backgroundColor: "rgb(139, 185, 255)",
            gifSrc: "../Genshin/img/Character/ganYu/ganyu_profile.gif",
            mandarinName: "甘雨",
            englishName: "GAN YU"
        }
    };

    var character = localStorage.getItem("user1");
    var charGif = document.getElementById("changeStyle");
    var video = document.getElementById("charVideo");
    var charName = document.getElementById("charName");
    var header = document.querySelector('header');
    var nav1 = document.getElementById('nav1');
    var menu = document.getElementById('menu');

    if (character && characterStyles[character]) {
        var selectedCharacter = characterStyles[character];
        charGif.style.backgroundColor = selectedCharacter.backgroundColor;
        charGif.src = selectedCharacter.gifSrc;
        header.style.backgroundColor = selectedCharacter.backgroundColor;
        nav1.style.backgroundColor = selectedCharacter.backgroundColor;
        menu.style.backgroundColor = selectedCharacter.backgroundColor;
        nav1.style.filter = "brightness(50%)";
        charName.innerHTML = `${selectedCharacter.mandarinName}<br>${selectedCharacter.englishName}`;
    }

    video.src = `../Genshin/video/${character}.mp4`;
    video.load();
}

// Rest of your code...

//Drop Box Trigger
function displayDropBox() {
    'use strict';
    const dropBox = document.getElementById("dropBox");
    if (dropBox.style.display === "none" || dropBox.style.display === "" ) {
        dropBox.style.display = "block";
    } else {
        dropBox.style.display = "none";
    }
}

function displayPageStyle() {
    'use strict';
    const dropBoxStyle = document.getElementById("dropBoxStyle");
    if (dropBoxStyle.style.display === "none" || dropBoxStyle.style.display === ""  ) {
        dropBoxStyle.style.display = "block";
    } else {
        dropBoxStyle.style.display = "none";
    }
}

//Rick Roll Troll
const video = document.getElementById("Rick");
const dancingGif1 = document.getElementById("dancingGif1");
const dancingGif2 = document.getElementById("dancingGif2");

function checkScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const threshold = 100;

    if (scrollTop + clientHeight >= scrollHeight-threshold) {
        video.volume = 0.8;
        video.setAttribute("autoplay","");
        dancingGif1.style.display = "flex";
        dancingGif2.style.display = "flex";
        video.play(); 
    }
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("touchmove", checkScroll);

function setItem(name) {
    localStorage.setItem('user1',name);
    dropBoxStyle.style.display = "none";
    changePageStyle();
}

//Update date
const update = document.getElementById("update");
var day, month, year;
day = 5; 
month = "October"; ; 
year = 2023; 
var date = `${day} ${month} ${year}`;
update.innerHTML = `Updated by date <em>${date}</em>`;

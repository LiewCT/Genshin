/*global document: false */
/*global character */

function changePageStyle(character) {
    'use strict';
    var char, video, charName;
    char = document.getElementById("char");
    // pre = document.getElementById("preloader-img");
    video = document.getElementById("charVideo");
    charName = document.getElementById("charName");

    if (character === "hutao") {
        charName.innerHTML = "胡桃<br><span class='EngChar'>Hutao</span>";
        char.style.backgroundColor = "rgb(200,10,0)";
        charName.style.backgroundColor = "rgb(200,10,0)";
    } else if (character === "qiqi") {
        charName.innerHTML = "七七<br><span class='EngChar'>Qiqi</span>";
        char.style.backgroundColor = "rgb(139 185 255)";
        charName.style.backgroundColor = "rgb(139 185 255)";
    } else if (character === "yaeMiko") {
        charName.innerHTML = "八重神子<br><span class='EngChar'>Yae Miko</span>";
        char.style.backgroundColor = "rgb(255 154 190)";
        charName.style.backgroundColor = "rgb(255 154 190)";
        // pre.src="/img/Character/yaeMiko/yaeMiko_drinking_boba.gif"
        // pre.style.animation="loading"
    } else if (character === "ganYu") {
        charName.innerHTML = "甘雨<br><span class='EngChar'>Ganyu</span>";
        char.style.backgroundColor = "rgb(139 185 255)";
        charName.style.backgroundColor = "rgb(139 185 255)";
    }
    video.src = "/video/" + character + ".mp4";
    video.load();
}

document.addEventListener("DOMContentLoaded", function () {
    'use strict';
    changePageStyle(character);
});
// ================================
// Project Strawbie 🌷
// script.js
// ================================

const PASSWORD = "0610";

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const loadingMessages = [
    "Checking something... 😌",
    "Almost there... 😌",
    "Still preparing your surprise... 🫠",
    "One tiny second... 😭",
    "Done! 😙"
];

const questions = [

    "Do you think you're cute? 😌",

    "Did you fall from heaven, Strawbie? 😭",

    "Do you know you're my favourite person? 😙",

    "Do you think I got lucky by having you? 🫠",

    "Do you agree that you're too adorable to handle? 😋",

    "Do you think this smile should be illegal? 🤤",

    "Do you think you're the reason I smile like an idiot sometimes? 😭",

    "Do you think I should keep annoying you forever? 😫",

    "Do you think I am lucky to have someone like you? 😌",

    "One last question... Do you love me? 🫦"

];

let currentQuestion = 0;
let loadingIndex = 0;

function showScreen(id){

    document.querySelectorAll(".screen").forEach(screen=>{

        screen.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}
function unlock(){

    const pass = document.getElementById("pass").value;

    if(pass === PASSWORD){

        document.getElementById("msg").innerText = "";

        showScreen("welcome");

    }else{

        document.getElementById("msg").innerText =
        "Wrong password 😭";

    }

}

function toggleMusic(){

    if(music.paused){

        music.play();

        musicBtn.innerHTML = "⏸";

    }else{

        music.pause();

        musicBtn.innerHTML = "🎵";

    }

}
function startJourney(){

    showScreen("loading");

    loadingIndex = 0;

    const loadingText = document.getElementById("loadingText");

    loadingText.innerText = loadingMessages[loadingIndex];

    const timer = setInterval(function(){

        loadingIndex++;

        if(loadingIndex < loadingMessages.length){

            loadingText.innerText = loadingMessages[loadingIndex];

        }else{

            clearInterval(timer);

            currentQuestion = 0;

            showQuestion();

        }

    },1500);

}
function showQuestion(){

    showScreen("questions");

    document.getElementById("question").innerText =
    questions[currentQuestion];

}

function answerQuestion(){

    currentQuestion++;

    if(currentQuestion < questions.length){

        showQuestion();

    }else{

        showLetter();

    }

}
function showLetter(){

    showScreen("letter");

    document.getElementById("letterText").innerText =

`Hey Strawbie 😌

If you're reading this...

That means you survived all my silly questions 😭

I wanted to make something special for you because you are really special to me.

Thank you for all the smiles, laughs, and beautiful moments.

Happy Girlfriend's Day ❤️

(I still think I'm cute 🤧)

Love,
Your annoying boy 😙`;

}

function finish(){

    showScreen("end");

}
function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (18 + Math.random() * 15) + "px";

    heart.style.animationDuration =
    (4 + Math.random() * 3) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },7000);

}

setInterval(createHeart,700);
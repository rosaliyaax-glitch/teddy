// ======================
// ELEMENTS
// ======================

const cover = document.getElementById("cover");
const garden = document.getElementById("garden");

const dabButton = document.getElementById("dabButton");
const energyBar = document.getElementById("energyBar");

const letter = document.getElementById("letter");
const typing = document.getElementById("typing");

const flip = document.getElementById("flip");

const ending = document.getElementById("ending");

const cursor = document.getElementById("cursor");






// ======================
// CUTE CURSOR 🎀
// ======================

document.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});







// ======================
// FALLING SPARKLES ✨
// ======================

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = "✦";


    sparkle.style.left =
    Math.random() * 100 + "vw";


    sparkle.style.fontSize =
    (10 + Math.random()*25) + "px";


    sparkle.style.animationDuration =
    (3 + Math.random()*5) + "s";



    document
    .getElementById("sparkles")
    .appendChild(sparkle);



    setTimeout(()=>{

        sparkle.remove();

    },8000);

}


setInterval(createSparkle,200);








// ======================
// COVER ➜ GARDEN 🌿
// ======================

setTimeout(()=>{


    cover.style.display = "none";


    garden.style.display = "block";


},5000);








// ======================
// DAB ENERGY 🤝
// ======================

let energy = 0;


dabButton.addEventListener("click",()=>{


    energy += 20;


    energyBar.style.width =
    energy + "%";



    if(energy >= 100){


        garden.style.display = "none";


        letter.style.display = "block";


        startTyping();


    }


});








// ======================
// LETTER TYPING ✍️
// ======================


const message = `hey, lil teddy bear 🧸💚

hehe you actually found the secret thing.

first of all... yo 😭 bahaha

i know A Levels have been stressing you out a lot lately and your brain probably has like 500 tabs open at the same time 💀 lolol

mehh idiot, i need you to remember something okay?

you're doing better than you think.

i see how much effort you put in, even on the days you feel tired or unsure.

so here's your tiny reminder:

stop being so hard on urself harida 🫵😭

take breaks when you need them.

don't be so mean to yourself yea? only I get to do that :3

remember one stressful day doesn't decide your whole future.

i'm always cheering for you.

you better not underestimate yourself because you're actually more capable than you think 🤨💚

okay i'll stop before this becomes a whole novel 💀

just know i care about you a lot.

i wuv u sooo much, harida?

more than yk 🥺❤️

mwahh 🧸💗`;



let letterIndex = 0;


function startTyping(){


    if(letterIndex < message.length){


        typing.innerHTML += message[letterIndex];


        letterIndex++;


        setTimeout(startTyping,35);


    }


    else{


        flip.style.display = "block";


    }

}








// ======================
// FINAL PAGE 📖
// ======================

flip.addEventListener("click",()=>{


    letter.style.display = "none";


    ending.style.display = "block";


    createHearts();


});







function createHearts(){


    setInterval(()=>{


        const heart = document.createElement("div");


        heart.innerHTML = "♡";


        heart.style.position = "absolute";


        heart.style.left =
        Math.random()*100 + "vw";


        heart.style.top = "-30px";


        heart.style.fontSize =
        (20 + Math.random()*30) + "px";


        heart.style.color = "#ff8fbd";


        heart.style.animation =
        "fall 4s linear";



        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },4000);



    },150);


}

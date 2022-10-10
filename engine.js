
const machinechoiceDisplay = document.getElementById('machine-choice');
const userchoiceDisplay = document.getElementById('user-choice');
const resultdisplay = document.getElementById('result');
const bestofthree = document.getElementById('bestofthree');

let userchoice;
let computerchoice;
let resultvalue;
let machinescore = 0;
let userscore = 0;
let posbChs;
let img = document.createElement('img');
img.classList.add('block')

let img2 = document.createElement('img');
img2.classList.add('block')


const possiblechoices = document.querySelectorAll('button'); // any button pressed , this is trigggered

possiblechoices.forEach(posbChs => posbChs.addEventListener('click', (e) => {

    startprocess(e);

}))

function startprocess(e) {
    // id of the pressed button is fetched

    userchoice = e.target.value

    //console.log("userchoice = " + userchoice)

    console.log(document.getElementById('user-choice').appendChild(img2))

    if (userchoice === 'ROCK') {
        img2.src = 'rockk.PNG'
    }

    if (e.target.value === 'PAPER') {
        img2.src = 'paper.PNG'

    }

    if (e.target.value === 'SEASOR') {
        img2.src = 'seasor.PNG'

    }
    document.getElementById('user-choice').appendChild(img2);

    //userchoiceDisplay.innerHTML=userchoice;

    //at the same time of click , computer should generate a random output.
    generatecomputerchoice();

    getresult();

    findbestofthree();
}


function generatecomputerchoice() {

    const randomNumber = Math.floor(Math.random() * (4 - 1) + 1);  // will be 1 or 2 or 3

    //console.log(randomNumber);

    if (randomNumber === 1) {
        img.src = 'rockk.PNG'
        computerchoice = "ROCK"
    }

    if (randomNumber === 2) {
        img.src = 'paper.PNG'
        computerchoice = "PAPER"
    }

    if (randomNumber === 3) {
        img.src = 'seasor.PNG'
        computerchoice = "SEASOR"
    }
    console.log(document.getElementById('machine-choice').appendChild(img))

    document.getElementById('machine-choice').appendChild(img);
    //machinechoiceDisplay.innerHTML = computerchoice;

}

function getresult() {
    if (computerchoice === userchoice) {
        resultvalue = "IT'S A DRAW!";
    }

    if (computerchoice === 'ROCK' && userchoice === 'SEASOR') {
        resultvalue = 'YOU LOOSE';
    }

    if (computerchoice === 'PAPER' && userchoice === 'SEASOR') {
        resultvalue = 'YOU WIN';
    }

    if (computerchoice === 'PAPER' && userchoice === 'ROCK') {
        resultvalue = 'YOU LOOSE';
    }

    if (computerchoice === 'SEASOR' && userchoice === 'ROCK') {
        resultvalue = 'YOU WIN';

    }

    if (computerchoice === 'ROCK' && userchoice === 'PAPER') {
        resultvalue = 'YOU LOOSE';
    }

    if (computerchoice === 'SEASOR' && userchoice === 'PAPER') {
        resultvalue = 'YOU LOOSE';
    }

    resultdisplay.innerHTML = resultvalue;

}

function findbestofthree() {

    if (resultvalue === 'YOU LOOSE') {
        machinescore++;

        if (machinescore >= 3) {
            bestofthree.innerHTML = "You loose best of three";
            document.getElementById("ROCK").disabled = true;
            document.getElementById("PAPER").disabled = true;
            document.getElementById("SEASOR").disabled = true;
        
        }

    }
    if (resultvalue === 'YOU WIN') {
        userscore++;

        if (userscore >= 3) {
            bestofthree.innerHTML = "You win best of three";
            document.getElementById("ROCK").disabled = true;
            document.getElementById("PAPER").disabled = true;
            document.getElementById("SEASOR").disabled = true;


        }
    }

    console.log("machinescore"+machinescore);
    console.log("userscore"+userscore);



}
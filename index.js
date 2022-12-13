let homeCount = 0;
let addNumber = document.getElementById('scores');
function addOne(){
    homeCount +=1;
    addNumber.textContent=homeCount;
}
function addTwo() {
    homeCount+=2;
    addNumber.textContent=homeCount
}
function addThree() {
    homeCount+=3;
    addNumber.textContent=homeCount
}

let guestCount =0;
let plusnumber =document.getElementById('scores1')


function addOneA(){
    guestCount +=1;
    plusnumber.textContent=guestCount
}
function addTwoB(){
    guestCount +=2;
    plusnumber.textContent=guestCount
    }

function addThreeC(){
        guestCount +=3;
        plusnumber.textContent=guestCount
        }

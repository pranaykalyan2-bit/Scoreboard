let homeScore=0;
let guestScore=0;
function homeadd() {
    homeScore = homeScore+1;
    document.getElementById("homescore").textContent=homeScore; 
}
function homead(){
    homeScore+=2;
    document.getElementById("homescore").textContent=homeScore;
}
function homea(){
    homeScore+=3;
    document.getElementById("homescore").textContent=homeScore;
}
function guestadd(){
    guestScore+=1;
    document.getElementById("guestscore").textContent=guestScore;
}

function guestad(){
    guestScore+=2;
    document.getElementById("guestscore").textContent=guestScore;
}

function guesta(){
    guestScore+=3;
    document.getElementById("guestscore").textContent=guestScore;
}
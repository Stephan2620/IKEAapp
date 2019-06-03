let sog = document.querySelector(".sog");
let watson3 = document.querySelector(".watson3");
let startknap = document.querySelector(".start-knap");
let bottem2 = document.querySelector(".bottem2");
let scanpic = document.querySelector(".scanpic");
let scannu = document.querySelector(".scannu");


let iphone1 = document.querySelector(".iphone1");
let iphonescan = document.querySelector(".iphonescan");
let iphone2 = document.querySelector(".iphone2");
let iphone3 = document.querySelector(".iphone3");
let iphone4 = document.querySelector(".iphone4");

scanpic.addEventListener("click", skifttilscan);
sog.addEventListener("click", skiftSide);
watson3.addEventListener("click", skiftSide2);
startknap.addEventListener("click", skiftSide3);
bottem2.addEventListener("click", skiftSide2);
scannu.addEventListener("click", skiftSide2);


function skifttilscan(){

    iphonescan.style.display = "block";
    iphone1.style.display = "none";
    iphone2.style.display = "none";
    iphone3.style.display = "none";
    iphone4.style.display = "none";
}
function skiftSide(){

    iphone1.style.display = "none";
    iphone2.style.display = "block";
    iphone3.style.display = "none";
    iphone4.style.display = "none";
}
function skiftSide2(){
    iphonescan.style.display = "none";
    iphone1.style.display = "none";
    iphone2.style.display = "none";
    iphone3.style.display = "block";
    iphone4.style.display = "none";
}
function skiftSide3(){
    iphone1.style.display = "none";
    iphone2.style.display = "none";
    iphone3.style.display = "none";
    iphone4.style.display = "block";
}

// skift til hvid eller sort watson
let hvid = document.querySelector(".hvid");
let sort = document.querySelector(".sort");
let hvidon = document.querySelector(".hvidon");
let sorton = document.querySelector(".sorton");
let watsonHvid = document.querySelector(".watson-hvid");
let watsonSort = document.querySelector(".watson-sort");


hvid.addEventListener("click", skfitfarvehvid);
sort.addEventListener("click", skfitfarvesort);

function skfitfarvehvid(){
    sorton.style.display = "none";
    hvid.style.display = "none";
    watsonSort.style.display = "none";

    hvidon.style.display = "block";
    sort.style.display = "block";
    watsonHvid.style.display = "block";
}
function skfitfarvesort(){
    sorton.style.display = "block";
    hvid.style.display = "block";
    watsonSort.style.display = "block";

    hvidon.style.display = "none";
    sort.style.display = "none";
    watsonHvid.style.display = "none";
}

// skift af værktøj
let pilvenstre = document.querySelector(".pilvenstre");
let pilvenstrepart2 = document.querySelector(".pilvenstrepart2");
let pilvenstrepart3 = document.querySelector(".pilvenstrepart3");
let pilvenstrepart4 = document.querySelector(".pilvenstrepart4");
let pilhojre = document.querySelector(".pilhojre");
let pilhojrepart2 = document.querySelector(".pilhojrepart2");
let pilhojrepart3 = document.querySelector(".pilhojrepart3");
let pilhojrepart4 = document.querySelector(".pilhojrepart4");


let iphone4part2 = document.querySelector(".iphone4part2");
let iphone4part3 = document.querySelector(".iphone4part3");
let iphone4part4 = document.querySelector(".iphone4part4");

pilvenstre.addEventListener("click", skifttoj);
pilvenstrepart2.addEventListener("click", skifttoj2);
pilvenstrepart3.addEventListener("click", skifttoj3);
pilvenstrepart4.addEventListener("click", skifttoj4);
pilhojre.addEventListener("click", skifttoj5);
pilhojrepart2.addEventListener("click", skifttoj6);
pilhojrepart3.addEventListener("click", skifttoj7);
pilhojrepart4.addEventListener("click", skifttoj8);

function skifttoj(){
    // alert("det virker");
    iphone4part4.style.display = "block";
   iphone4.style.display = "none";
    iphone4part2.style.display = "none";
    iphone4part3.style.display = "none";
   
}
function skifttoj2(){
    // alert("det virker");
    iphone4.style.display = "block";
    iphone4part2.style.display = "none";
    iphone4part3.style.display = "none";
    iphone4part4.style.display = "none";
}
function skifttoj3(){
    // alert("det virker");
    iphone4.style.display = "none";
    iphone4part2.style.display = "block";
    iphone4part3.style.display = "none";
    iphone4part4.style.display = "none";
}
function skifttoj4(){
    // alert("det virker");
    iphone4.style.display = "none";
    iphone4part2.style.display = "none";
    iphone4part3.style.display = "block";
    iphone4part4.style.display = "none";
}
function skifttoj5(){
    // alert("det virker");
    iphone4.style.display = "none";
    iphone4part2.style.display = "block";
    iphone4part3.style.display = "none";
    iphone4part4.style.display = "none";
}
function skifttoj6(){
    // alert("det virker");
    iphone4.style.display = "none";
    iphone4part2.style.display = "none";
    iphone4part3.style.display = "block";
    iphone4part4.style.display = "none";
}
function skifttoj7(){
    // alert("det virker");
    iphone4.style.display = "none";
    iphone4part2.style.display = "none";
    iphone4part3.style.display = "none";
    iphone4part4.style.display = "block";
}
function skifttoj8(){
    // alert("det virker");
    iphone4.style.display = "block";
    iphone4part2.style.display = "none";
    iphone4part3.style.display = "none";
    iphone4part4.style.display = "none";
}
// skift side fra værktøj til trin
let iphone4sideskift1 = document.querySelector(".iphone4sideskift1");
let iphone4sideskift2 = document.querySelector(".iphone4sideskift2");
let iphone4sideskift3 = document.querySelector(".iphone4sideskift3");
let iphone4sideskift4 = document.querySelector(".iphone4sideskift4");



iphone4sideskift1.addEventListener("click", skiftside4til5);
iphone4sideskift2.addEventListener("click", skiftside4til5);
iphone4sideskift3.addEventListener("click", skiftside4til5);
iphone4sideskift4.addEventListener("click", skiftside4til5);

function skiftside4til5(){
    iphone4.style.display = "none";
    iphone4part2.style.display = "none";
    iphone4part3.style.display = "none";
    iphone4part4.style.display = "none";
    iphone5trin1.style.display = "block";
}
   

// skift af trin 1 2 3 og 4
let nestetrin1 = document.querySelector(".nestetrin1");
let nestetrin2 = document.querySelector(".nestetrin2");
let nestetrin3 = document.querySelector(".nestetrin3");
let nestetrin4 = document.querySelector(".nestetrin4");



let iphone5trin1 = document.querySelector(".iphone5trin1");
let iphone5trin2 = document.querySelector(".iphone5trin2");
let iphone5trin3 = document.querySelector(".iphone5trin3");
let iphone5trin4 = document.querySelector(".iphone5trin4");
let iphone6 = document.querySelector(".iphone6");

nestetrin1.addEventListener("click", skifttrin1);
nestetrin2.addEventListener("click", skifttrin2);
nestetrin3.addEventListener("click", skifttrin3);
nestetrin4.addEventListener("click", skifttrin4);


function skifttrin1(){
    iphone5trin1.style.display = "none";
    iphone5trin2.style.display = "block";
    iphone5trin3.style.display = "none";
    iphone5trin4.style.display = "none";
    iphone6.style.display = "none";
}
function skifttrin2(){
    iphone5trin1.style.display = "none";
    iphone5trin2.style.display = "none";
    iphone5trin3.style.display = "block";
    iphone5trin4.style.display = "none";
    iphone6.style.display = "none";
}
function skifttrin3(){
    iphone5trin1.style.display = "none";
    iphone5trin2.style.display = "none";
    iphone5trin3.style.display = "none";
    iphone5trin4.style.display = "block";
    iphone6.style.display = "none";
}
function skifttrin4(){
    iphone5trin1.style.display = "none";
    iphone5trin2.style.display = "none";
    iphone5trin3.style.display = "none";
    iphone5trin4.style.display = "none";
    iphone6.style.display = "block";
}

// skfit fra iphone6 til iphone 1
let forsideknap = document.querySelector(".forsideknap");

forsideknap.addEventListener("click", hjem);

function hjem(){
    iphone6.style.display = "none";
    iphone1.style.display = "block";

}

// tilbage knap
let tilbagetil1 = document.querySelector(".tilbagetil1");
let tilbagetil2 = document.querySelector(".tilbagetil2");
let tilbagetil3 = document.querySelector(".tilbagetil3");
let tilbagetil4 = document.querySelector(".tilbagetil4");
let tilbagetil5 = document.querySelector(".tilbagetil5");
let tilbagetil6 = document.querySelector(".tilbagetil6");


let tilbagetilforside = document.querySelector(".tilbagetilforside");
let tilbagetil3part2 = document.querySelector(".tilbagetil3part2");
let tilbagetil3part3 = document.querySelector(".tilbagetil3part3");
let tilbagetil3part4 = document.querySelector(".tilbagetil3part4");

let iphone5tilbage2 = document.querySelector(".iphone5tilbage2");
let iphone5tilbage3 = document.querySelector(".iphone5tilbage3");
let iphone5tilbage4 = document.querySelector(".iphone5tilbage4");


tilbagetilforside.addEventListener("click", tilbagetilside1);
tilbagetil1.addEventListener("click", tilbagetilside1);
tilbagetil2.addEventListener("click", tilbagetilside2);
tilbagetil3.addEventListener("click", tilbagetilside3);
tilbagetil4.addEventListener("click", tilbagetilside4);
tilbagetil5.addEventListener("click", tilbagetilside5);


tilbagetil3part2.addEventListener("click", tilbagetilside3);
tilbagetil3part3.addEventListener("click", tilbagetilside3);
tilbagetil3part4.addEventListener("click", tilbagetilside3);

iphone5tilbage2.addEventListener("click", tilbagetiltrin1);
iphone5tilbage3.addEventListener("click", tilbagetiltrin2);
iphone5tilbage4.addEventListener("click", tilbagetiltrin3);


function tilbagetilside1(){
    iphone2.style.display = "none";
    iphone1.style.display = "block";
    iphonescan.style.display = "none";
}
function tilbagetilside2(){
    iphone3.style.display = "none";
    iphone2.style.display = "block";
}
function tilbagetilside3(){
    iphone4.style.display = "none";
    iphone4part2.style.display = "none";
    iphone4part3.style.display = "none";
    iphone4part4.style.display = "none";
    iphone3.style.display = "block";
}
function tilbagetilside4(){
    iphone5trin1.style.display = "none";
    iphone4.style.display = "block";
}
function tilbagetilside5(){
    iphone6.style.display = "none";
    iphone5trin4.style.display = "block";
}




function tilbagetiltrin1(){
    iphone5trin1.style.display = "block";
    iphone5trin2.style.display = "none";
    iphone5trin3.style.display = "none";
    iphone5trin4.style.display = "none";
}
function tilbagetiltrin2(){
    iphone5trin1.style.display = "none";
    iphone5trin2.style.display = "block";
    iphone5trin3.style.display = "none";
    iphone5trin4.style.display = "none";
}
function tilbagetiltrin3(){
    iphone5trin1.style.display = "none";
    iphone5trin2.style.display = "none";
    iphone5trin3.style.display = "block";
    iphone5trin4.style.display = "none";
}
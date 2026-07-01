const button = document.getElementById("spinButton");

let reels = document.querySelectorAll(".reel-strip");
const paper = document.querySelector(".paper");


// ทำสำเนารีลให้ยาวขึ้น
reels.forEach(reel => {

    let clone1 = reel.cloneNode(true);
    let clone2 = reel.cloneNode(true);
    let clone3 = reel.cloneNode(true);
    let clone4 = reel.cloneNode(true);

    reel.parentElement.appendChild(clone1);
    reel.parentElement.appendChild(clone2);
    reel.parentElement.appendChild(clone3);
    reel.parentElement.appendChild(clone4);

});


reels = document.querySelectorAll(".reel-strip");

function spin(){
    
    reels.forEach((reel, index)=>{

        let symbolHeight = 377;

        let randomIndex = 2;

        let distance =
        -(symbolHeight * randomIndex);

        reel.style.transition =
        "transform 5s cubic-bezier(.17,.67,.12,1)";

        reel.style.transform =
        `translateY(${distance}px)`;

    });


    setTimeout(()=>{

        paper.style.transform =
        "translateY(-30px)";

    },5500);

}


const lever = document.getElementById("lever");


lever.addEventListener("click",()=>{

    lever.style.transform =
    "rotate(35deg)";


    setTimeout(()=>{

        lever.style.transform =
        "rotate(0deg)";

    },300);


    spin();

});

let boxs =document.querySelectorAll(".box");
let reset = document.querySelector("h2");
let bn=document.querySelector(".bn");
let turnO =true;

let wining=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxs.forEach((box) =>{
box.addEventListener("click",()=>{
    console.log("button was clicked");
    if (turnO==true) {
        box.innerText="O";
        turnO=false;
        box.disabled = true;
    }else{
        box.innerText="X";
        turnO=true;
        box.disabled = true;
    }
   checkWinner();
})
});
function restart(){
    turnO=true;
    enableBoxes();
    reset.innerText="TIC TAK TOE";
}
const disableBoxes = ()=>{
    for(let box of boxs){
    box.disabled= true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxs){
    box.disabled= false;
    box.innerText="";
    }
}

const checkWinner=()=>{
    for(let pattern of wining){
        let pos1val = boxs[pattern[0]].innerText;
        let pos1va2 = boxs[pattern[1]].innerText;
        let pos1va3 = boxs[pattern[2]].innerText;

        if (pos1val!=""&&pos1va2!=""&&pos1va3!="") {
            if (pos1val===pos1va2&&pos1va2===pos1va3) {
             reset.innerText="winner"+pos1val;
             disableBoxes();
            }
        }
    }
}
bn.addEventListener("click",restart);

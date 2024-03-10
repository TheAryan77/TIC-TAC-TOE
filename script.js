let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")   
let newGameBtn = document.querySelector("#newgame")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")


const resetgame = ()=>{
    turn0 = true;
    enableboxes()
    msgContainer.classList.add("hide")

}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
        box.style.backgroundColor="rgb(247, 202, 6)"
    }
}

let turn0 = true ;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [3,4,5],
    [2,5,8],
    [2,4,6],
    [2,4,5],
    [6,7,8],
];

const showdraw = () =>{
    msg.innerText = `OopS!Game is Draw!`
    msgContainer.classList.remove("hide")
    disabledboxes()
}

let count = 0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){ //Player O
            box.innerText = "O"
            box.style.backgroundColor = "#01afff"
            turn0 = false;
            count++;
        }
        else{ //Player X
            box.innerText = "X"
            box.style.backgroundColor = "rgb(1, 255, 86)"
            turn0 = true;
            count++;
        }
        box.disabled = "true"
        checkWinner();
        if(count==9){
            showdraw();
        }
    })
    
})


const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations!Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disabledboxes()
}

const checkWinner = () =>{
    for(pattern of winpatterns){
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner",pos1Val)
                console.log(pattern[0],pattern[1],pattern[2])
                showWinner(pos1Val);
            }
        }
    }
}
newGameBtn.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)


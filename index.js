let button = document.querySelector("button")
let boxes = document.querySelector(".boxes")
let box = document.querySelectorAll(".box")
let turn = "X";
let h1 = document.querySelector("h1")
let changeTurn=()=>{
    return turn=="X"?"0":"X";
}

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,6,3],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let checkWinner=()=>{
    winPatterns.forEach(e => {
        // console.log(e[0],e[1],e[2])
        // console.log(box[e[0]],box[e[1]],box[e[2]])
        if((box[e[0]].innerText === box[e[1]].innerText) && (box[e[1]].innerText === box[e[2]].innerText) && box[e[0]].innerText !== ""){
            console.log("Winner is " + box[e[0]].innerText)
            document.querySelector(".winGIF").style.display = "block"
        }
    });    
}

boxes.addEventListener("click",(e)=>{
    console.log(e.target.id)
    // e.target.innerText = turn;
    
    if(e.target.innerText === "X" || e.target.innerText === "0" ){
        console.log("returned")
        return;
    }
    else{
        e.target.innerText = turn;
        console.log("Printed turn")
        turn = changeTurn();
        h1.innerText = `${turn} Turn`
        checkWinner();
    }
})


button.addEventListener("click",()=>{
    turn = "X"
    h1.innerText = `X Turn`
    box.forEach(e => {
        e.innerText = "";
    });
    document.querySelector(".winGIF").style.display = "none"
})































// let boxes = document.querySelector(".boxes")
// let box = document.querySelectorAll(".box")
// let turn = "X";
// let changeTurn=()=>{
//     if(turn === "X"){
//         turn = "0"
//     }
//     else{
//         turn = "X"
//     }
// }

// let winPatterns = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,6,3],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ]

// boxes.addEventListener("click",(e)=>{
//     console.log(e.target.id + ` First Print`)
//     console.log(e.target.innerText + ` Second Print`)
//     // e.target.style.backgroundColor = "black";
//     if(e.target.innerText === "X" || e.target.innerText === "0"){
//         console.log(e.target.innerText + ` third print`)
//         e.preventDefault();
//     }
//     else{
//         e.target.innerText = turn;
//         console.log(e.target.innerText + ` fourth Print`)
//         changeTurn();
//         checkWinner();
//     }
// })

// let checkWinner=()=>{
//     winPatterns.forEach(e => {
//         // console.log(e[0],e[1],e[2])
//         // console.log(box[e[0]],box[e[1]],box[e[2]])
//         if((box[e[0]].innerText === box[e[1]].innerText) && (box[e[1]].innerText)===box[e[2]].innerText && box[e[0]].innerText != ""){
//             console.log(`${box[e[0]].innerText} is winner`)
//         }
//     });
// }
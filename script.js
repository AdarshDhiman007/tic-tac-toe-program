console.log("Welcome to Tic Tac Toe");
let musics = new Audio("musics.mp3")
let audioTurn = new Audio("play.wav")
let win = new Audio("win.mp3")
let turn = "x"
let gameover = false;

const changeTurn = ()=>{
 
  return turn ==="x"?"0": "x"
  
}

const checkWin = ()=> {
  let boxtext = document.getElementsByClassName('boxtext')
  let wins = [
    [0,1,2,-1,3,0],
    [3,4,5,0,130,0],
    [6,7,8,0,220,0],
    [0,3,6,-90,132,90],
    [1,4,7,0,132,90],
    [2,5,8,90,132,90],
    [0,4,8,0,132,45],
    [2,4,6,0,132,135]
  ]

  wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
      document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
      gameover = true;
      win.play();
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px"
      document.querySelector('.line').style.transform = `translate(${e[3]}rem, ${e[4]}rem) rotate(${e[5]}deg)`
      document.querySelector('.line').style.width = "81vh"
    }

    

  })


}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(e =>{
  let boxtext = e.querySelector('.boxtext');
  e.addEventListener('click',()=>{
    if(boxtext.innerText === ''){
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play()
      checkWin();
      if(!gameover)
      {
      document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
      }   
    }
  })
})

reset.addEventListener('click', ()=>{
  
  let boxtext = document.querySelectorAll('.boxtext');
  Array.from(boxtext).forEach(e =>{
    e.innerText= " "
    turn = "x";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.line').style.width = "0vh"
  })

})
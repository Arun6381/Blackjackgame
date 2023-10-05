

let cards =[]
let sum = 0
let hasblackjack = false
let isalive = false
let message =""
let messageel =document.getElementById("mess")
let suml =document.getElementById("sum-el")
let cardl =document.getElementById("card-l")
 

function getrendom(){
   let Rendomno = Math.floor(Math.random()*13)+1
   if(Rendomno>10){
      return 10
   }else if(Rendomno === 1){
      return 11
   }else{
      return Rendomno
   }

}
function startgame(){
   isalive = true
   let firstcard = getrendom()
let secondcaed = getrendom()
cards=[firstcard,secondcaed]
sum=firstcard+secondcaed

    rendergame()
}
  function rendergame(){ 
   cardl.textContent= "card :" 
   for(i=0;i<cards.length;i++){
      cardl.textContent+=cards[i] + " "
   }
   suml.textContent="sum :"+ sum
   if(sum<=20){
      message = "want to draw a card"
   }else if(sum===21){
      message = "you got a blackjock"
      hasblackjack = true
   }else{
      message = "you lost a match"
      isalive = false
   }
   messageel.textContent = message
  
  }

  function newcard(){
    let  nw = getrendom()
    sum +=nw
    cards.push(nw)
    console.log(cards)
    rendergame()
  }
//   let d=Math.floor(Math.random()*6)+1

//   console.log(d)
// let sen =["hi8","hi7","hi6","hi5","hi4","hi3","hi2","hi1"]
// let gent =document.getElementById("gre")

//  for(let i=0; i<sen.length; i++){
//    console.log(sen[i])
//    gent.textContent+=sen[i]+"  "
//  }
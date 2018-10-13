// // Set up event listeners for each button by their id
// slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
// slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
// slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
//
// // Start to run the real with the start button being clicked
//
// // Use the interval method to iterate through your array of images
//
// // Use the clear interval method to stop your interval method and set the image src to the img tag
//
// // Have a win condition to check if the source of the images are all the same

var interval;
var interval2;
var interval3;
var stopRotate1 = false
var stopRotate2 = false
var stopRotate3 = false
var reel1 = null
var reel2 = null
var reel3 = null
var pot = 0
var bank = 100


var imgArr = ['fruit/img0.jpeg','fruit/img1.jpeg','fruit/img2.jpeg']

window.addEventListener('load', function(){
  document.getElementById('pot').innerHTML = 'Pot: ' + pot
  document.getElementById('bank').innerHTML = 'Bank: ' + bank
})

document.getElementById('start').onclick = startGame
document.getElementById('max').onclick = maxBet
document.getElementById('min').onclick = minBet
document.getElementById('stop1').onclick = stop1
document.getElementById('stop2').onclick = stop2
document.getElementById('stop3').onclick = stop3

function maxBet(){
  pot += 5 * 2
  bank -= 5
  document.getElementById('pot').innerHTML = 'Pot: ' + pot
  document.getElementById('bank').innerHTML = 'Bank: ' + bank
}

function minBet(){
  pot += 2 * 2
  bank -= 2
  document.getElementById('pot').innerHTML = 'Pot: ' + pot
  document.getElementById('bank').innerHTML = 'Bank: ' + bank
}

function startGame(){
  if(pot === 0){
    document.getElementById('msg').innerHTML = 'Place a bet!'
  }else{
    spin1()
    spin2()
    spin3()
  }
}

function spin1(){
  // Inside the setInterval parameter (rotate1 is the function, 10000 is the amount of time by milisceonds)
  interval1 = setInterval(rotate1, 1000)
}

function spin2(){
  interval2 = setInterval(rotate2, 1000)
}

function spin3(){
  interval3 = setInterval(rotate3, 1000)
}

function rotate1(){
  var img = document.getElementsByTagName('img')[0]
  var image = imgArr[Math.floor(Math.random() * imgArr.length)]
  img.src = image
  reel1 = image
}

function rotate2(){
  var img = document.getElementsByTagName('img')[1]
  var image = imgArr[Math.floor(Math.random() * imgArr.length)]
  img.src = image
  reel2 = image
}

function rotate3(){
  var img = document.getElementsByTagName('img')[2]
  var image = imgArr[Math.floor(Math.random() * imgArr.length)]
  img.src = image
  reel3 = image
}

function stop1(){
  clearInterval(interval1)
  stopRotate1 = true
  if(stopRotate1 == true && stopRotate2 == true && stopRotate3 == true){
      console.log('win Condition')
    winCondition()
  }
}
function stop2(){
  console.log('')
  clearInterval(interval2)
  stopRotate2 = true
  if(stopRotate1 == true && stopRotate2 == true && stopRotate3 == true){
      console.log('win Condition')
    winCondition()
  }
}
function stop3(){
  clearInterval(interval3)
  stopRotate3 = true
  if(stopRotate1 == true && stopRotate2 == true && stopRotate3 == true){
    console.log('win Condition')
    winCondition()
  }
}

function winCondition(){
  if(reel1 == reel2 && reel1 == reel3){
    bank += pot
    pot = 0
    document.getElementById('pot').innerHTML = 'Pot: ' + pot
    document.getElementById('bank').innerHTML = 'Bank: ' + bank
    document.getElementById('msg').innerHTML = 'You win!'
  }else{
    pot = 0
    document.getElementById('pot').innerHTML = 'Pot: ' + pot
    document.getElementById('msg').innerHTML = 'Sorry, try again!'
  }
}

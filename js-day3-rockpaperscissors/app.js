
function play(playersChoice) {
  let computersChoice = 'rock'
  if (playersChoice === 'paper') {
    console.log('win'); alert('You Won!');
  } else if (playersChoice === computersChoice) {
    console.log('tie');
  } else { console.log('loser'); }
}
// function (playersChoice) {
// let computersChoice = 
// if(playersChoice === ComputersChoice){
//   console.log('tie');
// }else if  
// }


function changeImage(weaponChoice) {

  document.getElementById('rockimg').innerHTML = '<img src="the-rock-gif.gif" alt="rock" />'
}








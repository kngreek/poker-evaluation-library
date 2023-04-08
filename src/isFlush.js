const isFlush = (hand) => {
  let suits = [] ;

  for (let i = 0; i < hand.length; i++) {
    suits[i] = hand[i].slice(0, 1);
  }
  
  const groupS = suits.filter((group) => group === "S");
  const groupC = suits.filter((group) => group === "C");
  const groupH = suits.filter((group) => group === "H");
  const groupD = suits.filter((group) => group === "D");
  if (groupS.length === 5) {
    return true;
  } else if (groupC.length === 5) {
    return true;
  } else if (groupH.length === 5) {
    return true;
  } else if (groupD.length === 5) {
    return true;
  } else {
    return false ;
  }
}
// const isFlush = (hand)=>{
//   const suits = hand.map(card=>card.slice(0,1)) 
  
//   return suits.every(suit=>suit===suit[0])
// }

module.exports = { isFlush };

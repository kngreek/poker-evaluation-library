/** Should return a copy of the hand sorted */
const getSortedHand = (hand) => {

    hand.sort((cardA, cardB) => {
        const valueA = parseInt(cardA.slice(1)); 
        const valueB = parseInt(cardB.slice(1)); 
        return valueA - valueB; 
      });
      return hand;

};

module.exports = { getSortedHand };
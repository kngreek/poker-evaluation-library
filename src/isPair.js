const { grouping } = require('./grouping');
const isFourOfAKind = (groups) =>{
    const pairs = groups.reduce(
        (count, group) => count + (group === 2 ? 1 : 0),
        0
      );
      const three = groups.reduce(
        (count, group) => count + (group === 3 ? 1 : 0),
        0
      );
      if (pairs === 1)  return true ;
    }
    module.exports = { isFourOfAKind };
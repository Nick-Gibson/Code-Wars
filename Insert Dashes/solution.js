function insertDash(num) {
  newNum = num.toString().split('');
  forLength = newNum.length;
  x = 0;
  for(let i = 0; i < (forLength + x); i++) {
   if ((newNum[i] % 2 !== 0) && (newNum[i + 1] % 2 !== 0)) {
    i++
    x++
    newNum.splice(i, 0, '-');
   }
  }
if (newNum[(newNum.length - 1)] === '-') newNum.pop();
return newNum.join('');
};

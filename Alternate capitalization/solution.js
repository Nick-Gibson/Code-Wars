function capitalize(s){
  let input = s.split('');
  let returnArr = [];

  for(let i = 0; i < input.length; i += 2){
    input[i] = input[i].toUpperCase();
  }
  returnArr.push(input.join(''));

  for(let i = 0; i < input.length; i += 2){
    input[i] = input[i].toLowerCase();
  }

  for(let i = 1; i < input.length; i += 2){
    input[i] = input[i].toUpperCase();
    }
  returnArr.push(input.join(''));

  return returnArr;
}

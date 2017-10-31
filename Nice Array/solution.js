function isNice(arr){
  let test = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)){
      test.push(true)
    } else {
      test.push(false)
    }
  }
  console.log(test);
  if (test.length === 0){return false}
  if (test.includes(false)){
      return false;
    } else {
      return true;
    }
}

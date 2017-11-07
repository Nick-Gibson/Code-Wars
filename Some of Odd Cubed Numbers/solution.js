let cubeOdd = (arr) => {return arr.some(isNaN) ? undefined : arr.map(x => Math.pow(x, 3)).filter(x => x % 2 !== 0).reduce((a, b) => (a + b), 0)}

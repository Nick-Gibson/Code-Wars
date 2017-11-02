function formatWords(words){
  if (words === null){return ''};
  for (let i = words.length-1; i>=0; i--) {
    if (words[i] === '') {
        words.splice(i, 1);
    }
  }
  if (words.length === 0){return ''};
  if (words.length === 1){return words};

  let lastWord = words.pop();
  let secondWord = words.pop();
  words.push(`${secondWord} and ${lastWord}`);
  return words.join(', ');
}

var lengthOfLastWord = function(s) {
  let count = 0;

  for (let i = s.length - 1; i >= 0; i -= 1) {
    const current = s[i];
    const next = s[i - 1];

    if (current !== " ") {
      count += 1;
    }

    if ((current !== " " && next === " ") || !next) {
      return count;
    }
    
  }

  return count;
}

console.log(
  lengthOfLastWord("a   sd           ")
);
var isValid = function(s) {
  
  const matches = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    const currentBracket = s[i];

    const isClosing = matches[currentBracket];

    if (!isClosing) {
      stack.push(currentBracket);
    } else {
      const lastOpeningFromStack = stack[stack.length - 1];
      const currentBracketOpening = matches[currentBracket];

      if (lastOpeningFromStack === currentBracketOpening) {
        stack.pop();
      } else {
        return false
      }

    }
  }
  
  return stack.length === 0;
};

// console.log(isValid("{[()]}"))
// console.log(isValid("(]"))
// {[()]} stack && 


//[]{(})


// {]

// ( [ { } ) ]

// )({[]})

var isValid2 = function(s) {
  
  const matches = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  const stack = []; // openings array

  for (let i = 0; i < s.length; i += 1) {
    const currentBracket = s[i];

    let currentClosingBracket = matches[currentBracket];

    if (!currentClosingBracket) {
      // isOpening
      stack.push(currentBracket);
      console.log(currentBracket, "isOpening")
    } else {
      // isClosing
      const lastClosingFromStack = stack[stack.length - 1];
      console.log(lastClosingFromStack, "isClosing")
      if (lastClosingFromStack === currentClosingBracket) {
        stack.pop();
      } else {
        return false;
      }
    }
    console.log(stack)
  }
  
  return stack.length === 0;
};

console.log(isValid2("({)}"))
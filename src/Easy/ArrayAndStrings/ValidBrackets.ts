// Given a string, s, containing just open and close brackets
// return true if the input string is valid
// string is valid if open brackets are all closed by their same type

const isValidBrackets = (s: string): boolean => {
  const open = ["(", "{", "["];
  const closed = [")", "}", "]"];
  // init hashmap to lookup correct bracket type pairs
  // key `close bracket`, value: `corresponding open bracket`
  const closedToOpenMap: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  // init a stack to push open brackets onto
  const stack: string[] = [];
  // loop through s
  for (const bracket of s) {
    // if bracket is open bracket, push onto stack
    if (open.includes(bracket)) {
      stack.push(bracket);
    } else {
      // edge case: no open brackets on stack and theres a close bracket
      if (!stack.length) {
        return false;
      }
      // if bracket is close bracket, pop top of stack and check if open is of same type
      const lastOpen = stack.pop();
      // not same type, return false
      if (lastOpen !== closedToOpenMap[bracket]) {
        return false;
      }
    }
  }
  // loop finished, if stack is empty return true, else return false
  console.log("stack", stack);
  return stack.length === 0;
};

// test cases
console.log(isValidBrackets("()")); // true
console.log(isValidBrackets("()[]{}")); // true
console.log(isValidBrackets("(]")); // false

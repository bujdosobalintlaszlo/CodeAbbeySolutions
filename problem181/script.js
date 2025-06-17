const fs = require('fs');
fs.readFile('inp.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  ToClipBoard(ProcessData(data));
});
async function ToClipBoard(result){
    const clipboardy = await import('clipboardy');
    clipboardy.default.writeSync(result);
}
function ProcessData(data) {
  const items = data.split(' ');
  const stack = [];
  items.forEach(item => {
    if (isNumeric(item)) {
      stack.push(Number(item));
    } else {
      const operator = GetOperator(item);
      if (operator === "sqrt") {
        const a = stack.pop();
        stack.push(Math.trunc(Math.sqrt(a)));
      } else {
        const b = stack.pop();
        const a = stack.pop();
        switch (operator) {
          case '+':
            stack.push(a + b);
            break;
          case '-':
            stack.push(a - b);
            break;
          case '*':
            stack.push(a * b);
            break;
          case '/':
            stack.push(Math.trunc(a / b));
            break;
          case '%':
            stack.push(a % b);
            break;
          default:
            throw new Error(`Unknown operator: ${operator}`);
        }
      }
    }
  });
  return stack.pop();
}

function isNumeric(value) {
  return !isNaN(value - parseFloat(value));
}

function GetOperator(item) {
  switch (item) {
    case "add":
      return "+";
    case "sub":
      return "-";
    case "mul":
      return "*";
    case "div":
      return "/";
    case "mod":
      return "%";
    case "sqrt":
      return "sqrt";
    default:
      throw new Error(`Unknown token: ${item}`);
  }
}

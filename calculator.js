function add(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  return num1 / num2;
}

function power(num1, num2){
  return num1 ** num2;
}

function mod(num1, num2){
  return num1 % num2;
}

function sqrt(num1){
  return Math.sqrt(num1)
}


function calculate(expression) {
  const token = expression.split(" ")
  console.log(token)
  
  let num1 = Number(token[0])
  let operator = token[1]
  let num2 = Number(token[2]) || 0

if(token.length === 2){
  num1 = Number(token[1])
  operator = token[0]
}

  if(Number.isNaN(num1) || Number.isNaN(num2)){
    alert("Invalid")
    return
  }
// console.log(num1, operator, num2)

  if(operator === "+"){
    return add(num1, num2) 
  }
  else if(operator === "-"){
    return subtract(num1, num2)
  }
  else if(operator === "*"){
    return multiply(num1, num2)
  }
  else if(operator === "/"){
    return divide(num1, num2)
  }
  else if(operator === "^" || operator === "**"){
    return power(num1, num2)
  }
  else if(operator === "%"){
    return mod(num1, num2)
  }
  else if(operator === "sqrt"){
    return sqrt(num1)
  }
}

 
// calculate("2 + 3")









/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});

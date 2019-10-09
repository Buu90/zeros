module.exports = 
function zeros(expression) {
  const arrView = expression.split("*");
  let res = 1n;
  for (let i = 0; i < arrView.length; i++) {
    const element = arrView[i];
    const factVal = factCalc(element)

    res = res * factVal
  }

  return calcZeros(res)
}

function calcZeros(num) {
  const strNum = String(num)
  let count = 0
  for (let i = strNum.length-1; i > 0; i--) {
    const element = strNum[i];
    if (element === '0')
    count++
    else
    break
  }
  return count
}

function factCalc(str) {
  const exclamationIndex = str.indexOf("!");
  const elementMaxIndex = str.length - 1;
  const numStr = str.substring(0, exclamationIndex);
  const numb = BigInt(numStr)
  const isSingleFact = elementMaxIndex === exclamationIndex
  const result = isSingleFact ? sFact(numb) : sDoubleFact(numb)
  return result;
}

function sFact(num) {
  let rval = 1n;
  for (let i = 2n; i <= num; i++) rval = rval * i;
  return rval;
}

function isEven(num) {
  return num % 2n === 0n;
}

function sDoubleFact(num) {
  let rval = 1n;
  const firstValue = isEven(num) ? 2n : 1n;
  for (let i = firstValue; i <= num; i = i + 2n) rval = rval * i;
  return rval;
}

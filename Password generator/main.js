//*DOM elements
const resultEL = document.getElementById("result");
const uppercaseEL = document.getElementById("uppercase");
const lowercaseEL = document.getElementById("lowercase");
const numbersEL = document.getElementById("numbers");
const symbolsEL = document.getElementById("symbols");
const lengthEL = document.getElementById("length");
const generateEL = document.getElementById("generate");
const clippboardEL = document.getElementById("clippboard");

//* An object of the functions
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

//*Generate event listen
generateEL.addEventListener("click", function () {
  const length = +lengthEL.value; //* '+' or the unary operator converts length to a number

  //*checkboxes
  const hasLower = lowercaseEL.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumbers = numbersEL.checked;
  const hasSymbols = symbolsEL.checked;

  resultEl.innerText = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasNumbers,
    hasSymbols
  );
});

//*Generate Password
function generatePassword(length, lower, upper, numbers, symbols) {
  //*init pw var
  //*filter out unchecked boxes
  //*Loop over the lenngth for types
  //*add final pw to the pw var

  let generatedPassword = "";

  const typesCount = lower + upper + numbers + symbols;
  const typesArr = [lower, upper, numbers, symbols];
  console.log("typesArr: ", typesArr);
}

//*Generate functions

//!Use character codes to generate the laters and numbers
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//*string can be manupuplated like arrays in JS
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=/<>,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

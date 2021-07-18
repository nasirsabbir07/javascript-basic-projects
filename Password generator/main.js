//*DOM elements
const resultEL = document.getElementById("result");
const uppercaseEL = document.getElementById("uppercase");
const lowercaseEL = document.getElementById("lowercase");
const numbersEL = document.getElementById("numbers");
const symbolsEL = document.getElementById("symbols");
const lengthEL = document.getElementById("length");
const generateEL = document.getElementById("generate");
const clipboardEL = document.getElementById("clipboard");

//* An object of the functions
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

//*Generate event listen
generateEL.addEventListener("click", function () {
  const length = +lengthEL.value; //* '+' or the urnary operator converts length to a number

  //*checkboxes
  const hasLower = lowercaseEL.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumbers = numbersEL.checked;
  const hasSymbols = symbolsEL.checked;

  resultEL.innerText = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasNumbers,
    hasSymbols
  );
});

//*Copy Password to clipboard
clipboardEL.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  const password = resultEL.innerText;

  if (!password) {
    return;
  }

  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Password copied to clipboard");
});

//*Generate Password
function generatePassword(length, upper, lower, number, symbol) {
  //*init pw var
  //*filter out unchecked boxes
  //*Loop over the lenngth for types
  //*add final pw to the pw var

  let generatedPassword = "";

  const typesCount = upper + lower + number + symbol;
  // console.log("typesCount: ", typesCount);
  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  // console.log("typesArr: ", typesArr);

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      // console.log("funcName: ", funcName);
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
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

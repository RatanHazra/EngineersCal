const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const conversionType = document.getElementById("conversion-type");

const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const binaryToDecimal = (input) => {
  // Ensure input is a string to check binary validity
  if (/^[01]+$/.test(input)) {
    return parseInt(input, 2);
  } else {
    return "Invalid binary input";
  }
};

const checkUserInput = () => {
  const inputValue = numberInput.value.trim(); // Trim input to remove extra spaces

  if (!inputValue) {
    alert("Please provide a number.");
    return;
  }

  if (conversionType.value === "d2b") {
    const inputInt = parseInt(inputValue);
    if (isNaN(inputInt) || inputInt < 0) {
      alert("Please provide a valid decimal number greater than or equal to 0.");
      return;
    }
    result.textContent = decimalToBinary(inputInt);
    numberInput.value = "";
  } else if (conversionType.value === "b2d") {
    if (!/^[01]+$/.test(inputValue)) {
      alert("Please provide a valid binary number (only 0s and 1s).");
      return;
    }
    result.textContent = binaryToDecimal(inputValue);
    numberInput.value = "";
  }
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

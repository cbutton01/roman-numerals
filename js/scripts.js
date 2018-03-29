function numerals (input){
  if (input == 1){
    return 'I';

  } else if (input == 5) {
    return 'V';
  } else if (input == 10){
    return 'X';
  } else if (input == 50){
    return 'L';
  } else if (input == 100){
    return 'C';
  } else if (input == 500){
    return 'D';
  } else if (input == 1000){
    return 'M';
  } else {
    return 'N/A';
  }
}


function numeralIValue (number) {
  var finalOutput = "";
  for (var i = 1; i <= number ; i++) {
    finalOutput += "I";
  }
  return finalOutput;
}

function numeralXValue (number){
  debugger;
  var finalOutput = "";
  numberOfX = number / 10;
  for (var i = 1; i <= numberOfX; i++) {
    finalOutput += "X";
  }

  return finalOutput;
}

function numeralCValue (number){
  var finalOutput = "";
  numberOfC = number / 100;
  for (var i = 1; i <= numberOfC; i++) {
    finalOutput += "C";
  }

  return finalOutput;
}

function numeralMValue (number){
  var finalOutput = "";
  numberOfM = number / 1000;
  for (var i = 1; i <= numberOfM; i++) {
    finalOutput += "M";
  }
  return finalOutput;
}

function numeralIV (number){
  if (number === 4){
    return "IV";
  }
}

function numeralIX (number){
  if (number === 9){
    return "IX";
  }
}

function finalResult (number){
  var finalOutput = ""
  if (number >= 1 && number < 4){
    finalOutput += numeralIValue(number);
    return finalOutput;
  } else if (number >= 6 && number <= 9) {
      finalOutput = "V";
      var currentNumber = number - 5;
      var sixToEight = finalOutput + numeralIValue(currentNumber);
      return sixToEight;
    }
  }

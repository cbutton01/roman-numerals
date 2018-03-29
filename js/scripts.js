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
function moreThanTen (number){
  var finalOutput = ""
  if (number > 10 && number <= 13){
    finalOutput = "X"
    var currentNumber = number - 10;
    var elevenToThirteen = finalOutput + numeralIValue(currentNumber);
    return elevenToThirteen;
  } else if (number === 14){
    finalOutput = "X"
    var currentNumber = number - 10;
    var fourteen = finalOutput + numeralIV(currentNumber);
    return fourteen;
  } else if (number === 15){
    finalOutput = "X"
    var currentNumber = number - 10;
    var fifteen = finalOutput + numerals(currentNumber);
    return fifteen;
  } else if (number >= 16 && number < 19){
    finalOutput = "XV";
    var currentNumber = number - 15;
    var sixteenToEighteen = finalOutput + numeralIValue(currentNumber);
    return sixteenToEighteen
  }
}


function finalResult (number){
  var finalOutput = ""
  var arrayOfNumbers = thisResult(number);
//this loop isn't finished.
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    if(arrayOfNumbers.cha)
  }
  // if (number >= 1 && number < 4){
  //   finalOutput += numeralIValue(number);
  //   return finalOutput;
  // } else if (number >= 6 && number <= 9) {
  //     finalOutput = "V";
  //     var currentNumber = number - 5;
  //     var sixToEight = finalOutput + numeralIValue(currentNumber);
  //     return sixToEight;
  //   }
  }

function thisResult (number) {
  var digits = (''+number).split('');
  return digits;
}

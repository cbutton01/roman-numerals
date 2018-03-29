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

function convertToRomanNumerals(num) {

  // Create the master roman numeral mapping array
  var romanNumeralsMapArr =
  [
    [1,'I'],[2,'II'],[3,'III'],[4,'IV'],[5,'V'],[6,'VI'],[7,'VII'],[8,'VIII'],[9,'IX'],
    [10,'X'],[20,'XX'],[30,'XXX'],[40,'XL'],[50,'L'],[60,'LX'],[70,'LXX'],[80,'LXXX'],[90,'XC'],
    [100,'C'],[200,'CC'],[300,'CCC'],[400,'CD'],[500,'D'],[600,'DC'],[700,'DCC'],[800,'DCCC'],[900,'CM'],
    [1000,'M'],[2000,'MM'],[3000,'MMM'],[4000,'MMMM']
  ];

  // This will hold an array with the completed roman numerals conversion values
  var resultArr;

  // This array will hold the coverted thousands, hundreds, tens, and ones values
  // so we can map through and do the roman numeral lookups
  var thtoReadyforMapArr = [];

  // Convert to 1000s
  var numThousands = Math.floor(num / 1000) * 1000;
  // Convert to 100s
  var numHundreds = Math.floor((num % 1000) / 100) * 100;
  // Convert to 10s
  var numTens = Math.floor((num % 100) / 10) * 10;
  // Convert to 1s
  var numOnes = num % 10;

  // Build the seed array and prepare for mapping and roman numeral lookup
  thtoReadyforMapArr.push(numThousands,numHundreds,numTens,numOnes);

  // Start mapping through the conversion values and lookup the roman numeral equivalent
  resultArr = thtoReadyforMapArr.map(function(lookupValue) {

    // Temp var to hold roman numeral lookup result
    var tempArr;

    // Only process lookup if there was a conversion result
    if (lookupValue !== 0) {

      // Filter through the roman numerals map array and find the exact roman numeral
      tempArr = romanNumeralsMapArr.filter(function(value) {
        return (value[0] === lookupValue);
      });

      // You found the roman numeral conversion so return the second dimension value
      // from the roman numberal mapping array
      return tempArr[0][1];

    } else {

      // No thto conversion found so return an empty value and move to the next lookup
      return tempArr;
    }
  });

  // Done - convert the result array to a string and return
  return resultArr.join('');

}

// Test the function
convertToRomanNumerals(325);

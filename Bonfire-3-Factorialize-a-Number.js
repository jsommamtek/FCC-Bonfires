function factorialize(num) {
  
  var product = 1;
  
  for(var i = 0; i < num - 1; i++){

    product = product * (i + 2);
  
  };
  
  return num = product;

};

// Make sure you have JQuery lib ref
// Run some Tests in CodePen
$("#myDiv").html(factorialize(0) + "<br />" +
                  factorialize(5) + "<br />" +
                  factorialize(10) + "<br />" +
                  factorialize(20));

function reverseString(str) {
  
  return str.split('').reverse().join('');

}

// Make sure you have JQuery lib ref
// Run some Tests in CodePen
$("#myDiv").html(reverseString('howdy') + "<br />" +            
                  reverseString("hello") + "<br />" + 
                  reverseString("Greetings from Earth"));
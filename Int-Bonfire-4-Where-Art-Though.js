function where(collection, source) {

  var arr = [];

   /*
   ** 1. Loop through the objects passed inthe collection
   ** 2. Search for matching property from source object
   ** 3. Return array of matching objects
   */

   // Init objFound var used to identify object that matches source
   var objFound = false;

   // Loop through collection of objects
   collection.map(function (value) {

      // Loop through property(s) of the source and search in collection objects for matching properties
      for (var prop in source) {
         
         if (value.hasOwnProperty(prop) && value[prop] === source[prop])  {

            // Property match found
            objFound = true;

         } else {

            // Property match not found
            objFound = false;
         }
      }

      // All properties in source object found in collection object - add to result
      if (objFound) {
         arr.push(value);
      }

   });

  // Return final array of matching objects
  return arr;
}
// Test 1
// var result = where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Test 2
// var result = where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });

// Test 3
// var result = where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

// Test 4
var result =  where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });

console.log(result);

// Make sure you have JQuery lib ref
// Tested in CodePen
$("#myDiv").html(result);

/*
// Test 1
collection (array - obj x3) = [
   { first: "Romeo", last: "Montague" },
   { first: "Mercutio", last: null },
   { first: "Tybalt", last: "Capulet" }
   ]
source (object - obj x1) = { last: "Capulet" }

result (array - obj x1)  = [
   { first: "Tybalt", last: "Capulet" }
   ]

// Test 2
collection (array - obj x3) = [
   { "a": 1 },
   { "a": 1 },
   { "a": 1, "b": 2 }
   ]
source (object - obj x1) = { "a": 1 }

result (array - obj x3) = [
   { "a": 1 },
   { "a": 1 },
   { "a": 1, "b": 2 }
   ]

// Test 3
collection (array - obj x3) = [
   { "a": 1, "b": 2 },
   { "a": 1 },
   { "a": 1, "b": 2, "c": 2 }
   ]
source (object - obj x1) = { "a": 1, "b": 2 }

result (array - obj x2)  = [
   { "a": 1, "b": 2 },
   { "a": 1, "b": 2, "c": 2 }
   ]

// Test 4
collection (array - obj x3) [
   { "a": 1, "b": 2 },
   { "a": 1 },
   { "a": 1, "b": 2, "c": 2 }
   ]
source (object - obj x1) = { "a": 1, "c": 2 }

result (array - obj x1) = [
   { "a": 1, "b": 2, "c": 2 }
   ]
*/
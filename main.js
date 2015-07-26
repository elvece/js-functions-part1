//example
function test(str) {
  return "test" + str;
}

console.log(test("ing"));

//problem 1
function sum(num1,num2){
  return num1 + num2;
}

console.log(sum(1,2));

//problem 2
function isEqual(foo, bar) {
  if (foo === bar){
  return true
 }
  else { return false;
 }
};

console.log(isEqual("no","yes"));

//problem 3

function discountPercentage(amount, discount) {
  var totalDiscount= amount * (discount*.01);
  if (totalDiscount > 100 || totalDiscount < 0) {
    alert("Discount is absurd!");
  }   return "$" + totalDiscount;
}
console.log(discountPercentage(100, 25));

//problem 4 string to array and then do for loop on array to call first element in array
function stringCapitalize(string){
  var intoArray = string.split(" ");
  for (var i = 0; i < intoArray.length; i++){
    var j = intoArray[i].charAt(0).toUpperCase();
    intoArray[i] = j + intoArray[i].substr(1);
  } return intoArray.join(" ");
}

console.log(stringCapitalize("lucy victoria cifferello"));

//problem 5
function evenNumber() {
  var random = Math.floor(Math.random() * 100);
  for (var i = 0; i <= random; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
console.log(evenNumber());

//problem 6
function isDivisible (one, two) {
  if (one % two === 0){
    return true;
  }
  else {
    return false;
  }
}
console.log(isDivisible(4,2));

//problem 7
function oddNumbers(random) {
  var resultsArray= [];

  if (random > 40)  {
    for (var i = 40; i <= random; i++) {
      if (i % 2 !== 0) {
         resultsArray.push(i);
      }
    }
  }

  else {
      for (var j = 0; j <= random; j++) {
        if (j % 2 !== 0) {
        resultsArray.push(j);
      }
    }
  }
      return resultsArray;

}
var randomNum = Math.floor(Math.random() * 100);
console.log(oddNumbers(randomNum));

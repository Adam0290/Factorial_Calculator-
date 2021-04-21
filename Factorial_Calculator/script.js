// Function Factorial //

function factorial() {
let fact = 1;
let n = Number.parseInt(document.getElementById("op").value); // initializes N //
for (; n > 0; n--) { // When N becomes 1 the loop will stop //
fact *= n;  // fact = fact * i; ...... The same as as  fact *= i; //
console.log(fact);
}
document.getElementById("res").value = fact;
}
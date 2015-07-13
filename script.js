var odd_row = " # # # #\n";
var even_row = "# # # # \n";
var size = 8;
var result = "";

for (var i = 0; i < size; i++) {
  if (i % 2 === 0)
    result += even_row;
  else {
    result += odd_row;
  }
}

console.log(result);

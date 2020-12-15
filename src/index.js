var A = [];
var res = 1;

fetch("./src/text-input.txt")
  .then((response) => response.text())
  .then((data) => {
    // Do something with your data
    A = data.split(",").map(function (item) {
      return parseInt(item.trim());
    });
    console.log(solution(A));
  });

function solution(A) {
  for (var i = 0; i < A.length; i++) {
    if (A.includes(res)) {
      res++;
    }
  }
  return res;
}

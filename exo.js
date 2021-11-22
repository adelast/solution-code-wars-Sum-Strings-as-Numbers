// Given the string representations of two integers,
// return the string representation of the sum of those integers.

function sumStrings(a, b) {
  a = a ? a : "0";
  b = b ? b : "0";

  var taba = a.split("");
  var tabb = b.split("");

  taba = taba.map((x) => parseInt(x));
  tabb = tabb.map((x) => parseInt(x));
  var tabc = [];
  var tabd = [];

  if (taba.length < tabb.length) {
    tabc = taba;
    taba = tabb;
    tabb = tabc;
  }

  for (let i = tabb.length; i < taba.length + 1; i++) {
    tabb.unshift(0);
  }
  taba.unshift(0);

  for (var i = taba.length - 1; i > -1; i--) {
    var x = taba[i] + tabb[i];

    if (i == 0) {
      tabd.unshift(x);
    } else {
      if (x >= 10) {
        tabd.unshift(x % 10);
        taba[i - 1] = taba[i - 1] + 1;
      } else {
        tabd.unshift(x);
      }
    }
  }

  while (tabd[0] == 0) {
    tabd.splice(0, 1);
  }

  return tabd.join("").toString();
}

console.log(sumStrings("800", "9567"));

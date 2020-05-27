var nombre = process.argv.slice(2);
var nomb = nombre.map(Number);
var temp = [];
var cond = true 
while (cond) {
  cond = false;

var i = 0;
while (i < nomb.length - 1) {
  if (nomb[i] < nomb[i + 1 ]) {
    temp = nomb[i]
    nomb[i] = nomb[i + 1]
    nomb[i + 1] = temp
    cond = false;

  }
  i++
 }
}

console.log(nomb);
// encore quelque bug mais le resultat demandé est la ...


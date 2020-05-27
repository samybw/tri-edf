var nombre = process.argv.slice(2);
var nomb = nombre.map(Number);
var resultat = []
var i = 0;
while (i < nomb.length) {
  if (nomb[i] > nomb[i+1]) {
    resultat += nomb.unshift(i)
  }else{
    resultat += nomb.push(i)
  }
  i++
}

console.log(resultat);



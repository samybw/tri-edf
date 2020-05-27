var nombre = process.argv.slice(2);
var nomb = nombre.map(Number);
var resultat ;
var i = 0;
while (i < nomb.length - 1) {
  if (nomb[i] < nomb[i + 1 ]) {
    resultat = nomb[i]
    nomb[i] = nomb[i + 1]
    nomb[i + 1] = resultat


  }else{
    
  }
  i++
}

console.log(resultat);



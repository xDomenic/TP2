// etapes :
// - Cree la fontion
// - apeler l'element qu'on attendre de changer
// - consoler loger la veur de l'input
// - link the function to element element event

function handleChange() {
  // lesdecalaration ( appelation de nos html elements ) qu'on besoin d'utiliser
  const input = document.querySelector("#input1").value;
  const baliseP = document.querySelector("#id3");

  // tu vas me detecter si dans la valeur de l'input il exist "dominic"
  if (input.includes("dominic")) {
    // tu va me changer le background
    baliseP.style.backgroundColor = "yellow";
    baliseP.innerHTML = "<h1> dominic is available please wait </h1>";
  } else {
    baliseP.style.backgroundColor = "unset";
    baliseP.innerHTML = "<h1>dominic is not available</h1>";
  }
  return "hay";
}

// on affecter a variableFunction la fonction handlechage
const variableFunction = handleChange;
// on affecter a variableFunction la valuer de fonction handlechage
const variableFunctionn = handleChange();

console.log(variableFunction); // ca va retourner toute la fonction
console.log(variableFunctionn); // hay

// const handleChange = () => {
// };

// // old mthode
// var status = "";
// const age = 15;
// if (age > 18) {
//   status = "majeur";
// } else {
//   status = "mineur";
// }
// // new methode
// status = age > 18 ? "majeur" : "mineur";

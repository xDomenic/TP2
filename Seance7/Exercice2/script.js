const DATA = [
  { firstname: "ahmed", lastname : "ferah" },
  { firstname: "dominic", lastname : "pasquarelli" },
  { firstname: "majdi", lastname : "hellal" },
];

// JSX
// JavaScriptXtended

const list_filer = () => {
  const listElement = document.querySelector("#list");
  listElement.innerHTML = "";
  DATA.map((e) => {
    listElement.innerHTML += `<li> ${e.firstname} ${e.lastname}</li>`;
  });
};

// first time when we excute the script
list_filer();

// Methode 2
/*
const handleClick = () => {
  const inputName = document.querySelector("#nameEntred").value;
  const inputlName = document.querySelector("#lNameEntred").value;
  const newPerson = {
    firstname: inputName, lastname : inputlName
  };
  DATA.push(newPerson);
  list_filer();
};
*/

 // Methode 1
 const handleClick = () => {
   // lesdecalaration ( appelation de nos html elements ) qu'on besoin d'utiliser
   const inputName = document.querySelector("#nameEntred").value;
   const inputlName = document.querySelector("#lNameEntred").value;
   const listElement = document.querySelector("#list");

  //  ajout de html
   listElement.innerHTML += `<li>${inputName} ${inputlName}</li>`;
 };

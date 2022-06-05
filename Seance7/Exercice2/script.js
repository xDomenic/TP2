const DATA = [
  { firstname: "ahmed" },
  { firstname: "dominic" },
  { firstname: "majdi" },
];

// JSX
// JavaScriptXtended

const list_filer = () => {
  const listElement = document.querySelector("#list");
  listElement.innerHTML = "";
  DATA.map((e) => {
    listElement.innerHTML += `<li> ${e.firstname} </li>`;
  });
};

// first time when we excute the script
list_filer();

// Methode 2
const handleClick = () => {
  const inputName = document.querySelector("#nameEntred").value;
  const newPerson = {
    firstname: inputName,
  };
  DATA.push(newPerson);
  list_filer();
};

// Methode 1
// const handleClick = () => {
//   // lesdecalaration ( appelation de nos html elements ) qu'on besoin d'utiliser
//   const inputName = document.querySelector("#nameEntred").value;
//   const listElement = document.querySelector("#list");

//   // ajout de html
//   listElement.innerHTML += `<li>${inputName}</li>`;
// };

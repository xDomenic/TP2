//Excercice 1

const pers = [
  { name: "Tom", lastName: "Hank", age: 20 },
  { name: "Jerry", lastName: "Joe", age: 15 },
  { name: "Bart", lastName: "Simpson", age: 55 },
  { name: "Daniel", lastName: "Blue", age: 12 },
];

const guestList = pers
  .filter((e) => e.age >= 18)
  .map((e) => ({ name: e?.name, age: e?.age }));

console.log(guestList);

const newListWithStatus = pers.map((e) => {
  const status = "";
  if (e?.age >= 18) {
    status = "majeur";
  } else {
    status = "mineur";
  }
  return { ...e, status };
});

// excercice 2
/*
const str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi';
    const str1separated = str1
    .split ('-')
    .map (e =>({name : e}))
    console.log (str1separated);
*/

//excercice 3

// Corigé Execerice 2

const str1separated = str1.split("-").map((e) => {
  // valuer de e "nom&prenom"
  const list_firstname_lastname = e.split("&"); // valeur [ nom , prenom ]

  return {
    firstname: list_firstname_lastname[0],
    lastname: list_firstname_lastname[1],
  };
});

// Corige exercice 3
const users = [
  { name: "sarah", comment: "j'aime ce poste <3" },
  { name: "monya", comment: "le poste est null :( " },
  { name: "carlos", comment: "salut l'algérie" },
];

// Old Methode
const newFormatedUserss = users.map((e) => {
  let state = "";
  if (e.comment.includes("<3")) {
    state = "heureux";
  } else if (e.comment.includes(":(")) {
    state = "triste";
  } else {
    state = "neutre";
  }
  return { name: e.name, etat: state };
});

// Methode Moderne
const newFormatedUsers = users.map((e) => ({
  name: e.name,
  etat: e.comment.includes("<3")
    ? "heureux"
    : e.comment.includes(":(")
    ? "triste"
    : "neutre",
}));

// Return Feature
const aaa = [{ name: "ahmed" }, { name: "domninc" }];

// Optimal Methode
aaa.map((e) => ({ namee: e.name + "X" }));
// CLassic Methode
aaa.map((e) => {
  return { namee: e.name + "X" };
});

//
const dom = () => {
  const a = "NAME";
};
dom(); // undefined

const domm = () => {
  const a = "NAME";
  return a;
};
domm(); // "NAME"

const dommm = () => "NAME";
dommm(); // "NAME"

// Corige Exercice 4
const etudiants = [
  { name: "sarah", note: undefined },
  { name: "monya", note: 7 },
  { name: "carlos", note: 15 },
  { name: "fadhel", note: 18 },
  { name: "dominic", note: 20 },
];

const list_etudiant_nom_eliminé = etudiants.filter((e) => e.note); // Filtrage de note cbon

const moyenne =
  list_etudiant_nom_eliminé.reduce((valueInitial, e) => {
    return valueInitial + e.note;
  }, 0) / list_etudiant_nom_eliminé.length;

const Resultat = list_etudiant_nom_eliminé.map((e) => ({
  ...e,
  mention:
    e.note > moyenne
      ? "bien"
      : e.note.toFixed() == moyenne.toFixed()
      ? "juste moyenne"
      : "passable",
}));

console.log("CA MERCHE");

const name = "Dominic";
const f1 = "nimportequio";

// console.log("je m'appele" + " " + name);

const specialString = ` je m'appele ${name} `;
// console.log(specialString);

// function
function getName(name) {
  return "Mon nom est " + name;
}

// const getName = (name) => {
//   console.log("a");
//   console.log("B");
//   return "Mon nom est " + name;
// };

const nimportequio = getName;

// nimportequio("Dominic");

// const getNameee = (name) => 'Mon nom est ' + name;
// // more more modern
// const getNameeee = (name) => `Mon nom est ${name}`;

//--------------- Difference entre variable et function ---------------- //

const undeuxtrois = () => {
  return 1 + 2 + 3;
};
// Exemple 1
const res = undeuxtrois(); // on la active donc la variable res elle va rescevoir le RESULTAT DE LA FONCTION
// console.log(res); // 6

// Exemple 2
const res2 = undeuxtrois; // on la active donc la variable res elle va rescevoir la VALEUR
// console.log(res2); // () => { return 1 + 2 + 3; }

//--------------- var let const ---------------- //

function nameee() {
  let a = "valeur1";
  var ahmed = "valeur2";
}
nameee();

// OBJECT

// MEthode de get data
// Exemple 1
const a1 = {
  name: "dominic",
  lastname: "junior",
};
// Exemple 2
const a2 = {
  name: "dominic",
  lastname: "junior",
};

const list = ["ahmed", { name: "ahmed" }, 4, true];

const objectt = {
  key1: "efsf",
  key2: "valye2",
  key3: "valye3",
  key4: "valye4",
  key5: 3,
  123: "chepaquoi",
};

function GetMeThis(anyKey) {
  return objectt[anyKey];
}
var fieldtoget = 123;
GetMeThis(fieldtoget); // 3

const ReturnLastnameORname = (field) => {
  console.log(a2[field]);
};

ReturnLastnameORname("name");

// 1 methode a2.lastname
// 2 methode a2['lastname']

// nested Object

const adresse = {
  rue: "rue qsdqsd",
  bloc: {
    etage: 1,
    appartement: "BG",
    object2: {
      a: "ahahaj",
      b: "jnjnkjn",
    },
  },
};

// Sction technique of object

// First Methode Single
const { rue } = adresse;
// First Methode double nested object
const {
  bloc: { etage },
} = adresse;
// THird Methode TRiplle nested object
const {
  bloc: {
    appartement,
    object2: { b },
  },
} = adresse;

// List of object
const listofobject = [
  { name: "dom", lname: "pas", age: 40 },
  { name: "ahmed" },
  { name: "majdi" },
];

const a = {
  name: "ahmed", // key : valeur
  lastname: "ferah",
};
const bb = {
  age: "23",
};

const ab = {
  age: "bb.age",
  lname: "a.lastname",
  name: "a.name",
};
// Firs Methode OLD ONE
ab.age = "bb.age";
ab.lname = "a.lastname";
ab.name = "a.name";
// Second Methode Modern ( Spread operator )

const ab2 = {
  ...a,
  ...bb,
};
const aarrya1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array1et2 = [...aarrya1, ...array2];

const objectArray = {
  ...array1et2,
};
// objectArray  {
// 0 :1,
// 1 :2,
// 2 : 3
// }

const lsit = [
  // t'a qu amettre les valeur et puis les appeler avec leur index
  1, // 0
  { name: "ahmed" }, // 1
  "ahmed", // 2
  true, // 3
];
lsit[2];

const object = {
  // il necesiite une cle pour etre appele
  number: 1,
  identity: { name: "ahmed" },
  lastname: "ahmed",
  status: true,
};

console.log(listofobject[0].lname);

const people = [
  { firstname: "ahmed", lastname: "ferah" },
  { firstname: "dominic", lastname: "paraqualli" },
  { firstname: "majdi", lastname: "hellal" },
];

persons.filter((e) => {
  // traitement
  // traiteent
  if (e.age > 17) {
    return true;
  } else {
    return false;
  }
});

persons.filter((e) => e.age > 17);

// console.log(a1.name, a1["lastname"]);

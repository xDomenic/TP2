const persons = [
  { name: "MONCEF", age: 13 },
  { name: "BAHIJA", age: 23 },
  { name: "ALA", age: 18 },
];
const listoffood = [
  { name: "pizza" },
  { name: "hamburger" },
  { name: "salade" },
];
const people = [
  { firstname: "ahmed", lastname: "ferah" },
  { firstname: "dominic", lastname: "paraqualli" },
  { firstname: "majdi", lastname: "hellal" },
];

persons.filter((e) => {
  if (e.age > 17) {
    return true;
  } else {
    return false;
  }
});

// .forEach
const listoffood2 = listoffood.forEach((e) => (e.cle = "value"));
listoffood.forEach(function (e) {
  e.newField = "newValue";
});
listoffood.forEach((params) => console.log(params.name + "d"));

// .map
people.map((e) => ({ ...e, length: e.firstname.length }));
people.map((e) => e.lastname.length);
const peopleFormated = people.map((e) => ({
  ...e,
  fullName: `${e.firstname} ${e.lastname}`,
}));
listoffood.map((e) => ({ name2: e.name, oldName: e.name }));
listoffood.map((e) => ({ newField: e.name }));
// .filter
people.filter((e) => e.firstname === "dominic");
persons.filter((e) => {
  // traitement
  // traiteent
  if (e.age > 17) {
    return true;
  } else {
    return false;
  }
});
//   .reduce
// the lame methode
let counter = 0;
[1, 2, 2, 5]
  .forEach((e) => (counter += e))
  [
    // the modern methode
    (1, 2, 2, 5)
  ].reduce((total, e) => {
    return total + 1; // cette valeur de retour va etre la valeur total pour la suivante
  }, 2);




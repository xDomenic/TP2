
//Excercice 1

const pers = [
    { name: "Tom", lastName: "Hank", age: 20 },
    { name: "Jerry", lastName: "Joe", age: 15 },
    { name: "Bart", lastName: "Simpson", age: 55 },
    { name: "Daniel", lastName: "Blue", age: 12 }
]


const guestList = pers
    .filter(e => e.age >= 18)
    .map(e => ({ invited: `${e.name} ${e.lastName} ` }))

console.log(guestList);



// excercice 2
/*
const str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi';
    const str1separated = str1
    .split ('-')
    .map (e =>({name : e}))
    console.log (str1separated);
*/


//excercice 3

const users = [
    { name: "sarah", comment: "j'aime ce poste <3" },
    { name: "monya", comment: "le poste est null :( " },
    { name: "carlos", comment: "salut l'algérie" }
]








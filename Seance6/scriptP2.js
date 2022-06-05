
//Ex 1
/*
const pers = [
    { name: "Tom", lastName: "Hank", age: 20 },
    { name: "Jerry", lastName: "Joe", age: 15 },
    { name: "Bart", lastName: "Simpson", age: 55 },
    { name: "Daniel", lastName: "Blue", age: 12 },
];

const majMin = pers.map(e => ({ ...e, staus: e > 17 ? 'majeur' : 'mineur' }))
console.log(majMin)

const majMinName = pers.map(e => ({ ...e, status: e >= 18 ? 'majeur' : 'mineur', fullName: `${e.lastName} ${e.name}` }))
console.log(majMinName)
*/

// Ex2
/*
const str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi';
const str1separated = str1.split ("-")
console.log (str1separated)

const fName_lName = (str1separated[0].split("&")),(str1separated,split[1] ("&"))
console.log(fName_lName)
*/

//Ex 2 try 2
const str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi';

const names = str1
    .split("-")
    .map (e=>{
        const listFnameLname = e.split ("&")
        return ({firstName : listFnameLname[0], lastName : listFnameLname[1]})

    })
    console.log(names);
    

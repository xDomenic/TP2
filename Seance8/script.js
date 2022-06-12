const getText = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // on va prentendre que la requete va pre,dre 2 second
      // retourner la veur "DOMINIC"
      const obj = { name: "DOMINIC" }; // result
      resolve(obj);
    }, 2000);
  });
};

// First Method ti wait DATA
// Async / Await Methode
const PoliteFunction = async () => {
  const variable1 = await getText(); // attend la valeur
  console.log(
    "in our case we gonan wait for the function to complete then we gonna console log"
  );

  console.log(variable1); //
};

// Second Methode to wait DATA
// .then()
// Async / Await Methode
const PoliteFunctionn = () => {
  // ici le traitement
  getText().then((result) => {
    console.log({ result });
  });
  console.log("HELLO i am showed before the response is returned");
};
// PoliteFunction();

// Third Methode to wait DATA
// callback
const getTextWithCallback = (id, callback) => {
  // traitement ici
  setTimeout(() => {
    // on va prentendre que la requete va pre,dre 2 second
    // retourner la veur "DOMINIC"
    const obj = null; // result
    if (obj === null) {
      callback(null, "ERREUR");
    } else {
      callback(obj, null);
    }
  }, 2000);
};

// les parametre qui vont etre capter ( result + error )
// sont les meme quand on passer a callback(ici , et ici) dans la function getTextWithCallback()
// getTextWithCallback("3", (result, error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log({ result });
//   }
// });

// Methode 1
const getTodoWithId = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => resolve(json));
  });
};
// Methode iwth callback
const getTodoWithIdCallback = (id, callback) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
    .then((json) => callback(json));
};

const display = () => {
  //   getTodoWithId("5").then((result) => {
  //     console.log(result);
  //   });
  console.log("heloo am not waiting for anyone");
  getTodoWithIdCallback("9", (json) => {
    console.log({ json }, "with callback");
  });
};
display();

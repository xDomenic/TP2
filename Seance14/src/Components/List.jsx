import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListPeople = [
  { name: 'ahmed', age: 43 },
  { name: 'Dom', age: 3 },
  { name: 'Majdi', age: 44 },
  { name: 'Johanne', age: 12 },
];

const getTodos = async (userId) => {
  const resposne = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  );
  return resposne.data;
};

export default function List() {
  const [listPeaople, setListPeople] = useState(ListPeople);
  const [name, setname] = useState('');
  const [age, setage] = useState(0);

  const [userID, setuserID] = useState(1);

  // Cycle Methode
  //   Affichage
  // Execution du code qui se trouve dans useEffect
  // Reglage des donne autrement : set the states
  useEffect(
    //  PARAM 1
    // ca sera une fonction qui contiendra tout le traitement X
    () => {
      const gg = async () => {
        console.log('USERID CHNALGED');
        const todos = await getTodos(userID);
        console.log(todos);
        const formatedList = todos.map((e) => ({
          name: e.title,
          age: e.userId,
        }));
        setListPeople(formatedList);
      };
      gg();
    },
    //  PARAM 2
    // ca sera une list des valeur que DES qu'il change on refait le traitemnt X

    [userID]
  );

  return (
    <div>
      <p>
        {' '}
        Je m'appele <b>{name}</b> et j'ai <b>{age}</b> ans{' '}
      </p>
      <input
        placeholder='name'
        onChange={(event) => {
          const n = event.target.value;
          setname(n);
        }}
        type='text'
      />
      <input
        placeholder='age'
        onChange={(event) => {
          const a = event.target.value;
          setage(a);
        }}
        type='number'
      />
      <button
        onClick={() => {
          // traitement
          const newPerson = {
            name: name,
            age: age,
          };
          setListPeople([newPerson, ...listPeaople]);
        }}>
        Ajouter
      </button>

      <h1> Reactive Input </h1>
      <select
        onChange={(e) => {
          setuserID(e.target.value);
        }}>
        {[...new Array(10)].map((e, i) => (
          <option value={i + 1}>{i + 1}</option>
        ))}
      </select>
      <ul>
        {listPeaople.map((people) => {
          return (
            <li>
              {' '}
              Name :<b>{people.name}</b> Age :{' '}
              <b>{people.age}</b>{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Async
// Quand est ce que on met Async
// OU ?

// Toute les chose qui prend du temps a revenir ou bien de retourner de la DATA ;
// il fuat bien les attendre
// Comment on les attend ?
// il y'a deux facons
// 1
// GetData().then( response => console.log(response) )
// const response = await GetData() ;
// tous les trairemtn apres le await ne vont plus marche QUE lorsque GetData a terminé

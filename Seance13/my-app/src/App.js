import logo from './logo.svg';
import './App.css';

import { DomComponent1 as Dom1 } from './Components/DomComponent'
import ABC from './Components/DomComponent'
import { default as ABCC } from './Components/DomComponent'
import ABBC, { DomComponent1 as Dom2 } from './Components/DomComponent'
import { useState } from 'react';






function App()
{
  // initial useState
  const [valeur, setValeur] = useState("NAME 1");

  // setValeur("newValue") ICI ON A ACTIVE UNE FONCTION ;
  // useState("NAME 1"); va retourner une nouvelle [valeur, setValeur] ;

  const changeValue = (newname) =>
  {
    setValeur(newname);
  }

  const list = ["a", "b", "c"];

  return (
    <div className="App">
      <input type="text" onKeyDown={(event) => changeValue(event.target.value)} />
      <Dom2 name={valeur} keyy="value" lastname="DOE" otherthing="La vrai vlauer" /> {/* PROPS  */}
      {/* keyy="value" est un PROP  */}
      <ABBC />
      <ul>
        {list.map((e) =>
        {
          return <li> {e} </li>
        })}


      </ul>
      <button onClick={() =>
      {
        changeValue()
      }} >CHANGE</button>
    </div>
  );
}

export default App;

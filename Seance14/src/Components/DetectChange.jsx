import React from 'react';
import { DomComponent1 as Dom1 } from './Components/DomComponent';
import ABC from './Components/DomComponent';
import { default as ABCC } from './Components/DomComponent';
import ABBC, {
  DomComponent1 as Dom2,
} from './Components/DomComponent';
import { useState } from 'react';
import List from './Components/List';

export default function DetectChange() {
  const [valeur, setValeur] = useState('NAME 1');

  const changeValue = (newname) => {
    setValeur(newname);
  };
  const list = ['a', 'b', 'c'];

  return (
    <div>
      <input
        type='text'
        onKeyDown={(event) =>
          changeValue(event.target.value)
        }
      />
      <Dom2
        name={valeur}
        keyy='value'
        lastname='DOE'
        otherthing='La vrai vlauer'
      />{' '}
      {/* PROPS  */}
      {/* keyy="value" est un PROP  */}
      <ABBC />
      <ul>
        {list.map((e) => {
          return <li> {e} </li>;
        })}
      </ul>
      <button
        onClick={() => {
          changeValue();
        }}>
        CHANGE
      </button>
    </div>
  );
}

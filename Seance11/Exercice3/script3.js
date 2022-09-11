const T = [];
const T1 = [];
const T2 = [];
const tSize = prompt ('saisir la taille du tableau');

 function tFill () {
    for (let i=0; i<tSize;i++) {
    let nom = prompt ('entrée un nom')
    T.push(nom);
    console.log(T);

    if (nom.length > 8) {
        T1.push (nom);
        console.log(T1);
    }
    if (nom.length <= 8){
        T2.push (nom);
        console.log(T2);
    }
}
 }
tFill();

const Tshow = () =>
{

    const p = document.getElementById('tabT');
    const StringToDisplay = T.join(" - ");

    p.innerHTML = StringToDisplay;
}
Tshow();
const T1show = () =>
{

    const p = document.getElementById('tabT1');
    const StringToDisplay = T1.join(" - ");

    p.innerHTML = StringToDisplay;
}
T1show();

const T2show = () =>
{

    const p = document.getElementById('tabT2');
    const StringToDisplay = T2.join(" - ");

    p.innerHTML = StringToDisplay;
}
T2show();

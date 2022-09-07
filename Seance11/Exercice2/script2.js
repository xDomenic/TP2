const names = [];

const ajout = () =>
{
    const name = prompt('Inserer Votre Nom SVP');
    names.push(name);

}

const random = (max) => Math.floor(Math.random() * max)

const loto = () =>
{
    const winnerIndex = random(names.length); // 2 , 3 , 6
    const winnerName = names[winnerIndex]

    const p = document.getElementById('winner');
    p.innerHTML = winnerName
}
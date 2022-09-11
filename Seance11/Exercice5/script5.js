const usd = 1.26;
const cad = 0.74;

var convertTo = prompt("voulez vous convertir vers CAD ou USD?");
var amount = prompt("Quel montant souhaitez vous convertir?");
const color = prompt("choisr bleu ou vert");
console.log(convertTo);
console.log(amount);
var setColor = "red";

const colors = {
    vert: "green",
    bleu: "blue",
    rouge: "red"
}
const translateColor = () =>
{
    setColor = colors[color.toLowerCase()]


    /*    if (color.toLowerCase() == "vert"){
            setColor = "green";
        }else if (color.toLowerCase() == "bleu"){
            setColor = "blue";
        }
            */
}




console.log(color);

translateColor();

console.log(setColor);



var amountConvert = () =>
{
    if (convertTo.toUpperCase() == "USD") {
        var converted = amount * usd;
    } else if (convertTo.toUpperCase() == "CAD") {
        var converted = amount * usd;
    } else alert("Cette valeur n<est pas accepter");
    console.log(converted);

    const p = document.getElementById('amountConverted');
    p.innerHTML = converted;
}

document.querySelector("#btnColor").onclick = () =>
{
    const colorChange = document.querySelectorAll("#color, #amountConverted"); // c'est une NodeList (qu'on peut pas la traiter autant list normal)
    [...colorChange].forEach((e) =>
    {
        e.style.color = setColor;
    })
    /*  console.log(colorChange.style);
        colorChange.style.color = setColor;
        colorChange1.style.color = setColor;
    */
}

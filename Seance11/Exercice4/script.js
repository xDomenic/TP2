const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const KEY = 11;

const crypt = () =>
{
    const valuerToEncrypt = prompt('Saisir un mot');

    const cryptesValue = valuerToEncrypt.split("").map(lettre =>
    {

        // Prendre l'index de la lettre et lui additioner la CLé
        const new_index = alpha.indexOf(lettre.toUpperCase()) + KEY;
        // Checher si la clé est non superiru sinon donner son modulo
        const confirmedIndex = new_index > 26 ? new_index % 26 : new_index;
        // retourner la nouvelle
        return alpha[confirmedIndex]


    }).join("");


    const p = document.getElementById('cryptedValue');
    p.innerHTML = cryptesValue;
}

const decrypt = () =>
{
    const valuerToDecrypt = prompt('Donne moi la valeur a decrypter');

    const DecryptedValue = valuerToDecrypt.split('').map(lettre =>
    {
        const current_idex = alpha.indexOf(lettre.toUpperCase());
        const WeCantMinus = current_idex < KEY
        const new_index = Math.abs(current_idex - KEY);

        return WeCantMinus
            ? alpha.split('').reverse().join('')[new_index - 1]
            : alpha[new_index]

    }).join("");

    const p = document.getElementById('cryptedValue');
    p.innerHTML = DecryptedValue;

}
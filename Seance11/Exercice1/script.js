const tablo = [1, 2, 3, 4];
let item = null

const init = () =>
{

    const p = document.getElementById('affich');
    const StringToDisplay = tablo.join(" - ");
    item = tablo[1]

    p.innerHTML = StringToDisplay
}

const item2 = () =>
{
    const p = document.getElementById('affich');
    p.innerHTML = item;
}

const replace = () =>
{
    tablo[1] = 5; // 5
    init() // 6
}

const add13 = () =>
{
    tablo.push(13) // 7
    init() // 8
}


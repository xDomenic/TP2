const listimage = [
  "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674",
  "https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127",
  "https://images.unsplash.com/photo-1464802686167-b939a6910659?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750",
];
const random = (n) => Math.floor(Math.random() * n);
function imagesChange() {
  const container = document.querySelector(".page");
  setInterval(() => {
    container.style.backgroundImage = `url(${
      listimage[random(listimage.length)]
    })`;
  }, 2000);
}
imagesChange();

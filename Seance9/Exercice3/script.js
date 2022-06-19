const handleSupprim = (id) => {
  const idd = `#id_${id}`;
  const liToDelete = document.querySelector(idd).remove();
};

const handleAdd = () => {
  const input = document.querySelector("#inputText");
  const File = document.querySelector("#inputFile");
  const list = document.querySelector("#list");

  const fileValue = File.files[0];
  const urlImage = URL.createObjectURL(fileValue);

  const id = `${Date.now()}`;

  const li = ` 
  <li id='id_${id}'>
   <div>
     <button onclick="handleSupprim(${id})" >Supprimer</button>
     <p>${input?.value}</p>
     <img src="${urlImage}" width="100" height="100" />
   </div> 
  </li> `;

  list.innerHTML += li;
};

let elList = document.querySelector(".list");

pokemons.forEach((pokemon) => {
  let elNewItem = document.createElement("li");
elNewItem.classList = ("item");

  let elNewImg = document.createElement("img", "card-img-top");
  elNewImg.src = pokemon.img;
  elNewImg.alt = pokemon.name;

  let elNewName = document.createElement("h3");
  elNewName.textContent = pokemon.name;
  elNewName.classList = ("h2");

  let elTypeName = document.createElement("h4");
  elTypeName.textContent = "type";
  elTypeName.classList = ("h3", "hr")

  let elType = document.createElement("p");
  elType.textContent = pokemon.type;
  elType.classList = ("Type");

  let elWeaknessesName = document.createElement("h4");
  elWeaknessesName.textContent = "Weaknesses";
  elWeaknessesName.classList = ("h3")

  let elWeaknesses = document.createElement("p");
  elWeaknesses.textContent = pokemon.weaknesses
  elWeaknesses.classList = ("weaknesses");

  elList.appendChild(elNewItem);
  elNewItem.appendChild(elNewImg);
  elNewItem.appendChild(elNewName);
  elNewItem.appendChild(elTypeName);
  elNewItem.appendChild(elType);
  elNewItem.appendChild(elWeaknessesName);
  elNewItem.appendChild(elWeaknesses);
})
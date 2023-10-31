window.addEventListener("load", () => {
  let bagItemsstr = localStorage.getItem("bagItems");
  bagItems = bagItemsstr ? JSON.parse(bagItemsstr) : [];
  fettchApi();
  bagCount();
});

const fettchApi = async () => {
  const response = await fetch("/src/Data.json");

  const data = await response.json();

  const { female, kids, male } = data;

  femaleData(female);
  kidsData(kids);
  maleData(male);
};

//  Female data
const femaleData = (item) => {
  let data = item
    .map((x) => {
      return `
      <div id="items">
        <img src="${x.img}" />
        <div class="list">
          <h2>${x.name}</h2>
          <div class="price">$100</div>
          <div class="addBag" class="addBag" onclick="addItems(this)" data-itemobj='${JSON.stringify(
            x
          )}'>Add to bag</div>
        </div>
      </div>
      `;
    })
    .join(" ");
  const itt = document.getElementById("products");
  if (!itt) return;

  console.log(data);
  itt.innerHTML = data;
};

// KIDS
const kidsData = (items) => {
  const data = items
    .map((x) => {
      return `
      <div id="items">
        <img src="${x.img}" />
        <div class="list">
          <h2>${x.name}</h2>
          <div class="price">$${x.price}</div>
          <div class="addBag" onclick="addItems(this)" data-itemobj='${JSON.stringify(
            x
          )}'>Add to bag</div>
        </div>
      </div>
      `;
    })
    .join(" ");
  const kids = document.getElementById("kids");
  if (!kids) return;
  kids.innerHTML = data;
};

// MALE data

const maleData = (item) => {


  const data = item
    .map((x) => {
      return `
      <div id="items">
        <img src="${x.img}" />
        <div class="list">
          <h2>${x.name}</h2>
          <div class="price">$${x.price}</div>
          <div class="addBag" onclick="addItems(this)" data-itemobj='${JSON.stringify(
            x
          )}'>Add to bag</div>
        </div>
      </div>
      `;
    })
    .join(" ");


  const male = document.getElementById("male");
  male.innerHTML = data;
};




//  Bag Items


































let bagItems;
const addItems = (itemId) => {
  let addData = JSON.parse(itemId.dataset.itemobj);
  bagItems.push(addData);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  bagCount();
  console.log(bagItems);
};

const bagCount = () => {
  const cartItem = document.getElementById("count");
  cartItem.innerHTML = bagItems.length;
};

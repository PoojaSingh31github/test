let bagItemsstr = localStorage.getItem("bagItems");
bagItems = bagItemsstr ? JSON.parse(bagItemsstr) : [];

let data = bagItems.map((x) => {
  return femaleI(x);
});
document.getElementById("cartItemss").innerHTML = data;
function femaleI(i){
  return `
        <div id="items">
                <img src="${i.img}" />
                <div class="list">
                  <h2>${i.name}</h2>
                  <div class="price">$100</div>
                  <div class="addBag"">Buy Now</div>
                </div>
              </div>
        `;
};

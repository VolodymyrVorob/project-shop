let container_card = document.querySelector(".container-card")
cart = JSON.parse(localStorage.getItem("cart")) || [] 
function goToSite() {
  window.location.href = "index.html";
}

let amountElement = document.querySelector(".amount");

function decrease() {
    let currentAmount = parseInt(amountElement.textContent);
    amountElement.textContent = 0;
}


cart.forEach(card => {
  let cardHTML = `
        <div class="card">
            <img src="${card.img}">
            <div class="title">${card.title}</div>
            <div class="brand">${card.brand}</div>
            <div class="price">${card.price}</div>
        </div>
`
container_card.insertAdjacentHTML("beforeend", cardHTML);
});

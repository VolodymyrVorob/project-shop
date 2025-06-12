let container_card = document.querySelector(".container-card")

cart = JSON.parse(localStorage.getItem("cart")) || [] 

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

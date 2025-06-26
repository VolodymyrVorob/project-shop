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
        <p class="price"><small class="text-muted" data-price = "${card.price}">${card.price}</small></p>
                 <div class="input-group">
        <input type="number" class="form-control" placeholder="Amount" min="1"value="1">
          <button class="btn btn-outline-secondary" type="button" data-action="minus">-</button>
          <button class="btn btn-outline-secondary" type="button" data-action="plus">+</button>    
          </div>
        </div>
`
container_card.insertAdjacentHTML("beforeend", cardHTML);
});
document.querySelectorAll("[data-action='minus']").forEach(btn => {
  btn.addEventListener("click", ()=>{
   const input = btn.closest(".input-group").querySelector(".form-control");
    let currentValue = parseInt(input.value);
    

    if(currentValue > 1){
      let newValue = currentValue - 1
      input.value = newValue;
          const priceElement = btn.closest(".card").querySelector(".text-muted");
    const unitPrice = parseFloat(priceElement.dataset.price);
    priceElement.innerHTML -= unitPrice


      cart_counter--
    localStorage.setItem("counter", cart_counter)
    cart_counterHTML.innerHTML = cart_counter
    
    }

  })
})

document.querySelectorAll("[data-action='plus']").forEach(btn => {
  btn.addEventListener("click", ()=>{
   const input = btn.closest(".input-group").querySelector(".form-control");
    let newValue = parseInt(input.value) + 1;
    localStorage.setItem("cart-counter", newValue)
    input.value = localStorage.getItem("cart-counter");

    const priceElement = btn.closest(".card").querySelector(".text-muted");
    const unitPrice = parseFloat(priceElement.dataset.price);
    priceElement.innerHTML = unitPrice * newValue

    cart_counter++
    localStorage.setItem("counter", cart_counter)
    cart_counterHTML.innerHTML = cart_counter


    
  })
})
let container_card = document.querySelector(".container-card")
cart = JSON.parse(localStorage.getItem("cart")) || [] 
let totalSetPrice = 0;
let totalPrice = document.querySelector(".total-price");
let idArray = [];
let itemCards = {};
let counter = parseInt(localStorage.getItem("counter")) || 0;
let savedQuantities = JSON.parse(localStorage.getItem("quantities")) || {};
function goToSite() {
  window.location.href = "index.html";
}

let amountElement = document.querySelector(".amount");

function decrease() {
    let currentAmount = parseInt(amountElement.textContent);
    amountElement.textContent = 0;
}
cart.forEach((item) => {
  if (!idArray.includes(item.id)) {
    idArray.push(item.id);
    
    // Встановлюємо початкову кількість
    if (!savedQuantities[item.id]) {
      savedQuantities[item.id] = 1;
    }
    
    // Отримуємо чисту кількість як число
    const quantity = parseInt(savedQuantities[item.id]) || 1;
    const unitPrice = parseFloat(item.price) || 0;
    const itemTotalPrice = (unitPrice * quantity).toFixed(2);
    

  let cartItemHTML  = `
        <div class="card" data-id ="${item.id}">
            <img src="${item.img}">
            <div class="title">${item.title}</div>
            <div class="brand">${item.brand}</div>
        <p class="price"><small class="text-muted" data-price = "${item.price}">${item.price}</small></p>
 <div class="input-group">
          <input type="number" class="form-control" placeholder="Amount" value="${quantity}" min="1">
          <button class="btn btn-outline-secondary" type="button" data-action="minus">-</button>
          <button class="btn btn-outline-secondary" type="button" data-action="plus">+</button>
         </div>
`;

    container_card.insertAdjacentHTML("beforeend", cartItemHTML);
    
    const addedCard = container_card.lastElementChild;
    const input = addedCard.querySelector(".form-control");
    input.value = quantity;
    
    itemCards[item.id] = addedCard;
    totalSetPrice += (unitPrice * quantity);
    
  } else {
    const existingCard = itemCards[item.id];
    const input = existingCard.querySelector(".form-control");
    let currentQuantity = parseInt(input.value) || 1;
    let newValue = currentQuantity + 1; 
    
    savedQuantities[item.id] = newValue;
    localStorage.setItem("quantities", JSON.stringify(savedQuantities));
    
    input.value = newValue;
    
    const priceElement = existingCard.querySelector(".text-muted");
    const unitPrice = parseFloat(priceElement.dataset.price);
    priceElement.innerText = (unitPrice * newValue).toFixed(2);
    
    totalSetPrice += unitPrice;
  }
});

// Збережемо кількості
localStorage.setItem("quantities", JSON.stringify(savedQuantities));
document.querySelectorAll("[data-action='minus']").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const itemId = card.dataset.id;
    const input = btn.closest(".input-group").querySelector(".form-control");
    
    let currentValue = parseInt(input.value) || 1;
    
    // Перевіряємо, чи можемо зменшити (якщо більше 1)
    if (currentValue > 1) {
      let newValue = currentValue - 1;
      
      // Оновлюємо кількості
      savedQuantities[itemId] = newValue;
      localStorage.setItem("quantities", JSON.stringify(savedQuantities));

      input.value = newValue;

      const priceElement = card.querySelector(".text-muted");
      const unitPrice = parseFloat(priceElement.dataset.price);
      priceElement.innerText = (unitPrice * newValue).toFixed(2);
      
      // Оновлюємо загальну ціну та лічильник
      totalSetPrice -= unitPrice;
      totalPrice.innerText = totalSetPrice.toFixed(2);
      counter--;
      localStorage.setItem("count", counter);
      cart_counter.innerHTML = counter;
    }
    // Якщо currentValue === 1, нічого не робимо
  });
});

document.querySelectorAll("[data-action='plus']").forEach(btn => {
  btn.addEventListener("click", () => {
    counter++;
    localStorage.setItem("count", counter);
    cart_counter.innerHTML = counter;

    const card = btn.closest(".card");
    const itemId = card.dataset.id;
    const input = btn.closest(".input-group").querySelector(".form-control");
    
    let currentQuantity = parseInt(input.value) || 1;
    let newValue = currentQuantity + 1;
    
    // Оновлюємо збережені кількості
    savedQuantities[itemId] = newValue;
    localStorage.setItem("quantities", JSON.stringify(savedQuantities));
    
    // Встановлюємо нове значення
    input.value = newValue;

    const priceElement = card.querySelector(".text-muted");
    const unitPrice = parseFloat(priceElement.dataset.price);
    priceElement.innerText = (unitPrice * newValue).toFixed(2);
    totalSetPrice += unitPrice;
    totalPrice.innerText = totalSetPrice.toFixed(2);
  });
});
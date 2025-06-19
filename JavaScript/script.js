function goToCart() {
  window.location.href = "cart.html";
}
let amount = document.querySelector(".amount")
function increase(){
 let currentAmount = parseInt(amount.textContent); // Отримуємо поточне значення
    amount.textContent = currentAmount + 1;
}
let more = document.querySelector(".button")
function morepr() {
  let new_cards = document.querySelectorAll(".additional");
  new_cards.forEach(function(card) {
    card.style.display = "block";
  });
}





window.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-cart")) {
      let btn_bye = event.target
      let card = btn_bye.closest(".card")
      let product_info = {
        title:card.querySelector(".title").innerText,
        img: card.querySelector(".card-img").getAttribute("src"),
        brand: card.querySelector(".brand").innerText,
        price: card.querySelector(".price").innerText
      }
   
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product_info)
    localStorage.setItem("cart", JSON.stringify(cart))
  }
});
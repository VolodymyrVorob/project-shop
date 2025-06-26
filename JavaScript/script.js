let cart_counterHTML = document.querySelector(".cart-counter")
let cart_counter = localStorage.getItem("counter") || 0;
cart_counterHTML.innerHTML = cart_counter

function goToCart() {
  window.location.href = "cart.html";
}

let more = document.querySelector(".button")
function morepr() {
  let new_cards = document.querySelectorAll(".additional");
  new_cards.forEach(function(card) {
    card.style.display = "block";
  });
}
let card_all = document.querySelectorAll('.card');
let toggled = false;
let btn1 = document.querySelector(".be3")
 function before3() {
  let b3 = document.querySelectorAll('.b3');

  if (!toggled) {
    card_all.forEach(el => el.style.display = 'none');
    b3.forEach(el => el.style.display = 'block');
    toggled = true;
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
  }

};
btn1.addEventListener("click", before3)
let btn2 = document.querySelector(".be3-7")
 function betw3_7() {
  let b3_7 = document.querySelectorAll('.b3-7');

  if (!toggled) {
    card_all.forEach(el => el.style.display = 'none');
    b3_7.forEach(el => el.style.display = 'block');
    toggled = true;
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
  }

};
btn2.addEventListener("click", betw3_7)
let btn3 = document.querySelector(".be7-12")
 function betw7_12() {
  let b7_12 = document.querySelectorAll('.b7-12');

  if (!toggled) {
    card_all.forEach(el => el.style.display = 'none');
    b7_12.forEach(el => el.style.display = 'block');
    toggled = true;
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
  }

};
btn3.addEventListener("click", betw7_12)
let btn4 = document.querySelector(".cheep-btn")
 function cheepf() {
  let cheep = document.querySelectorAll('.cheep');
  if (!toggled) {
    card_all.forEach(el => el.style.display = 'none');
    cheep.forEach(el => el.style.display = 'block');
    toggled = true;
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
  }
};
btn4.addEventListener("click", cheepf)
let btn5 = document.querySelector(".medium-btn")
 function mediumf() {
  let medium = document.querySelectorAll('.medium');
  if (!toggled) {
    card_all.forEach(el => el.style.display = 'none');
    medium.forEach(el => el.style.display = 'block');
    toggled = true;
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
  }
};
btn5.addEventListener("click", mediumf)
let btn6 = document.querySelector(".exp-btn")
 function expf() {
  let exp = document.querySelectorAll('.exp');
  if (!toggled) {
    card_all.forEach(el => el.style.display = 'none');
    exp.forEach(el => el.style.display = 'block');
    toggled = true;
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
  }
};
btn6.addEventListener("click", expf)
let btn7 = document.querySelector(".game")
 function gmf() {
  let gm = document.querySelectorAll('.gm');
  if (!toggled) {
    card_all.forEach(el => el.style.display = 'none');
    gm.forEach(el => el.style.display = 'block');
    toggled = true;
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
  }
};
btn7.addEventListener("click", gmf)
let btn8 = document.querySelector(".think")
 function thf() {
  let th = document.querySelectorAll('.th');
  if (!toggled) {
    card_all.forEach(el => el.style.display = 'none');
    th.forEach(el => el.style.display = 'block');
    toggled = true;
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
  }
};
btn8.addEventListener("click", thf)

window.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-cart")) {
      cart_counter++
      cart_counterHTML.innerHTML = cart_counter
      localStorage.setItem("counter", cart_counter)
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

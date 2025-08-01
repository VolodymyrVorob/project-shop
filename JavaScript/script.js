let cart_counterHTML = document.querySelector(".cart-counter")
let cart_counter = localStorage.getItem("counter") || 0;
cart_counterHTML.innerHTML = cart_counter
  let all_btn = document.querySelectorAll(".option-names");
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
    all_btn.forEach(btn => btn.classList.remove("active-style"));
    btn1.classList.add("active-style");
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
        btn1.classList.remove("active-style")
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
    all_btn.forEach(btn => btn.classList.remove("active-style"));
    btn2.classList.add("active-style");
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
    btn2.classList.remove("active-style")
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
        all_btn.forEach(btn => btn.classList.remove("active-style"));
    btn3.classList.add("active-style");
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
        btn3.classList.remove("active-style")
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
        all_btn.forEach(btn => btn.classList.remove("active-style"));
    btn4.classList.add("active-style");
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
        btn4.classList.remove("active-style")
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
        all_btn.forEach(btn => btn.classList.remove("active-style"));
    btn5.classList.add("active-style");
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
        btn5.classList.remove("active-style")
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
        all_btn.forEach(btn => btn.classList.remove("active-style"));
    btn6.classList.add("active-style");
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
        btn6.classList.remove("active-style")
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
        all_btn.forEach(btn => btn.classList.remove("active-style"));
    btn7.classList.add("active-style");
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
        btn7.classList.remove("active-style")
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
        all_btn.forEach(btn => btn.classList.remove("active-style"));
    btn8.classList.add("active-style");
  } else {
    card_all.forEach(el => el.style.display = 'block');
    toggled = false;
        btn8.classList.remove("active-style")
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
        price: card.querySelector(".price").innerText,
        id: card.querySelector(".id").innerText
      }
   
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let savedQuantities = JSON.parse(localStorage.getItem("quantities")) || {};

    let existingItem = cart.find(prod => String(prod.id) === String(product_info.id));
    
    if (existingItem) {
      savedQuantities[product_info.id] = (savedQuantities[product_info.id] || 1) + 1;
      localStorage.setItem("quantities", JSON.stringify(savedQuantities));

    } else {
      savedQuantities[product_info.id] = 1;
      cart.push(product_info);
      localStorage.setItem("quantities", JSON.stringify(savedQuantities));

    }

    localStorage.setItem("cart", JSON.stringify(cart))
  }
});
  function scrollToAbout() {
    document.getElementById("about-section").scrollIntoView({
      behavior: "smooth"
    });
  }
  function scrollToContact() {
  const target = document.querySelector(".footer-column");
  if (target) {
    target.scrollIntoView({
      behavior: "smooth"
    });
  }
}


let count = 0;
let totalPrice = 0;
// step-1
function handleClick(target) {
// step-2
  const itemContainer = document.getElementById("product-container")
  const item = target.childNodes[5].childNodes[1].innerText;
  const p = document.createElement("p");
  p.innerText = item;
  p.innerHTML = `${count += 1}. ${item}`;
  itemContainer.appendChild(p);

  const price=target.childNodes[5].childNodes[3].innerText.split(" ")[0];
  totalPrice = parseFloat(price) + parseFloat(totalPrice);
  document.getElementById("total-price").innerText = totalPrice.toFixed(2);
  
  
  const purchaseBtn = document.getElementById("purchase-btn");
  if (totalPrice > 0) {
    purchaseBtn.removeAttribute("disabled");
  } else {
     purchaseBtn.setAttribute("disabled", true);
   }
   total = totalPrice;
    document.getElementById("total").innerText = total;

  // step-4
  const couponBtn = document.getElementById("coupon-btn");
   const couponCodeElement = document.getElementById("coupon-code");
  const couponCode = couponCodeElement.innerText;
  
   if (totalPrice >= 200) {
     couponBtn.removeAttribute("disabled");
  } else {
     couponBtn.setAttribute("disabled", true);
  } 
  
}
function clicked() {
      const couponInput = document.getElementById("coupon-input");
      const couponValue = couponInput.value;

   if (couponValue === "SELL200") { 
        const discountPrice = totalPrice * 0.2;
        const total = totalPrice - discountPrice;
        
        document.getElementById("total-price").innerText = totalPrice.toFixed(2);
        
        document.getElementById("discount-price").innerText = discountPrice.toFixed(2);
      document.getElementById("total").innerText = total.toFixed(2);
      couponInput.value = "";
    } else {
      alert("Please input valid coupone code");
      couponInput.value = "";
   }
} 
function reloaded() {
   window.location.href = "index.html";
}
// window.location.href = "bank.html";

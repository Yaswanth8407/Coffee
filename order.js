    let cart = [];

    function addToCart(name, price) {
        let item = cart.find(i => i.name === name);
        if (item) item.qty++;
        else cart.push({ name, price, qty: 1 });
        updateCart();
    }

    function removeFromCart(name) {
        cart = cart.filter(i => i.name !== name);
        updateCart();
    }

    function updateCart() {
        const cartDiv = document.getElementById("cart-items");
        const footer = document.getElementById("cart-footer");
        const totalSpan = document.getElementById("total");

        if (cart.length === 0) {
            cartDiv.innerHTML = "No items in cart";
            footer.style.display = "none";
            return;
        }

        let total = 0;
        cartDiv.innerHTML = "";

        cart.forEach(i => {
            let amt = i.price * i.qty;
            total += amt;
            cartDiv.innerHTML += `
                <div class="cart-item">
                    <span>${i.name} x${i.qty}</span>
                    <span>₹${amt}</span>
                    <button class="remove-btn" onclick="removeFromCart('${i.name}')">Remove</button>
                </div>`;
        });

        totalSpan.textContent = "₹" + total;
        footer.style.display = "block";
    }

    function checkout() {
        if (cart.length === 0) {
            alert("Cart is empty");
            return;
        }

        document.getElementById("invoice").style.display = "block";
        document.getElementById("billDate").textContent = new Date().toLocaleString();
        document.getElementById("orderId").textContent = "BB" + Math.floor(Math.random() * 10000);

        let billBody = document.getElementById("bill-items");
        billBody.innerHTML = "";

        let total = 0;
        cart.forEach(i => {
            let amt = i.price * i.qty;
            total += amt;
            billBody.innerHTML += `
                <tr>
                    <td>${i.name}</td>
                    <td>${i.qty}</td>
                    <td>₹${amt}</td>
                </tr>`;
        });

        document.getElementById("bill-total").textContent = "Grand Total: ₹" + total;

        cart = [];
        updateCart();
    }
let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;

    document.getElementById("count").innerText = cart.length;
    document.getElementById("total").innerText = total;

    let list = document.getElementById("cart-items");
    let item = document.createElement("li");
    item.innerText = name + " - " + price + " DH";
    list.appendChild(item);
}

function sendWhatsApp() {
    if(cart.length === 0){
        alert("Panier vide !");
        return;
    }

    let message = "Bonjour, je souhaite commander :\n";

    cart.forEach(item => {
        message += "- " + item.name + " (" + item.price + " DH)\n";
    });

    message += "Total : " + total + " DH";

    let phone = "212600000000"; // ⚠️ mets ton numéro ici

    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}
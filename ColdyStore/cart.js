// ==========================================
// COLDY STORE - CART SYSTEM
// ==========================================

function addToCart(name, price, game) {

    let cart = JSON.parse(localStorage.getItem("coldyCart")) || [];

    const existingItem = cart.find(
        item => item.name === name && item.game === game
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            game: game,
            quantity: 1
        });
    }

    localStorage.setItem(
        "coldyCart",
        JSON.stringify(cart)
    );

    window.location.href = "../cart.html";
}


// ==========================================
// AUTOMATIC BUY NOW BUTTONS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                button.closest(
                    ".robux-card, .steam-card, .product"
                );

            if (!card) return;


            // Get package/product name
            let nameElement =
                card.querySelector(
                    "h2, h3, .robux-amount, .product-name"
                );


            // Get price
            let priceElement =
                card.querySelector(
                    ".price, .product-price, .robux-price"
                );


            // Fallback: read all card text
            const text = card.innerText;


            // -----------------------------
            // ROBLOX
            // -----------------------------

            if (location.pathname.includes("roblox")) {

                const packages = [
                    ["400 Robux", 650],
                    ["800 Robux", 1250],
                    ["1,700 Robux", 2500],
                    ["4,500 Robux", 6200],
                    ["10,000 Robux", 12500],
                    ["22,500 Robux", 25000]
                ];

                for (const item of packages) {

                    if (text.includes(item[0])) {

                        addToCart(
                            item[0],
                            item[1],
                            "Roblox"
                        );

                        return;
                    }
                }
            }


            // -----------------------------
            // STEAM
            // -----------------------------

            if (location.pathname.includes("steam")) {

                const packages = [
                    ["$5", 750],
                    ["$10", 1450],
                    ["$20", 2850],
                    ["$50", 6900],
                    ["$75", 10200],
                    ["$100", 13500]
                ];

                for (const item of packages) {

                    if (text.includes(item[0])) {

                        addToCart(
                            "Steam Wallet " + item[0],
                            item[1],
                            "Steam"
                        );

                        return;
                    }
                }
            }


            // -----------------------------
            // MINECRAFT
            // -----------------------------

            if (location.pathname.includes("minecraft")) {

                const packages = [
                    ["Minecraft Java", 2800],
                    ["Java + Bedrock", 3500],
                    ["Bedrock Edition", 3200],
                    ["Minecoins 1,720", 1200],
                    ["Minecoins 3,500", 2200],
                    ["Minecoins 8,000", 4500]
                ];

                for (const item of packages) {

                    if (text.includes(item[0])) {

                        addToCart(
                            item[0],
                            item[1],
                            "Minecraft"
                        );

                        return;
                    }
                }
            }


            // -----------------------------
            // VALORANT
            // -----------------------------

            if (location.pathname.includes("valorant")) {

                const packages = [
                    ["475 VP", 750],
                    ["1000 VP", 1500],
                    ["2050 VP", 2900],
                    ["3650 VP", 4900],
                    ["5350 VP", 6900],
                    ["11000 VP", 13500]
                ];

                for (const item of packages) {

                    if (text.includes(item[0])) {

                        addToCart(
                            item[0],
                            item[1],
                            "Valorant"
                        );

                        return;
                    }
                }
            }

        });

    });

});
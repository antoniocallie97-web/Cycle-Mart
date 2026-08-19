/* =========================================================
   CYCLE MART - PRODUCT.JS
   =========================================================
   Bicycle catalogue for Cycle Mart.

   FEATURES:
   - 59 bicycles
   - Ex-UK bicycles
   - KSh 6,000 - KSh 7,000
   - Category filtering
   - WhatsApp enquiry
   - No cart
   - No checkout
   - No Add to Cart
   ========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       CYCLE MART PRODUCT CATALOGUE
    ===================================================== */

    const products = [

        /* =================================================
           1 - 10
        ================================================= */

        {
            id: 1,
            name: "Ex-UK Mountain Bike 01",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6800,
            condition: "EX-UK",
            image: "images/bikes/images.jpeg",
            description: "Quality Ex-UK mountain bike suitable for everyday riding and outdoor adventures."
        },

        {
            id: 2,
            name: "Ex-UK Hybrid Bike 02",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6500,
            condition: "EX-UK",
            image: "images/bikes/images (1).jpeg",
            description: "Comfortable hybrid bicycle suitable for commuting and everyday cycling."
        },

        {
            id: 3,
            name: "Ex-UK Road Bike 03",
            category: "road",
            categoryName: "Road Bike",
            price: 7000,
            condition: "EX-UK",
            image: "images/bikes/images (2).jpeg",
            description: "Smooth and efficient road bicycle designed for comfortable road riding."
        },

        {
            id: 4,
            name: "Ex-UK City Bike 04",
            category: "city",
            categoryName: "City Bike",
            price: 6200,
            condition: "EX-UK",
            image: "images/bikes/images (3).jpeg",
            description: "Practical city bicycle ideal for daily transportation and short rides."
        },

        {
            id: 5,
            name: "Ex-UK Mountain Bike 05",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6900,
            condition: "EX-UK",
            image: "images/bikes/images (4).jpeg",
            description: "Strong and versatile mountain bike suitable for different types of terrain."
        },

        {
            id: 6,
            name: "Ex-UK Hybrid Bike 06",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6400,
            condition: "EX-UK",
            image: "images/bikes/images (5).jpeg",
            description: "Versatile hybrid bicycle suitable for commuting and leisure riding."
        },

        {
            id: 7,
            name: "Ex-UK Mountain Bike 07",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6700,
            condition: "EX-UK",
            image: "images/bikes/images (6).jpeg",
            description: "Reliable mountain bike designed for recreational and outdoor riding."
        },

        {
            id: 8,
            name: "Ex-UK Hybrid Bike 08",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6600,
            condition: "EX-UK",
            image: "images/bikes/images (7).jpeg",
            description: "Comfortable hybrid bicycle for everyday rides and commuting."
        },

        {
            id: 9,
            name: "Ex-UK Road Bike 09",
            category: "road",
            categoryName: "Road Bike",
            price: 7000,
            condition: "EX-UK",
            image: "images/bikes/images (8).jpeg",
            description: "Quality road bicycle designed for smooth and efficient cycling."
        },

        {
            id: 10,
            name: "Ex-UK City Bike 10",
            category: "city",
            categoryName: "City Bike",
            price: 6100,
            condition: "EX-UK",
            image: "images/bikes/images (9).jpeg",
            description: "Affordable city bicycle suitable for everyday transportation."
        },


        /* =================================================
           11 - 20
        ================================================= */

        {
            id: 11,
            name: "Ex-UK Mountain Bike 11",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6800,
            condition: "EX-UK",
            image: "images/bikes/images (10).jpeg",
            description: "Versatile mountain bicycle suitable for recreational riding."
        },

        {
            id: 12,
            name: "Ex-UK Hybrid Bike 12",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6500,
            condition: "EX-UK",
            image: "images/bikes/images (11).jpeg",
            description: "Comfortable hybrid bike for daily commuting and leisure."
        },

        {
            id: 13,
            name: "Ex-UK Mountain Bike 13",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6900,
            condition: "EX-UK",
            image: "images/bikes/images (12).jpeg",
            description: "Strong Ex-UK mountain bike suitable for outdoor adventures."
        },

        {
            id: 14,
            name: "Ex-UK Road Bike 14",
            category: "road",
            categoryName: "Road Bike",
            price: 6800,
            condition: "EX-UK",
            image: "images/bikes/images (13).jpeg",
            description: "Efficient road bicycle suitable for smooth road cycling."
        },

        {
            id: 15,
            name: "Ex-UK City Bike 15",
            category: "city",
            categoryName: "City Bike",
            price: 6000,
            condition: "EX-UK",
            image: "images/bikes/images (14).jpeg",
            description: "Affordable city bicycle designed for everyday riding."
        },

        {
            id: 16,
            name: "Ex-UK Hybrid Bike 16",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6600,
            condition: "EX-UK",
            image: "images/bikes/images (15).jpeg",
            description: "Practical hybrid bicycle suitable for daily commuting."
        },

        {
            id: 17,
            name: "Ex-UK Mountain Bike 17",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6700,
            condition: "EX-UK",
            image: "images/bikes/images (16).jpeg",
            description: "Reliable mountain bicycle for recreational and outdoor cycling."
        },

        {
            id: 18,
            name: "Ex-UK Road Bike 18",
            category: "road",
            categoryName: "Road Bike",
            price: 7000,
            condition: "EX-UK",
            image: "images/bikes/images (17).jpeg",
            description: "Quality road bicycle designed for longer rides."
        },

        {
            id: 19,
            name: "Ex-UK Hybrid Bike 19",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6300,
            condition: "EX-UK",
            image: "images/bikes/images (18).jpeg",
            description: "Comfortable hybrid bicycle suitable for everyday cycling."
        },

        {
            id: 20,
            name: "Ex-UK Mountain Bike 20",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6900,
            condition: "EX-UK",
            image: "images/bikes/images (19).jpeg",
            description: "Versatile mountain bicycle for recreational riding."
        },


        /* =================================================
           21 - 30
        ================================================= */

        {
            id: 21,
            name: "Ex-UK City Bike 21",
            category: "city",
            categoryName: "City Bike",
            price: 6100,
            condition: "EX-UK",
            image: "images/bikes/images (20).jpeg",
            description: "Practical city bike suitable for everyday transportation."
        },

        {
            id: 22,
            name: "Ex-UK Hybrid Bike 22",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6400,
            condition: "EX-UK",
            image: "images/bikes/images (21).jpeg",
            description: "Comfortable hybrid bicycle suitable for daily rides."
        },

        {
            id: 23,
            name: "Ex-UK Mountain Bike 23",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6800,
            condition: "EX-UK",
            image: "images/bikes/images (22).jpeg",
            description: "Quality mountain bicycle for recreational and outdoor use."
        },

        {
            id: 24,
            name: "Ex-UK Road Bike 24",
            category: "road",
            categoryName: "Road Bike",
            price: 6900,
            condition: "EX-UK",
            image: "images/bikes/images (23).jpeg",
            description: "Smooth road bicycle designed for efficient cycling."
        },

        {
            id: 25,
            name: "Ex-UK City Bike 25",
            category: "city",
            categoryName: "City Bike",
            price: 6000,
            condition: "EX-UK",
            image: "images/bikes/images (24).jpeg",
            description: "Affordable city bicycle for everyday transportation."
        },

        {
            id: 26,
            name: "Ex-UK Hybrid Bike 26",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6500,
            condition: "EX-UK",
            image: "images/bikes/images (25).jpeg",
            description: "Practical hybrid bicycle for commuting and leisure."
        },

        {
            id: 27,
            name: "Ex-UK Mountain Bike 27",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6700,
            condition: "EX-UK",
            image: "images/bikes/images (26).jpeg",
            description: "Reliable mountain bicycle for recreational adventures."
        },

        {
            id: 28,
            name: "Ex-UK Road Bike 28",
            category: "road",
            categoryName: "Road Bike",
            price: 7000,
            condition: "EX-UK",
            image: "images/bikes/images (27).jpeg",
            description: "Quality road bike suitable for smooth road riding."
        },

        {
            id: 29,
            name: "Ex-UK Hybrid Bike 29",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6600,
            condition: "EX-UK",
            image: "images/bikes/images (28).jpeg",
            description: "Versatile hybrid bicycle for everyday cycling."
        },

        {
            id: 30,
            name: "Ex-UK Mountain Bike 30",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6800,
            condition: "EX-UK",
            image: "images/bikes/images (29).jpeg",
            description: "Strong and practical mountain bicycle."
        },


        /* =================================================
           31 - 40
        ================================================= */

        {
            id: 31,
            name: "Ex-UK City Bike 31",
            category: "city",
            categoryName: "City Bike",
            price: 6200,
            condition: "EX-UK",
            image: "images/bikes/images (30).jpeg",
            description: "Comfortable city bicycle for daily transportation."
        },

        {
            id: 32,
            name: "Ex-UK Hybrid Bike 32",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6500,
            condition: "EX-UK",
            image: "images/bikes/images (31).jpeg",
            description: "Everyday hybrid bicycle with a comfortable riding position."
        },

        {
            id: 33,
            name: "Ex-UK Mountain Bike 33",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6900,
            condition: "EX-UK",
            image: "images/bikes/images (32).jpeg",
            description: "Versatile mountain bicycle suitable for outdoor riding."
        },

        {
            id: 34,
            name: "Ex-UK Road Bike 34",
            category: "road",
            categoryName: "Road Bike",
            price: 7000,
            condition: "EX-UK",
            image: "images/bikes/images (33).jpeg",
            description: "Road bicycle suitable for smooth and efficient cycling."
        },

        {
            id: 35,
            name: "Ex-UK City Bike 35",
            category: "city",
            categoryName: "City Bike",
            price: 6100,
            condition: "EX-UK",
            image: "images/bikes/images (34).jpeg",
            description: "Practical city bicycle for everyday use."
        },

        {
            id: 36,
            name: "Ex-UK Mountain Bike 36",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6800,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0022.jpg",
            description: "Quality mountain bike suitable for recreational riding."
        },

        {
            id: 37,
            name: "Ex-UK Hybrid Bike 37",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6500,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0023.jpg",
            description: "Comfortable hybrid bicycle for everyday rides."
        },

        {
            id: 38,
            name: "Ex-UK Mountain Bike 38",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6900,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0024.jpg",
            description: "Strong bicycle for recreational and outdoor riding."
        },

        {
            id: 39,
            name: "Ex-UK Road Bike 39",
            category: "road",
            categoryName: "Road Bike",
            price: 7000,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0025.jpg",
            description: "Efficient road bicycle for smooth cycling."
        },

        {
            id: 40,
            name: "Ex-UK City Bike 40",
            category: "city",
            categoryName: "City Bike",
            price: 6000,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0026.jpg",
            description: "Affordable bicycle for everyday city riding."
        },


        /* =================================================
           41 - 50
        ================================================= */

        {
            id: 41,
            name: "Ex-UK Hybrid Bike 41",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6400,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0027.jpg",
            description: "Practical hybrid bicycle suitable for commuting."
        },

        {
            id: 42,
            name: "Ex-UK Mountain Bike 42",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6700,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0028.jpg",
            description: "Reliable mountain bicycle for different types of terrain."
        },

        {
            id: 43,
            name: "Ex-UK Road Bike 43",
            category: "road",
            categoryName: "Road Bike",
            price: 6900,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0029.jpg",
            description: "Smooth road bicycle suitable for longer rides."
        },

        {
            id: 44,
            name: "Ex-UK City Bike 44",
            category: "city",
            categoryName: "City Bike",
            price: 6200,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0030.jpg",
            description: "Comfortable city bicycle for daily transportation."
        },

        {
            id: 45,
            name: "Ex-UK Hybrid Bike 45",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6600,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0031.jpg",
            description: "Versatile hybrid bicycle for everyday riding."
        },

        {
            id: 46,
            name: "Ex-UK Mountain Bike 46",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6800,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0032.jpg",
            description: "Quality mountain bicycle for recreational use."
        },

        {
            id: 47,
            name: "Ex-UK Road Bike 47",
            category: "road",
            categoryName: "Road Bike",
            price: 7000,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0033.jpg",
            description: "Quality road bicycle for efficient cycling."
        },

        {
            id: 48,
            name: "Ex-UK City Bike 48",
            category: "city",
            categoryName: "City Bike",
            price: 6100,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0034.jpg",
            description: "Practical city bike for everyday transportation."
        },

        {
            id: 49,
            name: "Ex-UK Hybrid Bike 49",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6500,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0035.jpg",
            description: "Comfortable hybrid bicycle for commuting."
        },

        {
            id: 50,
            name: "Ex-UK Mountain Bike 50",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6900,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0036.jpg",
            description: "Versatile mountain bicycle for recreational riding."
        },


        /* =================================================
           51 - 59
        ================================================= */

        {
            id: 51,
            name: "Ex-UK Road Bike 51",
            category: "road",
            categoryName: "Road Bike",
            price: 6800,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0037.jpg",
            description: "Smooth and efficient bicycle for road riding."
        },

        {
            id: 52,
            name: "Ex-UK City Bike 52",
            category: "city",
            categoryName: "City Bike",
            price: 6000,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0038.jpg",
            description: "Affordable city bicycle for everyday transportation."
        },

        {
            id: 53,
            name: "Ex-UK Hybrid Bike 53",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6400,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0039.jpg",
            description: "Comfortable hybrid bicycle for daily cycling."
        },

        {
            id: 54,
            name: "Ex-UK Mountain Bike 54",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6700,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0040.jpg",
            description: "Strong mountain bicycle suitable for outdoor riding."
        },

        {
            id: 55,
            name: "Ex-UK Road Bike 55",
            category: "road",
            categoryName: "Road Bike",
            price: 7000,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0041.jpg",
            description: "Quality road bike designed for smooth riding."
        },

        {
            id: 56,
            name: "Ex-UK City Bike 56",
            category: "city",
            categoryName: "City Bike",
            price: 6200,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0042.jpg",
            description: "Reliable bicycle for everyday city riding."
        },

        {
            id: 57,
            name: "Ex-UK Hybrid Bike 57",
            category: "hybrid",
            categoryName: "Hybrid Bike",
            price: 6600,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0043.jpg",
            description: "Versatile bicycle suitable for commuting and leisure."
        },

        {
            id: 58,
            name: "Ex-UK Mountain Bike 58",
            category: "mountain",
            categoryName: "Mountain Bike",
            price: 6800,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0044.jpg",
            description: "Quality bicycle for recreational and outdoor riding."
        },

        {
            id: 59,
            name: "Ex-UK Road Bike 59",
            category: "road",
            categoryName: "Road Bike",
            price: 7000,
            condition: "EX-UK",
            image: "images/bikes/IMG-20260816-WA0045.jpg",
            description: "Quality road bicycle for efficient road cycling."
        }

    ];


    /* =====================================================
       MAKE PRODUCTS AVAILABLE TO OTHER SCRIPTS
    ===================================================== */

    window.cycleMartProducts = products;


    /* =====================================================
       FORMAT PRICE
    ===================================================== */

    function formatPrice(price) {

        return "KSh " +
            Number(price).toLocaleString("en-KE");

    }


    /* =====================================================
       WHATSAPP NUMBER
    ===================================================== */

    const whatsappNumber =
        "254762346683";


    /* =====================================================
       CREATE WHATSAPP LINK
    ===================================================== */

    function createWhatsAppLink(product) {

        const message =
            `Hello Cycle Mart, I am interested in ${product.name}. The listed price is KSh ${product.price.toLocaleString()}. Please confirm availability and provide more details.`;

        return (
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message)
        );

    }


    /* =====================================================
       PRODUCT CARD
    ===================================================== */

    function createProductCard(product) {

        return `

            <article
                class="bike-card product-card"
                data-category="${product.category}"
            >

                <div class="bike-image">

                    <span class="bike-badge">
                        ${product.condition}
                    </span>


                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                    >


                    <div
                        class="bike-placeholder"
                        style="display:none;"
                    >

                        <i class="fa-solid fa-bicycle"></i>

                    </div>

                </div>


                <div class="bike-info">

                    <span class="bike-category">
                        ${product.categoryName}
                    </span>


                    <h3>
                        ${product.name}
                    </h3>


                    <p>
                        ${product.description}
                    </p>


                    <div class="product-price">
                        ${formatPrice(product.price)}
                    </div>


                    <div class="bike-bottom">

                        <a
                            href="${createWhatsAppLink(product)}"
                            class="whatsapp-order"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <i class="fa-brands fa-whatsapp"></i>

                            Enquire Now

                        </a>

                    </div>

                </div>

            </article>

        `;

    }


    /* =====================================================
       RENDER PRODUCTS
    ===================================================== */

    function renderProducts(productList) {

        const productGrid =
            document.getElementById(
                "productGrid"
            );


        if (!productGrid) {
            return;
        }


        if (!productList.length) {

            productGrid.innerHTML = `

                <div class="no-products">

                    <i class="fa-solid fa-bicycle"></i>

                    <h3>
                        No bicycles found
                    </h3>

                    <p>
                        There are currently no bicycles
                        in this category.
                    </p>

                    <button
                        type="button"
                        class="btn btn-primary"
                        data-filter="all"
                    >
                        View All Bikes
                    </button>

                </div>

            `;

            return;

        }


        productGrid.innerHTML =
            productList
                .map(createProductCard)
                .join("");

    }


    /* =====================================================
       URL CATEGORY FILTER
    ===================================================== */

    const urlParams =
        new URLSearchParams(
            window.location.search
        );


    const urlCategory =
        urlParams.get("category");


    let currentProducts =
        products;


    if (
        urlCategory &&
        urlCategory !== "all"
    ) {

        currentProducts =
            products.filter(
                function (product) {

                    return (
                        product.category ===
                        urlCategory.toLowerCase()
                    );

                }
            );

    }


    /* =====================================================
       INITIAL DISPLAY
    ===================================================== */

    renderProducts(
        currentProducts
    );


    /* =====================================================
       CATEGORY FILTER BUTTONS
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(
            "[data-filter]"
        );


    filterButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const filter =
                        button.dataset.filter;


                    filterButtons.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    if (
                        filter === "all"
                    ) {

                        currentProducts =
                            products;

                    } else {

                        currentProducts =
                            products.filter(
                                function (product) {

                                    return (
                                        product.category ===
                                        filter
                                    );

                                }
                            );

                    }


                    renderProducts(
                        currentProducts
                    );

                }
            );

        }
    );


    /* =====================================================
       SORTING
       Supports:
       - price-low
       - price-high
       - name
    ===================================================== */

    const sortSelect =
        document.getElementById(
            "sortProducts"
        );


    if (sortSelect) {

        sortSelect.addEventListener(
            "change",
            function () {

                const sortValue =
                    sortSelect.value;


                let sortedProducts =
                    [...currentProducts];


                if (
                    sortValue ===
                    "price-low"
                ) {

                    sortedProducts.sort(
                        function (a, b) {

                            return (
                                a.price -
                                b.price
                            );

                        }
                    );

                }


                if (
                    sortValue ===
                    "price-high"
                ) {

                    sortedProducts.sort(
                        function (a, b) {

                            return (
                                b.price -
                                a.price
                            );

                        }
                    );

                }


                if (
                    sortValue ===
                    "name"
                ) {

                    sortedProducts.sort(
                        function (a, b) {

                            return a.name.localeCompare(
                                b.name
                            );

                        }
                    );

                }


                renderProducts(
                    sortedProducts
                );

            }
        );

    }


    /* =====================================================
       SEARCH
       Supports an optional search input:
       #productSearch
    ===================================================== */

    const searchInput =
        document.getElementById(
            "productSearch"
        );


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                const searchTerm =
                    searchInput.value
                        .trim()
                        .toLowerCase();


                const searchedProducts =
                    currentProducts.filter(
                        function (product) {

                            return (

                                product.name
                                    .toLowerCase()
                                    .includes(
                                        searchTerm
                                    )

                                ||

                                product.categoryName
                                    .toLowerCase()
                                    .includes(
                                        searchTerm
                                    )

                                ||

                                product.description
                                    .toLowerCase()
                                    .includes(
                                        searchTerm
                                    )

                            );

                        }
                    );


                renderProducts(
                    searchedProducts
                );

            }
        );

    }


    /* =====================================================
       REMOVE ANY OLD CART ELEMENTS
       SAFETY FEATURE
    ===================================================== */

    const oldCartSelectors = [

        ".add-to-cart",
        ".add-cart",
        ".cart-button",
        ".cart-btn",
        ".cart-link",
        ".cart-icon",
        "#cartButton",
        "#cartCount",
        "#cart",
        "[data-add-to-cart]",
        "[data-cart]"

    ];


    oldCartSelectors.forEach(
        function (selector) {

            document
                .querySelectorAll(selector)
                .forEach(
                    function (element) {

                        element.remove();

                    }
                );

        }
    );


    /* =====================================================
       EXPORT HELPER FUNCTIONS
    ===================================================== */

    window.CycleMartProducts = {

        products: products,

        renderProducts:
            renderProducts,

        formatPrice:
            formatPrice,

        createWhatsAppLink:
            createWhatsAppLink

    };


});
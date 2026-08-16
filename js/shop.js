/* =========================================================
   CYCLE MART - SHOP JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const productGrid =
        document.getElementById("productGrid");

    const searchInput =
        document.getElementById("productSearch");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const sortFilter =
        document.getElementById("sortFilter");

    const resultsCount =
        document.getElementById("resultsCount");

    const noProducts =
        document.getElementById("noProducts");


    /* =====================================================
       CHECK PRODUCT DATA
    ===================================================== */

    if (
        typeof cycleMartProducts === "undefined" ||
        !productGrid
    ) {

        console.error(
            "Cycle Mart products could not be loaded."
        );

        return;

    }


    /* =====================================================
       PRODUCT LIST
    ===================================================== */

    let displayedProducts =
        [...cycleMartProducts];


    /* =====================================================
       FORMAT PRICE
    ===================================================== */

    function price(price) {

        return "KSh " +
            Number(price).toLocaleString("en-KE");

    }


    /* =====================================================
       CREATE PRODUCT CARD
    ===================================================== */

    function createProductCard(product) {

        const whatsappMessage =
            `Hello Cycle Mart, I am interested in the ${product.name} priced at ${price(product.price)}. Please provide more details.`;

        const whatsappURL =
            "https://wa.me/254762346683?text=" +
            encodeURIComponent(
                whatsappMessage
            );


        return `

            <article
                class="shop-product-card"
                data-product-id="${product.id}"
            >

                <div class="shop-product-image">

                    ${
                        product.badge
                        ?
                        `<span class="product-badge">
                            ${product.badge}
                        </span>`
                        :
                        ""
                    }

                    <img
                        src="${product.image}"
                        alt="${product.name} - Cycle Mart Ex-UK Bicycle"
                        loading="lazy"
                    >

                </div>


                <div class="shop-product-info">

                    <span class="product-category">
                        ${product.category}
                    </span>


                    <h3>
                        ${product.name}
                    </h3>


                    <p class="product-description">
                        ${product.description}
                    </p>


                    <div class="product-meta">

                        <span class="product-condition">
                            <i class="fa-solid fa-circle-check"></i>
                            ${product.condition}
                        </span>

                    </div>


                    <div class="product-bottom">

                        <strong class="product-price">
                            ${price(product.price)}
                        </strong>

                    </div>


                    <div class="product-actions">

                        <a
                            href="product.html?id=${product.id}"
                            class="view-product"
                        >

                            <i class="fa-solid fa-eye"></i>

                            View Details

                        </a>


                        <a
                            href="${whatsappURL}"
                            class="whatsapp-order"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-product="${product.name}"
                        >

                            <i class="fa-brands fa-whatsapp"></i>

                            Order

                        </a>

                    </div>

                </div>

            </article>

        `;

    }


    /* =====================================================
       DISPLAY PRODUCTS
    ===================================================== */

    function displayProducts(list) {

        if (!list.length) {

            productGrid.innerHTML = "";

            if (noProducts) {

                noProducts.style.display =
                    "block";

            }

            if (resultsCount) {

                resultsCount.textContent =
                    "0 bicycles found";

            }

            return;

        }


        if (noProducts) {

            noProducts.style.display =
                "none";

        }


        productGrid.innerHTML =
            list
                .map(createProductCard)
                .join("");


        if (resultsCount) {

            resultsCount.textContent =
                `${list.length} ${
                    list.length === 1
                        ? "bicycle"
                        : "bicycles"
                } found`;

        }

    }


    /* =====================================================
       POPULATE CATEGORY FILTER
    ===================================================== */

    if (categoryFilter) {

        const categories =
            [
                ...new Set(
                    cycleMartProducts.map(
                        product =>
                            product.category
                    )
                )
            ];


        categories.forEach(function (category) {

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                category;

            option.textContent =
                category;

            categoryFilter.appendChild(
                option
            );

        });

    }


    /* =====================================================
       FILTER + SEARCH + SORT
    ===================================================== */

    function updateProducts() {

        let results =
            [...cycleMartProducts];


        /* SEARCH */

        const searchTerm =
            searchInput
                ? searchInput.value
                    .trim()
                    .toLowerCase()
                : "";


        if (searchTerm) {

            results =
                results.filter(
                    function (product) {

                        return (

                            product.name
                                .toLowerCase()
                                .includes(searchTerm)

                            ||

                            product.category
                                .toLowerCase()
                                .includes(searchTerm)

                            ||

                            product.description
                                .toLowerCase()
                                .includes(searchTerm)

                        );

                    }
                );

        }


        /* CATEGORY */

        const category =
            categoryFilter
                ? categoryFilter.value
                : "all";


        if (
            category &&
            category.toLowerCase() !== "all"
        ) {

            results =
                results.filter(
                    function (product) {

                        return (
                            product.category ===
                            category
                        );

                    }
                );

        }


        /* SORT */

        const sort =
            sortFilter
                ? sortFilter.value
                : "default";


        if (sort === "price-low") {

            results.sort(
                function (a, b) {

                    return a.price - b.price;

                }
            );

        }


        else if (sort === "price-high") {

            results.sort(
                function (a, b) {

                    return b.price - a.price;

                }
            );

        }


        else if (sort === "name-az") {

            results.sort(
                function (a, b) {

                    return a.name.localeCompare(
                        b.name
                    );

                }
            );

        }


        else if (sort === "name-za") {

            results.sort(
                function (a, b) {

                    return b.name.localeCompare(
                        a.name
                    );

                }
            );

        }


        displayedProducts =
            results;


        displayProducts(
            displayedProducts
        );

    }


    /* =====================================================
       SEARCH EVENT
    ===================================================== */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            updateProducts
        );

    }


    /* =====================================================
       CATEGORY EVENT
    ===================================================== */

    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            updateProducts
        );

    }


    /* =====================================================
       SORT EVENT
    ===================================================== */

    if (sortFilter) {

        sortFilter.addEventListener(
            "change",
            updateProducts
        );

    }


    /* =====================================================
       INITIAL DISPLAY
    ===================================================== */

    displayProducts(
        displayedProducts
    );


    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    productGrid.addEventListener(
        "error",
        function (event) {

            if (
                event.target.tagName ===
                "IMG"
            ) {

                event.target.style.display =
                    "none";

                console.warn(
                    "Could not load bicycle image:",
                    event.target.src
                );

            }

        },
        true
    );


});
/* =========================================================
   CYCLE MART - PRODUCT DETAILS JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       GET PRODUCT ID FROM URL
       Example: product.html?id=5
    ===================================================== */

    const urlParams =
        new URLSearchParams(
            window.location.search
        );

    const productId =
        urlParams.get("id");


    /* =====================================================
       CHECK PRODUCT DATA
    ===================================================== */

    if (
        typeof cycleMartProducts === "undefined"
    ) {

        console.error(
            "Cycle Mart products.js has not been loaded."
        );

        return;

    }


    /* =====================================================
       FIND PRODUCT
    ===================================================== */

    let product = null;


    if (productId) {

        product =
            cycleMartProducts.find(
                function (item) {

                    return (
                        item.id ===
                        Number(productId)
                    );

                }
            );

    }


    /* =====================================================
       FALLBACK PRODUCT
       If no ID is supplied, show first product.
    ===================================================== */

    if (!product) {

        product =
            cycleMartProducts[0];

    }


    if (!product) {

        console.error(
            "No bicycle products are available."
        );

        return;

    }


    /* =====================================================
       HELPER - FORMAT PRICE
    ===================================================== */

    function formatProductPrice(price) {

        return (
            "KSh " +
            Number(price)
                .toLocaleString("en-KE")
        );

    }


    /* =====================================================
       GET PAGE ELEMENTS
    ===================================================== */

    const productImage =
        document.getElementById(
            "productImage"
        );

    const productName =
        document.getElementById(
            "productName"
        );

    const productPrice =
        document.getElementById(
            "productPrice"
        );

    const productCategory =
        document.getElementById(
            "productCategory"
        );

    const productCondition =
        document.getElementById(
            "productCondition"
        );

    const productDescription =
        document.getElementById(
            "productDescription"
        );

    const productBadge =
        document.getElementById(
            "productBadge"
        );

    const whatsappButton =
        document.getElementById(
            "productWhatsapp"
        );


    /* =====================================================
       DISPLAY PRODUCT IMAGE
    ===================================================== */

    if (productImage) {

        productImage.src =
            product.image;

        productImage.alt =
            `${product.name} - Cycle Mart Ex-UK Bicycle`;

    }


    /* =====================================================
       DISPLAY PRODUCT NAME
    ===================================================== */

    if (productName) {

        productName.textContent =
            product.name;

    }


    /* =====================================================
       DISPLAY PRICE
    ===================================================== */

    if (productPrice) {

        productPrice.textContent =
            formatProductPrice(
                product.price
            );

    }


    /* =====================================================
       DISPLAY CATEGORY
    ===================================================== */

    if (productCategory) {

        productCategory.textContent =
            product.category;

    }


    /* =====================================================
       DISPLAY CONDITION
    ===================================================== */

    if (productCondition) {

        productCondition.textContent =
            product.condition;

    }


    /* =====================================================
       DISPLAY DESCRIPTION
    ===================================================== */

    if (productDescription) {

        productDescription.textContent =
            product.description;

    }


    /* =====================================================
       DISPLAY BADGE
    ===================================================== */

    if (productBadge) {

        if (product.badge) {

            productBadge.textContent =
                product.badge;

            productBadge.style.display =
                "inline-flex";

        } else {

            productBadge.style.display =
                "none";

        }

    }


    /* =====================================================
       WHATSAPP ORDER
    ===================================================== */

    const whatsappMessage =
        `Hello Cycle Mart, I am interested in the ${product.name} priced at ${formatProductPrice(product.price)}. Please provide more details about availability and delivery.`;

    const whatsappURL =
        "https://wa.me/254762346683?text=" +
        encodeURIComponent(
            whatsappMessage
        );


    if (whatsappButton) {

        whatsappButton.href =
            whatsappURL;

        whatsappButton.target =
            "_blank";

        whatsappButton.rel =
            "noopener noreferrer";

    }


    /* =====================================================
       UPDATE PAGE TITLE
    ===================================================== */

    document.title =
        `${product.name} | Cycle Mart`;


    /* =====================================================
       UPDATE META DESCRIPTION
    ===================================================== */

    const metaDescription =
        document.querySelector(
            'meta[name="description"]'
        );


    if (metaDescription) {

        metaDescription.setAttribute(
            "content",
            `${product.name} - ${product.condition} bicycle available at Cycle Mart in Nakuru, Kenya. ${product.description}`
        );

    }


    /* =====================================================
       PRODUCT IMAGE ERROR HANDLING
    ===================================================== */

    if (productImage) {

        productImage.addEventListener(
            "error",
            function () {

                console.warn(
                    "Cycle Mart product image could not be loaded:",
                    product.image
                );

                productImage.alt =
                    "Bicycle image unavailable";

            }
        );

    }


    /* =====================================================
       RELATED PRODUCTS
    ===================================================== */

    const relatedGrid =
        document.getElementById(
            "relatedProducts"
        );


    if (relatedGrid) {

        const relatedProducts =
            cycleMartProducts
                .filter(
                    function (item) {

                        return (
                            item.id !==
                            product.id
                        );

                    }
                )
                .filter(
                    function (item) {

                        return (
                            item.category ===
                            product.category
                        );

                    }
                )
                .slice(0, 4);


        /*
         * If there are not enough products
         * from the same category, fill the
         * remaining spaces with other bikes.
         */

        if (
            relatedProducts.length < 4
        ) {

            cycleMartProducts
                .filter(
                    function (item) {

                        return (
                            item.id !==
                            product.id &&
                            !relatedProducts.some(
                                function (related) {

                                    return (
                                        related.id ===
                                        item.id
                                    );

                                }
                            )
                        );

                    }
                )
                .slice(
                    0,
                    4 -
                    relatedProducts.length
                )
                .forEach(
                    function (item) {

                        relatedProducts.push(
                            item
                        );

                    }
                );

        }


        relatedGrid.innerHTML =
            relatedProducts
                .map(
                    function (item) {

                        const message =
                            `Hello Cycle Mart, I am interested in the ${item.name}. Please provide more details.`;

                        const whatsapp =
                            "https://wa.me/254762346683?text=" +
                            encodeURIComponent(
                                message
                            );


                        return `

                            <article
                                class="related-product-card"
                            >

                                <a
                                    href="product.html?id=${item.id}"
                                    class="related-product-image"
                                >

                                    <img
                                        src="${item.image}"
                                        alt="${item.name} - Cycle Mart"
                                        loading="lazy"
                                    >

                                </a>


                                <div
                                    class="related-product-info"
                                >

                                    <span>
                                        ${item.category}
                                    </span>

                                    <h3>
                                        ${item.name}
                                    </h3>

                                    <strong>
                                        ${formatProductPrice(item.price)}
                                    </strong>


                                    <div
                                        class="related-product-actions"
                                    >

                                        <a
                                            href="product.html?id=${item.id}"
                                        >
                                            View Details
                                        </a>

                                        <a
                                            href="${whatsapp}"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            WhatsApp
                                        </a>

                                    </div>

                                </div>

                            </article>

                        `;

                    }
                )
                .join("");

    }


    /* =====================================================
       BREADCRUMB
    ===================================================== */

    const breadcrumbProduct =
        document.getElementById(
            "breadcrumbProduct"
        );


    if (breadcrumbProduct) {

        breadcrumbProduct.textContent =
            product.name;

    }


    /* =====================================================
       SHARE PRODUCT
    ===================================================== */

    const shareButton =
        document.getElementById(
            "shareProduct"
        );


    if (shareButton) {

        shareButton.addEventListener(
            "click",
            async function () {

                const shareData = {

                    title:
                        `${product.name} | Cycle Mart`,

                    text:
                        `Check out this ${product.name} at Cycle Mart.`,

                    url:
                        window.location.href

                };


                try {

                    if (
                        navigator.share
                    ) {

                        await navigator.share(
                            shareData
                        );

                    } else {

                        await navigator.clipboard.writeText(
                            window.location.href
                        );

                        alert(
                            "Product link copied!"
                        );

                    }

                } catch (error) {

                    console.log(
                        "Sharing cancelled."
                    );

                }

            }
        );

    }

});
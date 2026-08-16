```javascript
/* =========================================================
   CYCLE MART - GALLERY JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const galleryGrid =
        document.getElementById("galleryGrid");

    const lightbox =
        document.getElementById("galleryLightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxTitle =
        document.getElementById("lightboxTitle");

    const lightboxClose =
        document.getElementById("lightboxClose");

    const lightboxPrev =
        document.getElementById("lightboxPrev");

    const lightboxNext =
        document.getElementById("lightboxNext");


    /* =====================================================
       BICYCLE IMAGES
       ===================================================== */

    const galleryImages = [

        {
            image: "images/bikes/IMG-20260816-WA0022.jpg",
            title: "Ex-UK Bicycle 01"
        },

        {
            image: "images/bikes/IMG-20260816-WA0023.jpg",
            title: "Ex-UK Bicycle 02"
        },

        {
            image: "images/bikes/IMG-20260816-WA0024.jpg",
            title: "Ex-UK Bicycle 03"
        },

        {
            image: "images/bikes/IMG-20260816-WA0025.jpg",
            title: "Ex-UK Bicycle 04"
        },

        {
            image: "images/bikes/IMG-20260816-WA0026.jpg",
            title: "Ex-UK Bicycle 05"
        },

        {
            image: "images/bikes/IMG-20260816-WA0027.jpg",
            title: "Ex-UK Bicycle 06"
        },

        {
            image: "images/bikes/IMG-20260816-WA0028.jpg",
            title: "Ex-UK Bicycle 07"
        },

        {
            image: "images/bikes/IMG-20260816-WA0029.jpg",
            title: "Ex-UK Bicycle 08"
        },

        {
            image: "images/bikes/IMG-20260816-WA0030.jpg",
            title: "Ex-UK Bicycle 09"
        },

        {
            image: "images/bikes/IMG-20260816-WA0031.jpg",
            title: "Ex-UK Bicycle 10"
        },

        {
            image: "images/bikes/IMG-20260816-WA0032.jpg",
            title: "Ex-UK Bicycle 11"
        },

        {
            image: "images/bikes/IMG-20260816-WA0033.jpg",
            title: "Ex-UK Bicycle 12"
        },

        {
            image: "images/bikes/IMG-20260816-WA0034.jpg",
            title: "Ex-UK Bicycle 13"
        },

        {
            image: "images/bikes/IMG-20260816-WA0035.jpg",
            title: "Ex-UK Bicycle 14"
        },

        {
            image: "images/bikes/IMG-20260816-WA0036.jpg",
            title: "Ex-UK Bicycle 15"
        },

        {
            image: "images/bikes/IMG-20260816-WA0037.jpg",
            title: "Ex-UK Bicycle 16"
        },

        {
            image: "images/bikes/IMG-20260816-WA0038.jpg",
            title: "Ex-UK Bicycle 17"
        },

        {
            image: "images/bikes/IMG-20260816-WA0039.jpg",
            title: "Ex-UK Bicycle 18"
        },

        {
            image: "images/bikes/IMG-20260816-WA0040.jpg",
            title: "Ex-UK Bicycle 19"
        },

        {
            image: "images/bikes/IMG-20260816-WA0041.jpg",
            title: "Ex-UK Bicycle 20"
        },

        {
            image: "images/bikes/IMG-20260816-WA0042.jpg",
            title: "Ex-UK Bicycle 21"
        },

        {
            image: "images/bikes/IMG-20260816-WA0043.jpg",
            title: "Ex-UK Bicycle 22"
        },

        {
            image: "images/bikes/IMG-20260816-WA0044.jpg",
            title: "Ex-UK Bicycle 23"
        },

        {
            image: "images/bikes/IMG-20260816-WA0045.jpg",
            title: "Ex-UK Bicycle 24"
        }

    ];


    /* =====================================================
       CURRENT IMAGE
       ===================================================== */

    let currentIndex = 0;


    /* =====================================================
       RENDER GALLERY
       ===================================================== */

    function renderGallery() {

        if (!galleryGrid) {
            return;
        }


        galleryGrid.innerHTML =
            galleryImages
                .map(function (item, index) {

                    return `

                        <article
                            class="gallery-card"
                            data-index="${index}"
                        >

                            <button
                                type="button"
                                class="gallery-image-button"
                                aria-label="View ${item.title}"
                                data-index="${index}"
                            >

                                <img
                                    src="${item.image}"
                                    alt="${item.title} - Cycle Mart"
                                    loading="lazy"
                                >

                                <span class="gallery-overlay">

                                    <i class="fa-solid fa-expand"></i>

                                </span>

                            </button>


                            <div class="gallery-card-info">

                                <span>
                                    CYCLE MART
                                </span>

                                <h3>
                                    ${item.title}
                                </h3>

                            </div>

                        </article>

                    `;

                })
                .join("");


        addGalleryEvents();

    }


    /* =====================================================
       OPEN LIGHTBOX
       ===================================================== */

    function openLightbox(index) {

        if (!lightbox) {
            return;
        }


        currentIndex =
            Number(index);


        updateLightbox();


        lightbox.classList.add(
            "active"
        );


        document.body.classList.add(
            "lightbox-open"
        );


        if (lightboxClose) {

            lightboxClose.focus();

        }

    }


    /* =====================================================
       UPDATE LIGHTBOX
       ===================================================== */

    function updateLightbox() {

        const item =
            galleryImages[currentIndex];


        if (!item) {
            return;
        }


        if (lightboxImage) {

            lightboxImage.src =
                item.image;

            lightboxImage.alt =
                item.title +
                " - Cycle Mart";

        }


        if (lightboxTitle) {

            lightboxTitle.textContent =
                item.title;

        }

    }


    /* =====================================================
       CLOSE LIGHTBOX
       ===================================================== */

    function closeLightbox() {

        if (!lightbox) {
            return;
        }


        lightbox.classList.remove(
            "active"
        );


        document.body.classList.remove(
            "lightbox-open"
        );

    }


    /* =====================================================
       NEXT IMAGE
       ===================================================== */

    function nextImage() {

        currentIndex++;

        if (
            currentIndex >=
            galleryImages.length
        ) {

            currentIndex = 0;

        }


        updateLightbox();

    }


    /* =====================================================
       PREVIOUS IMAGE
       ===================================================== */

    function previousImage() {

        currentIndex--;

        if (
            currentIndex < 0
        ) {

            currentIndex =
                galleryImages.length - 1;

        }


        updateLightbox();

    }


    /* =====================================================
       GALLERY EVENTS
       ===================================================== */

    function addGalleryEvents() {

        const galleryButtons =
            document.querySelectorAll(
                ".gallery-image-button"
            );


        galleryButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const index =
                            this.dataset.index;

                        openLightbox(index);

                    }
                );

            }
        );

    }


    /* =====================================================
       CLOSE BUTTON
       ===================================================== */

    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    /* =====================================================
       NEXT BUTTON
       ===================================================== */

    if (lightboxNext) {

        lightboxNext.addEventListener(
            "click",
            nextImage
        );

    }


    /* =====================================================
       PREVIOUS BUTTON
       ===================================================== */

    if (lightboxPrev) {

        lightboxPrev.addEventListener(
            "click",
            previousImage
        );

    }


    /* =====================================================
       CLICK OUTSIDE IMAGE
       ===================================================== */

    if (lightbox) {

        lightbox.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    /* =====================================================
       KEYBOARD CONTROLS
       ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                !lightbox ||
                !lightbox.classList.contains(
                    "active"
                )
            ) {

                return;

            }


            if (
                event.key ===
                "Escape"
            ) {

                closeLightbox();

            }


            if (
                event.key ===
                "ArrowRight"
            ) {

                nextImage();

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                previousImage();

            }

        }
    );


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    document.addEventListener(
        "error",
        function (event) {

            if (
                event.target.tagName ===
                "IMG"
            ) {

                console.warn(
                    "Cycle Mart image could not be loaded:",
                    event.target.src
                );

            }

        },
        true
    );


    /* =====================================================
       INITIALIZE
       ===================================================== */

    renderGallery();

});
```

**Your `gallery.html` needs these matching IDs/classes** for this JavaScript to work:

```html
<div id="galleryGrid"></div>

<div
    id="galleryLightbox"
    class="gallery-lightbox"
>

    <button
        id="lightboxClose"
        type="button"
    >
        <i class="fa-solid fa-xmark"></i>
    </button>

    <button
        id="lightboxPrev"
        type="button"
    >
        <i class="fa-solid fa-chevron-left"></i>
    </button>

    <div class="lightbox-content">

        <img
            id="lightboxImage"
            src=""
            alt=""
        >

        <h3 id="lightboxTitle"></h3>

    </div>

    <button
        id="lightboxNext"
        type="button"
    >
        <i class="fa-solid fa-chevron-right"></i>
    </button>

</div>
```

And load it at the bottom of `gallery.html`:

```html
<script src="js/menu.js"></script>
<script src="js/main.js"></script>
<script src="js/gallery.js"></script>
```

This uses all **24 bicycle images** from `images/bikes/` and gives you a gallery with a fullscreen lightbox, previous/next controls, keyboard navigation, and mobile-friendly interaction.

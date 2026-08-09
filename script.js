/* =====================================================
   ALFIANDI
   Main JavaScript
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("open");

            document.body.classList.toggle(
                "no-scroll"
            );

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "open"
                    );

                    document.body.classList.remove(
                        "no-scroll"
                    );

                }
            );

        });

}


/* =====================================================
   DARK MODE
===================================================== */

const themeToggle =
    document.querySelector(".theme-toggle");


const savedTheme =
    localStorage.getItem("alfiandi-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark"
            );


            const isDark =
                document.body.classList.contains(
                    "dark"
                );


            localStorage.setItem(
                "alfiandi-theme",
                isDark
                    ? "dark"
                    : "light"
            );

        }
    );

}


/* =====================================================
   SEARCH
===================================================== */

const searchToggle =
    document.querySelector(".search-toggle");

const searchBox =
    document.querySelector(".search-box");

const closeSearch =
    document.querySelector("#closeSearch");

const searchInput =
    document.querySelector("#searchInput");


if (searchToggle && searchBox) {

    searchToggle.addEventListener(
        "click",
        function () {

            searchBox.classList.toggle(
                "open"
            );

            if (
                searchBox.classList.contains(
                    "open"
                )
            ) {

                setTimeout(
                    function () {

                        if (searchInput) {
                            searchInput.focus();
                        }

                    },
                    100
                );

            }

        }
    );

}


if (closeSearch && searchBox) {

    closeSearch.addEventListener(
        "click",
        function () {

            searchBox.classList.remove(
                "open"
            );

        }
    );

}


/* =====================================================
   SEARCH ENTER
===================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                const query =
                    searchInput.value
                    .trim();


                if (query.length > 0) {

                    alert(
                        "Pencarian: " +
                        query
                    );

                }

            }

        }
    );

}


/* =====================================================
   NEWSLETTER
===================================================== */

const newsletterForm =
    document.querySelector(
        "#newsletterForm"
    );


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                newsletterForm
                .querySelector(
                    "input"
                )
                .value;


            if (email) {

                alert(
                    "Terima kasih, " +
                    email +
                    " berhasil didaftarkan."
                );


                newsletterForm.reset();

            }

        }
    );

}


/* =====================================================
   ARTICLE SHARE
===================================================== */

function shareArticle() {

    const shareData = {

        title:
            document.title,

        text:
            "Baca tulisan Alfiandi",

        url:
            window.location.href

    };


    if (
        navigator.share
    ) {

        navigator.share(
            shareData
        );

    } else {

        navigator.clipboard
            .writeText(
                window.location.href
            )
            .then(
                function () {

                    alert(
                        "Link artikel berhasil disalin."
                    );

                }
            );

    }

}


/* =====================================================
   SCROLL ANIMATION
===================================================== */

const animatedElements =
    document.querySelectorAll(
        ".article-card, .sidebar-box, .related-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.1
        }
    );


animatedElements.forEach(
    function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(20px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(
            element
        );

    }
);


/* =====================================================
   ANIMATION CLASS
===================================================== */

const animationStyle =
    document.createElement("style");


animationStyle.textContent = `

    .article-card.visible,
    .sidebar-box.visible,
    .related-card.visible {

        opacity: 1 !important;

        transform:
            translateY(0) !important;

    }

`;


document.head.appendChild(
    animationStyle
);

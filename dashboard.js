document.addEventListener("DOMContentLoaded", function () {
    // mapping menu text -> file name
    const pages = {
        "Home": "home.html",
        "Upload Image": "upload.html",
        "Analytics": "analytics.html",
        "Reports": "reports.html",
        "Feedbacks": "feedback.html",
        "Community": "community.html",
        "Settings": "settings.html"
    };

    // find all menu links
    const links = document.querySelectorAll(".sidebar ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const text = link.innerText.trim();
            if (pages[text]) {
                e.preventDefault(); // stop default #
                window.location.href = pages[text]; // go to correct page
            }
        });
    });
});

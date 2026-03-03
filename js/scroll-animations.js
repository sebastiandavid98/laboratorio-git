document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("section, article");

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.3
    });

    sections.forEach(function (section) {
        section.classList.add("hidden");
        observer.observe(section);
    });

});
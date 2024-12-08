const themeRadio = document.querySelector('input[name="theme-selector"]');

themeRadio.addEventListener("change", (e) => {
    document.getElementsByTagName("body").classList.toggle("dark-mode");
});

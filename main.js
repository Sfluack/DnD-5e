const darkCheck = document.getElementById("dark-theme-check");

darkCheck.addEventListener("change", () => {
    (darkCheck.checked) ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")
});
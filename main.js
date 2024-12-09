const darkCheck = document.getElementById("dark-theme-check");

darkCheck.addEventListener("change", () => {
    if (darkCheck.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});
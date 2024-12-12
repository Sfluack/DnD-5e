class Window {
    constructor(close = true) {
        this.closeable = close;

        // Create the Window
        this.self = document.createElement("div");
        this.self.classList.add("window");

        // Create the Window Header
        this.header = document.createElement("header");
        this.heading = document.createElement("h4");
        this.heading.textContent = " ";
        this.header.appendChild(this.heading);
        this.self.appendChild(this.header);

        // Create the Window Body
        this.body = document.createElement("section");
        this.body.classList.add("window-body");
        this.self.appendChild(this.body);

        // Create the Close Button
        if (this.closeable) {
            const closeBtn = document.createElement("i");
            closeBtn.classList.add("fa-solid", "fa-xmark", "close-btn", "float-right");
            closeBtn.title = "Close";
            this.header.appendChild(closeBtn);
        }

        // Create the Collapse Button
        const collapseBtn = document.createElement("i");
        collapseBtn.classList.add("fa-solid", "fa-down-left-and-up-right-to-center", "collapse-btn", "float-right");
        collapseBtn.title = "Collapse";
        this.header.appendChild(collapseBtn);

        // Add Window to the Document Body
        document.body.appendChild(this.self);
    }
};

class WindowToggler extends Window {
    constructor() {
        super(false);
        this.self.id = "window-toggler";
        this.heading.textContent = "Window Toggler";

        // Create the Character Sheet Button
        this.charSheetBtn = document.createElement("i");
        this.charSheetBtn.title = "Character Sheet";
        this.charSheetBtn.role = "button";
        this.charSheetBtn.classList.add("fa-solid", "fa-person");
        this.charSheetBtn.addEventListener("click", () => {
            const cSheets = document.querySelectorAll(".character-sheet");
            if(cSheets.length < 1) {
// CREATE character sheet
            } else {
                cSheets.forEach(cSheet => {
                    const sBody = cSheet.getElementsByClassName("window-body");
                    sBody[0].classList.remove("hidden");
                });
            };
        });

        // Create the Notes Button
        this.notesBtn = document.createElement("i");
        this.notesBtn.title = "Notes";
        this.notesBtn.role = "button";
        this.notesBtn.classList.add("fa-solid", "fa-pen-to-square");

        // Create the Spells Button
        this.spellsBtn = document.createElement("i");
        this.spellsBtn.title = "Spells";
        this.spellsBtn.role = "button";
        this.spellsBtn.classList.add("fa-solid", "fa-list-ol");

        // Create the Book Viewer Button
        this.bookBtn = document.createElement("i");
        this.bookBtn.title = "Book Viewer";
        this.bookBtn.role = "button";
        this.bookBtn.classList.add("fa-solid", "fa-book-open");

        // Create the Dice Tray Button
        this.diceBtn = document.createElement("i");
        this.diceBtn.title = "Dice Tray";
        this.diceBtn.role = "button";
        this.diceBtn.classList.add("fa-solid", "fa-dice");

        // Create the Settings Button
        this.settingsBtn = document.createElement("i");
        this.settingsBtn.title = "Settings";
        this.settingsBtn.role = "button";
        this.settingsBtn.classList.add("fa-solid", "fa-gear");

        // Add Buttons to Window Body
        this.body.appendChild(this.charSheetBtn);
        this.body.appendChild(this.notesBtn);
        this.body.appendChild(this.spellsBtn);
        this.body.appendChild(this.bookBtn);
        this.body.appendChild(this.diceBtn);
        this.body.appendChild(this.settingsBtn);
    }
};

class CharacterSheet extends Window {
    constructor() {
        super();
        this.self.classList.add("character-sheet");
        this.heading.textContent = "Character Sheet";

        this.nameLbl = document.createElement("label");
        this.nameLbl.textContent = "Name: "
        this.nameField = document.createElement("input");
        this.nameField.type = "text";
        this.nameLbl.appendChild(this.nameField);
        this.nameLbl.appendChild(document.createElement("br"));

        this.classLbl = document.createElement("label");
        this.classLbl.textContent = "Class: "
        this.classField = document.createElement("input");
        this.classField.type = "text";
        this.classLbl.appendChild(this.classField);
        this.classLbl.appendChild(document.createElement("br"));

        this.body.appendChild(this.nameLbl);
        this.body.appendChild(this.classLbl);
    }
};

// Document Elements
const windows = document.querySelectorAll(".window");
const collapseBtns = document.getElementsByClassName("collapse-btn");
const closeBtns = document.getElementsByClassName("close-btn");
const darkToggle = document.getElementById("dark-theme-check");

// Window eventListeners
if (windows) {
    windows.forEach(wnd => {
        const headers = wnd.querySelectorAll("header");
        if (headers) {
            headers.forEach(header => {
                // Make Windows Draggable
                header.addEventListener("click", (e) => {
                    const dragElement = () => {
// RESUME HERE -- making element draggable!
                    };
                });
            });
        };
    });
};

// Collapse Button eventListeners
if(collapseBtns) {
    Object.keys(collapseBtns).forEach(btn => {
        collapseBtns[btn].addEventListener("click", (e) => {
            const parentWindow = collapseBtns[btn].parentElement.parentElement;
            if(!parentWindow.classList.contains("hidden") && (parentWindow.style.width || parentWindow.style.height)) {
                const preMinDims = [];
                preMinDims.push(parentWindow.style.width);
                preMinDims.push(parentWindow.style.height);
                sessionStorage.setItem(parentWindow.id + "-dimensions", JSON.stringify(preMinDims));
                parentWindow.removeAttribute("style");
            } else {
                const preMinDims = JSON.parse(sessionStorage.getItem(parentWindow.id + "-dimensions"));
                if(preMinDims) {
                    parentWindow.style.width = preMinDims[0];
                    parentWindow.style.height = preMinDims[1];
                    sessionStorage.removeItem(parentWindow.id + "-dimensions");
                }
            }
            parentWindow.getElementsByClassName("window-body")[0].classList.toggle("hidden");
        });
    });
};

// Close Button eventListeners
if(closeBtns) {
    Object.keys(closeBtns).forEach(btn => {
        closeBtns[btn].addEventListener("click", (e) => {
            const parentWindow = closeBtns[btn].parentElement.parentElement;
            parentWindow.classList.toggle("hidden");
        });
    });
};

// Dark-Mode Toggle Button eventListener
if (darkToggle) {
    darkToggle.addEventListener("change", () => {
        if (darkToggle.checked) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    });
};
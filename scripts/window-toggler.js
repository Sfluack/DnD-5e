export class WindowToggler extends Window {
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
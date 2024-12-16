import { ef } from './element-factory.js';
import { UIWindow } from './window.js';
import { CharacterSheet } from './window-character.js';

export class WindowManager extends UIWindow {
    constructor() {
        super(false, false);
        this.self.id = "window-manager";
        this.self.classList.add("nodrag");
        this.header.classList.add("text-center");
        this.heading.textContent = "Window Manager";

        // Create a visual indicator that the window grows
        this.growIcon = ef.i();
        this.growIcon.classList.add("fa-solid", "fa-arrow-up-wide-short", "grow-icon");
        this.header.appendChild(this.growIcon);

        // Create the Character Sheet Button
        this.charSheetBtn = ef.btn();
        //this.charSheetBtn.id = "wm-csheets";
        this.charSheetBtn.title = "Click to open all Character Sheets\nRight-click for New Character Sheet";
        this.charSheetBtn.classList.add("relative");
        this.charSheetBtni = ef.i();
        this.charSheetBtni.classList.add("fa-solid", "fa-person");
        this.charSheetCnt = ef.div();
        this.charSheetCnt.id = "csheet-cnt";
        this.charSheetCnt.textContent = "0";
        this.charSheetBtn.appendChild(this.charSheetBtni);
        this.charSheetBtn.appendChild(this.charSheetCnt);

        // Create the Notes Button
        this.notesBtn = ef.btn();
        //this.notesBtn.id = "wm-notes";
        this.notesBtn.title = "Notes";
        this.notesBtni = ef.i();
        this.notesBtni.classList.add("fa-solid", "fa-pen-to-square");
        this.notesBtn.appendChild(this.notesBtni);

        // Create the Spells Button
        this.spellsBtn = ef.btn();
        //this.spellsBtn.id = "wm-spells";
        this.spellsBtn.title = "Spells";
        this.spellsBtn.disabled = true;
        this.spellsBtni = ef.i();
        this.spellsBtni.classList.add("fa-solid", "fa-list-ol");
        this.spellsBtn.appendChild(this.spellsBtni);

        // Create the Book Viewer Button
        this.bookBtn = ef.btn();
        //this.bookBtn.id = "wm-books";
        this.bookBtn.title = "Book Viewer";
        this.bookBtni = ef.i();
        this.bookBtni.classList.add("fa-solid", "fa-book-open");
        this.bookBtn.appendChild(this.bookBtni);

        // Create the Dice Tray Button
        this.diceBtn = ef.btn();
        //this.diceBtn.id = "wm-dice";
        this.diceBtn.title = "Dice Tray";
        this.diceBtni = ef.i();
        this.diceBtni.classList.add("fa-solid", "fa-dice");
        this.diceBtn.appendChild(this.diceBtni);

        // Create the Settings Button
        this.settingsBtn = ef.btn();
        //this.settingsBtn.id = "wm-settings";
        this.settingsBtn.title = "Settings";
        this.settingsBtni = ef.i();
        this.settingsBtni.classList.add("fa-solid", "fa-gear");
        this.settingsBtn.appendChild(this.settingsBtni);

        // Add Buttons to Window Body
        this.body.appendChild(this.charSheetBtn);
        this.body.appendChild(this.notesBtn);
        this.body.appendChild(this.spellsBtn);
        this.body.appendChild(this.bookBtn);
        this.body.appendChild(this.diceBtn);
        this.body.appendChild(this.settingsBtn);
    };

    // Add window manager to DOM
    addWindowManagerToDocument() {
        this.addUIWindowToDocument();
        this.addWindowManagerEventListeners();
    };

    // Add event listeners
    addWindowManagerEventListeners() {
        // charsheetBtn - Unhide all character sheets
        this.charSheetBtn.addEventListener("click", () => {
            const cSheets = document.querySelectorAll(".character-sheet");
            if(cSheets.length > 0) {
                cSheets.forEach(cSheet => {
                    cSheet.classList.remove("hidden");
                });
            };
        });

        // charsheetBtn - Add a new character sheet
        this.charSheetBtn.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            const cSheets = document.querySelectorAll(".character-sheet");
            const cSheetIDs = [];
            const mismatchIDs = [];
            let nextID = 0;

            // Find numeric values of all cSheet ids
            cSheets.forEach(cSheet => {
                cSheetIDs.push(cSheet.id.slice(2));
            });

            // Sort the IDs from least to greatest
            cSheetIDs.sort((a, b) => a - b);

            // Compare IDs for mismatches
            cSheetIDs.forEach((id, i) => {
                if(id != i) {
                    mismatchIDs.push(i);
                }
            });

            // If mismatch found, use the first mismatch
            if(mismatchIDs.length > 0) {
                nextID = mismatchIDs[0];
            } else {
            // Otherwise, use the count of the cSheets
                nextID = cSheets.length;
            }

            const newChar = new CharacterSheet({id:nextID});
            newChar.addCharSheetToDocument();
            this.charSheetCnt.textContent = cSheets.length + 1;
        });

        // settingsBtn - Show/Hide settings window
        this.settingsBtn.addEventListener("click", () => {
            document.getElementById("settings-manager").classList.remove("hidden");
        });
    };
};
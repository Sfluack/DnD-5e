import { ef } from './element-factory.js';
import { UIWindow } from './window.js';

export class CharacterSheet extends UIWindow {
    constructor(props) {
        super(true, true);
        this.props = props;
        this.id = "c-" + this.props.id;
        this.self.id = this.id;
        this.self.classList.add("character-sheet");
        this.heading.textContent = "Character Sheet";

        // Create the Save Button
        this.saveBtn = ef.btn();
        this.saveBtn.title = "Save character";
        this.saveBtn.classList.add("save-btn", "float-right");
        this.saveBtni = ef.i();
        this.saveBtni.classList.add("fa-solid", "fa-floppy-disk");
        this.saveBtn.appendChild(this.saveBtni);        
        this.header.appendChild(this.saveBtn);

        // Create the Lock Button
        this.lockBtn = ef.btn();
        this.lockBtn.title = "Click to lock character sheet";
        this.lockBtn.classList.add("lock-btn", "float-right");
        this.lockBtni = ef.i();
        this.lockBtni.classList.add("fa-solid", "fa-lock-open");
        this.lockBtn.appendChild(this.lockBtni);
        this.header.appendChild(this.lockBtn);

        // Create the Delete Button
        this.deleteBtn = ef.btn();
        this.deleteBtn.title = "Delete character";
        this.deleteBtn.classList.add("delete-btn", "float-right");
        this.deleteBtni = ef.i();
        this.deleteBtni.classList.add("fa-solid", "fa-trash-can");
        this.deleteBtn.appendChild(this.deleteBtni);
        this.header.appendChild(this.deleteBtn);

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
    };

    // Add character sheet to DOM
    addCharSheetToDocument() {
        super.addUIWindowToDocument();
        this.addCharSheetListeners();
    }

    // Add event listeners
    addCharSheetListeners() {
        // saveBtn - Save the character to localStorage
        if(this.saveBtn) {
            this.saveBtn.addEventListener("click", () => {

            });
        };

        // lockBtn - Lock/Unlock the character for editing
        if(this.lockBtn) {
            this.lockBtn.addEventListener("click", () => {
                const isLocked = this.lockBtni.classList.contains("fa-lock");
                this.lockBtni.classList.toggle("fa-lock-open");
                this.lockBtni.classList.toggle("fa-lock");

                if(isLocked) {
                    this.lockBtn.title = "Click to lock character sheet";
                } else {
                    this.lockBtn.title = "Click to unlock character sheet";
                }
                

            });
        };

        // deleteBtn - Delete the character
        if(this.deleteBtn) {
            this.deleteBtn.addEventListener("click", () => {
                let res = confirm("Are you sure you wish to delete this character?\nThis is irreversible.");
                if(res) {
                    document.getElementById(this.id).remove();
                    this.clearWindowState();
                    const cSheets = document.querySelectorAll(".character-sheet");
                    const cSheetCnt = document.getElementById("csheet-cnt");
                    cSheetCnt.textContent = cSheets.length;
                }
            });
        };
    };

    
};
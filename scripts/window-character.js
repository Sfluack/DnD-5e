export class CharacterSheet extends Window {
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
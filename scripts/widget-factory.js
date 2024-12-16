export class SlidingToggle {
    #label = document.createElement("label");
    #input = document.createElement("input");
    #span = document.createElement("span");

    constructor(type = "checkbox") {
        this.#label.role = "button";
        if(type === "checkbox") this.#input.type = "checkbox";
        if(type === "radio") this.#input.type = "radio";
        this.#span.classList.add("slider");
        this.#label.appendChild(this.#input);
        this.#label.appendChild(this.#span);
    };

    setClass(elem, cls) {
        if (elem === "label") this.#label.classList.add(cls);
        if (elem === "input") this.#input.classList.add(cls);
        if (elem === "span") this.#span.classList.add(cls);
    };

    setClasses(elem, classArr) {
        classArr.forEach(cls => {
            if(elem === "label") this.#label.classList.add(cls);
            if(elem === "input") this.#input.classList.add(cls);
            if(elem === "span") this.#span.classList.add(cls);
        });
    };

    setStyle(elem, styl) {
        if (elem === "label") this.#label.style = styl;
        if (elem === "input") this.#input.style = styl;
        if (elem === "span") this.#span.style = styl;
    };

    setAttribute(elem, attr, val) {
        if(elem === "label") this.#label.setAttribute(attr, val);
        if(elem === "input") this.#input.setAttribute(attr, val);
        if(elem === "span") this.#span.setAttribute(attr, val);
    };

    setID(elem, id) {
        if (elem === "label") this.#label.id = id;
        if (elem === "input") this.#input.id = id;
        if (elem === "span") this.#span.id = id;
    };

    getID(elem) {
        if (elem === "label") return this.#label.id;
        if (elem === "input") return this.#input.id;
        if (elem === "span") return this.#span.id;
        return false;
    };

    getWidget() {
        return this.#label;
    }
};
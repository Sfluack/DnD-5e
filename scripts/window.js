export default class Window {
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
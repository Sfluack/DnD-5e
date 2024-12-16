import { ef } from './element-factory.js';

export class UIWindow {
    #closeable
    #collapsible
    #collapseBtn
    #collapseBtni
    #closeBtn
    #closeBtni
    constructor(collapse = true, close = true) {
        this.#closeable = close;
        this.#collapsible = collapse;
        
        // Create the Window
        this.self = ef.div();
        this.self.id = null;
        this.self.classList.add("window");

        // Create the Window Header
        this.header = ef.header();
        this.heading = ef.heading(4);
        this.heading.textContent = "Window";
        this.header.appendChild(this.heading);
        this.self.appendChild(this.header);

        // Create the Close Button
        if (this.#closeable) {
            this.#closeBtn = ef.btn();
            this.#closeBtn.title = "Close window";
            this.#closeBtn.classList.add("close-btn", "float-right");
            this.#closeBtni = ef.i();
            this.#closeBtni.classList.add("fa-solid", "fa-xmark");
            this.#closeBtn.appendChild(this.#closeBtni);
            this.header.appendChild(this.#closeBtn);
        };

        // Create the Collapse Button
        if(this.#collapsible) {
            this.#collapseBtn = ef.btn();
            this.#collapseBtn.title = "Collapse window";
            this.#collapseBtn.classList.add("close-btn", "float-right");
            this.#collapseBtni = ef.i();
            this.#collapseBtni.classList.add("fa-solid", "fa-down-left-and-up-right-to-center");
            this.#collapseBtn.appendChild(this.#collapseBtni);
            this.header.appendChild(this.#collapseBtn);
        };

        // Create the Window Body
        this.body = ef.section();
        this.body.classList.add("window-body");
        this.self.appendChild(this.body);
    };

    setWindowState(prop, val, windowID = this.self.id) {
        const windowState = JSON.parse(sessionStorage.getItem(windowID)) || {};
        windowState[prop] = val;
        sessionStorage.setItem(windowID, JSON.stringify(windowState));
    };

    getWindowState(prop, windowID = this.self.id) {
        return (JSON.parse(sessionStorage.getItem(windowID))[prop]);
    };

    delWindowState(prop, windowID = this.self.id) {
        const windowState = JSON.parse(sessionStorage.getItem(windowID)) || {};
        if(windowState[prop]) delete windowState[prop];
        sessionStorage.setItem(windowID, JSON.stringify(windowState));
    };

    clearWindowState(windowID = this.self.id) {
        sessionStorage.removeItem(windowID);
        localStorage.removeItem(windowID);
    };

    // Add Window to the Document Body
    addUIWindowToDocument() {
        document.body.appendChild(this.self);
        this.addUIWindowListeners();
    };

    // Add event listeners
    addUIWindowListeners() {
        // this.self.id resize
        

        // <header> - Allow the window to be moved
        if (this.header) {
            this.header.addEventListener("mousedown", (e) => {
                if (e.preventDefault()) e.preventDefault();
                // Only on LEFT mouse button down & element is considered draggable
                if (e.button === 0 && !this.self.classList.contains("nodrag")) {
                    let offsetX, offsetY, newX, newY;
                    offsetX = e.clientX - this.self.offsetLeft;
                    offsetY = e.clientY - this.self.offsetTop;
                    newX = offsetX;
                    newY = offsetY;

                    // Move window when mouse is moved
                    const onMouseMove = (e) => {
                        if (e.preventDefault()) e.preventDefault();
                        newX = e.clientX - offsetX;
                        newY = e.clientY - offsetY;
                        newX = Math.max(0, Math.min(window.innerWidth - this.self.offsetWidth, newX));
                        newY = Math.max(0, Math.min(window.innerHeight - this.self.offsetHeight, newY));
                        this.self.style.left = `${newX}px`;
                        this.self.style.top = `${newY}px`;
                    };

                    // Remove event listeners on mouseup, and record the window's coordinates
                    const onMouseUp = () => {
                        document.removeEventListener("mousemove", onMouseMove);
                        document.removeEventListener("mouseup", onMouseUp);
                        //this.setWindowState("window-coords", { x: this.self.offsetLeft, y: this.self.offsetTop });
                    };

                    // Add new event listeners for mousemove and mouseup
                    document.addEventListener("mousemove", onMouseMove);
                    document.addEventListener("mouseup", onMouseUp);
                }
            });

        }

        // closeBtn - Hide the window
        if (this.#closeBtn) {
            this.#closeBtn.addEventListener("click", () => {
                this.self.classList.toggle("hidden");
            });
        };

        // collapseBtn - Collapse the body of the window
        if (this.#collapseBtn) {
            this.#collapseBtn.addEventListener("click", () => {
                // If window is collapsed, expand it!
                if (this.self.classList.contains("collapsed")) {
                    const windowSize = this.getWindowState("window-size")  || {};
                    if(windowSize) this.self.style.width = windowSize.width + "px";
                    if(windowSize) this.self.style.height = windowSize.height + "px";
                    this.header.style.borderBottom = "";
                    this.delWindowState("window-size");

                // If window is not collapsed, collapse it!
                } else {
                    // Record the window's body size
                    this.setWindowState("window-size", { width: this.self.offsetWidth, height: this.self.offsetHeight });
                    this.self.style.width = "";
                    this.self.style.height = "";
                    this.header.style.borderBottom = "none";
                }
                this.#collapseBtni.classList.toggle("fa-up-right-and-down-left-from-center");
                this.#collapseBtni.classList.toggle("fa-down-left-and-up-right-to-center");
                this.body.classList.toggle("hidden");
                this.self.classList.toggle("collapsed");
                this.self.classList.toggle("noresize");
            });
        }
    };
};
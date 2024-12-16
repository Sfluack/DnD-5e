import { ef } from './element-factory.js';
import { UIWindow } from './window.js';
import { SlidingToggle } from './widget-factory.js';

export class SettingsManager extends UIWindow {
    #appSettings
    constructor() {
        super(true, true);
        this.#appSettings = localStorage.getItem("app-settings") || sessionStorage.getItem("app-settings") || {};
        this.self.id = "settings-manager";
        this.self.classList.add("hidden");
        this.heading.textContent = "Settings";

        
        this.themeDiv = ef.div();
        
        this.dModeLbl = ef.label();
        this.dModeLbl.textContent = "Dark Mode";
        
        this.dModeTog = new SlidingToggle("checkbox");
        this.dModeTog.setClasses("label", ["toggle-switch", "rounded"]);
        this.dModeTog.setStyle("label", "margin-left: 5px;");
        this.dModeTog.setID("input", "dark-theme-check");
        this.dModeLbl.appendChild(this.dModeTog.getWidget());
        this.themeDiv.appendChild(this.dModeLbl);
        this.body.appendChild(this.themeDiv);
    };
    
    addClickListener (elem, fnct) {
        let element;
        if(elem === "label") element = document.getElementById(this.getID("label"));
        if(elem === "input") element = document.getElementById(this.getID("input"));
        if(elem === "span") element = document.getElementById(this.getID("span"));
        element.addEventListener("click", fnct);
    }
};
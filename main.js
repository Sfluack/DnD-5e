import { ef } from './scripts/element-factory.js';
import { WindowManager } from './scripts/window-manager.js';
import { SettingsManager } from './scripts/window-settings.js';
import { CharacterSheet } from './scripts/window-character.js';

const winMan = new WindowManager;
winMan.addWindowManagerToDocument();

const setMan = new SettingsManager;
setMan.addUIWindowToDocument();

// Get Handles for Document Elements
const windows = document.querySelectorAll(".window");
const collapseBtns = document.getElementsByClassName("collapse-btn");
const closeBtns = document.getElementsByClassName("close-btn");
const darkToggle = document.getElementById("dark-theme-check");

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
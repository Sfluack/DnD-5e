export function div() { return document.createElement("div"); }
export function btn() { return document.createElement("button"); }
export function header() { return document.createElement("header"); }
export function foot() { return document.createElement("footer"); }
export function section() { return document.createElement("section"); }
export function aside() { return document.createElement("aside"); }
export function i() { return document.createElement("i"); }
export function table() { return document.createElement("table"); }
export function tr() { return document.createElement("tr"); }
export function th() { return document.createElement("th"); }
export function td() { return document.createElement("td"); }
export function heading(n = 1) { if(n == 1 || n == 2 || n == 3 || n == 4 || n == 5 || n == 6) return document.createElement(`h${n}`); }
export function p() { return document.createElement("p"); }
export function ul() { return document.createElement("ul"); }
export function ol() { return document.createElement("ol"); }
export function li() { return document.createElement("li"); }
export function br() { return document.createElement("br"); }
export function fieldset() { return document.createElement("fieldset"); }
export function legend() { return document.createElement("legend"); }
export function select() { return document.createElement("select"); }
export function option() { return document.createElement("option"); }
export function form() { return document.createElement("form"); }
export function label() { return document.createElement("label"); }

// Input & Types
export function input() { return document.createElement("input"); }
export function button() { const input = document.createElement("input"); input.type = "button"; return input; }
export function checkbox() { const input = document.createElement("input"); input.type = "checkbox"; return input; }
export function color() { const input = document.createElement("input"); input.type = "color"; return input; }
export function date() { const input = document.createElement("input"); input.type = "date"; return input; }
export function email() { const input = document.createElement("input"); input.type = "email"; return input; }
export function hidden() { const input = document.createElement("input"); input.type = "hidden"; return input; }
export function password() { const input = document.createElement("input"); input.type = "password"; return input; }
export function radio() { const input = document.createElement("input"); input.type = "radio"; return input; }
export function reset() { const input = document.createElement("input"); input.type = "reset"; return input; }
export function submit() { const input = document.createElement("input"); input.type = "submit"; return input; }
export function tel() { const input = document.createElement("input"); input.type = "tel"; return input; }
export function text() { const input = document.createElement("input"); input.type = "text"; return input; }
export function number() { const input = document.createElement("input"); input.type = "number"; return input; }


export const ef = {
    div, btn, header, foot, section, aside, i, table, tr, th, td, heading,
    p, ul, ol, li, br, fieldset, legend, select, option, form, label, input,
    button, checkbox, color, date, email, hidden, password, radio, reset,
    submit, tel, text, number
};
let out = document.getElementById("content");
let ui = document.getElementById("ui");

window.onload = lauch()

function lauch() {
    getcolor()
    out.innerHTML = `
            <select id="color" onchange="setcolor()">
                <option value="white">Default</option>
                <option value="crimson">Red</option>
                <option value="yellow">Yellow</option>
                <option value="springgreen">Green</option>
                <option value="cornflowerblue">Blue</option>
            </select>
        `;
}

function setcolor() {
    let sel = document.getElementById("color").value;
    console.log(sel);
    setBGC(sel)

    localStorage.setItem("color",sel)
}

function setBGC(color) {
    ui.style.backgroundColor = color
}

function getcolor() {
    let sel = localStorage.getItem("color")
    setBGC(sel)
}


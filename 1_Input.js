let out = document.getElementById("content");
let hey = document.getElementById("greeting");

window.onload = wakeup() 
    
function wakeup() {
    let fname = localStorage.getItem("firstname");
    let lname = localStorage.getItem("lastname");
    if (fname === null && lname === null) {
        hey.innerHTML = `Would you like to register?`
        out.innerHTML = `<button onclick="change()">Add name</button>`;
    }
    else {   
        hey.innerHTML = `Welcome back ${fname} ${lname}`;
        out.innerHTML = `<button onclick="change()">Change name</button>`;
    }
        
        
}

function change() {
    hey.innerHTML = `Register name`;
    out.innerHTML = `
        <input type="text" id="firstname" placeholder="Firstname..." required>
        <input type="text" id="lastname" placeholder="Lastname..." required>
        <button onclick="conf(),wakeup()">Confirm</button>
        <button onclick="wakeup()">Cancel</button>
        `;
}

function conf() {
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;

    localStorage.setItem("firstname", fname);
    localStorage.setItem("lastname", lname);
}

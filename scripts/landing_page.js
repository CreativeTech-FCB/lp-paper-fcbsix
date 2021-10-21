let start = function() {
    console.log(document.getElementById("validationCustom01"))
}

let saveLocalStorage = function(data) {
    for (let i = 0; i < data.length; i++) {
        localStorage.setItem(data[i].name, data[i].email);
    }
}

window.addEventListener("load", start())
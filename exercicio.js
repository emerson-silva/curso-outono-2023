const submitLoginFake = (event) => {
//const submitLoginFake = function(event) {
    event.preventDefault(); // evitar reload da pagina
    //let nameInput = document.getElementById("name");
    let nameInput = document.querySelector('input[name="name"]');
    updateUserName(nameInput.value);
}

const updateUserName = (name) => {
    if (name && name.length>0) {
        let nameTag = document.getElementById('userName');
        nameTag.innerText = name; // usar innerText
    }
}

window.onload = () => {
    let element = document.getElementById ("loginFake");
    element.addEventListener("submit", submitLoginFake);
};

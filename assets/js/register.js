window.addEventListener('load', () => {

    const formulario = document.querySelector("#formularioRegistro");
    const inputUsuario = document.querySelector("#usuario");
    const inputPassword = document.querySelector("#password");
    const verPassword = document.querySelector("#verPassword");

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        iniciarValidacionFormulario();
    })

    verPassword.addEventListener("click", () => {

        if (inputPassword.type == 'text') {
            inputPassword.type = "password"
        } else {
            inputPassword.type = "text"
        }
    })

    const iniciarValidacionFormulario = () => {
        const  valUsuario = inputUsuario.value.trim();
        const valPassword = inputPassword.value.trim();
        const ready = [];

        if (!valUsuario.length > 0) {
            inputFail(inputUsuario, "line-red");
            ready[0] = false;
        } else {
            inputOk(inputUsuario, "line-red");
            localStorage.setItem("usuario", valUsuario)
            ready[0] = true;
        }
        
        if (!valPassword.length > 0) {
            inputFail(inputPassword, "line-red");
            ready[1] = false;
        } else {
            inputOk(inputPassword, "line-red");
            localStorage.setItem("Password", valPassword)
            ready[1] = true;
        }

        let cambiar = ready.every(key => key == true)

        if(cambiar){
            window.location.href="assets/html/introduce.html";
        }
    }

    const inputFail = (input, clase) => {
        input.classList.add(clase)
    }
    const inputOk = (input, clase) => {
        input.classList.remove(clase)
    }
})
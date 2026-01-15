const save = document.getElementById('save');
let nameInput = document.getElementById('txt_names');
let lastNameInput = document.getElementById('txt_lastnames');
let emailInput = document.getElementById('txt_email');
let tableBody = document.getElementById('table_body');
let users = [];

save.addEventListener("click", dataSave);

function dataSave(event) {
    event.preventDefault();

    if (txt_names.value != "" && txt_lastnames.value != "" && txt_email.value != "") {
        txt_names.classList.add('is-valid')
        txt_names.classList.remove('is-invalid')
        txt_lastnames.classList.add('is-valid')
        txt_lastnames.classList.remove('is-invalid')
        txt_email.classList.add('is-valid')
        txt_email.classList.remove('is-invalid')

        Swal.fire({
            title: "¡Bienvenido!",
            text: "Información validada adecuadamente.",
            icon: "success"
        });

        const newUser = { 
        name: nameInput.value, 
        lastName: lastNameInput.value, 
        email: emailInput.value 
        }; 
        
        users.push(newUser);

        renderTable(); 
        clearInputs(); 

    } else {
        txt_names.classList.add('is-invalid')
        txt_names.classList.remove('is-valid')
        txt_lastnames.classList.add('is-invalid')
        txt_lastnames.classList.remove('is-valid')
        txt_email.classList.add('is-invalid')
        txt_email.classList.remove('is-valid')

        Swal.fire({
            title: "¡Error!",
            text: "Debe escribir sus datos, intente nuevamente.",
            icon: "error"
        });
    }
}

function renderTable() { 
    tableBody.innerHTML = ""; 
    
    users.forEach((user, index) => {
        const row = document.createElement("tr"); 
        
        row.innerHTML = `
            <th scope="row">${index + 1}</th> 
            <td>${user.name}</td> 
            <td>${user.lastName}</td> 
            <td>${user.email}</td> 
            <td> 
                <button class="btn btn-primary btn-sm">Detalles</button> 
                <button class="btn btn-warning btn-sm">Editar</button> 
                <button class="btn btn-danger btn-sm">Eliminar</button> 
            </td> 
        `;

        // DETALLES
        row.querySelector(".btn-primary").addEventListener("click", () => { 
            alert(`Nombre: ${user.name}\nApellido: ${user.lastName}\nEmail: ${user.email}`); 
        }); 

        // EDITAR
        row.querySelector(".btn-warning").addEventListener("click", () => { 
            nameInput.value = user.name; 
            lastNameInput.value = user.lastName; 
            emailInput.value = user.email; 
            
            users.splice(index, 1); 
            renderTable(); 
        }); 

        // ELIMINAR
        row.querySelector(".btn-danger").addEventListener("click", () => { 
            users.splice(index, 1); 
            renderTable(); 
        }); 

        tableBody.appendChild(row); 
    });
}

function clearInputs() {
    nameInput.value = ""; 
    lastNameInput.value = ""; 
    emailInput.value = ""; 
}

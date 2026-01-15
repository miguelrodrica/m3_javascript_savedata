save = document.getElementById('save')
txt_names = document.getElementById('txt_names')
txt_lastnames = document.getElementById('txt_lastnames')
table_body = document.getElementById('table_body')

details_btn = document.getElementById('details_btn')
edit_btn = document.getElementById('edit_btn')
delete_btn = document.getElementById('delete_btn')

save.addEventListener('click', validation)

function validation() {
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

        row = `
            <tr>
            <td></td>
            <td>${txt_names.value}</td>
            <td>${txt_lastnames.value}</td>
            <td>${txt_email.value}</td>
            <td>
                <a href="#" class="btn btn-primary" id="details_btn">Detalles</a>
                <a href="#" class="btn btn-sm btn-warning" id="edit_btn">Editar</a>
                <a href="#" class="btn btn-sm btn-danger" id="delete_btn">Eliminar</a>
            </td>
            </tr>
        `

        table_body.innerHTML += row
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

details_btn.addEventListener('click',function(){
    console.log('Si funciona')
})

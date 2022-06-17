const est = document.querySelector('#estudiantes'); // Tabla estudiantes
const form1 = document.querySelector('#formulario1');
const form2 = document.querySelector('#formulario2');
const form3 = document.querySelector('#formulario3');
const btnAgregar = document.querySelector('#agregar');
const btnActualizar = document.querySelector('#actualizar');
const btnBuscar = document.querySelector('#buscar');
const btnEliminar = document.querySelector('#eliminar');
const estudiante = document.querySelector('#estudiante');


eventListener();
function eventListener(){

    obtenerDatos();
    est.addEventListener('click',llenarFormularioDesdeTabla);
    form1.addEventListener('submit',enviarData);
    // btnAgregar.addEventListener('click',enviarData);
    btnActualizar.addEventListener('click',updateData);
    btnBuscar.addEventListener('click',buscarId);
    btnEliminar.addEventListener('click',eliminarId);
}

function obtenerDatos(){
    const url = 'https://uniguajira.herokuapp.com/mostrar/estudiantes';

    fetch(url)
        .then(resp => 
            resp.json()
            
        
        )
        .then(data => cargarTabla(data))
        .catch(err => console.log(err))
}

function cargarTabla(res){
    est.innerHTML = '';
    res.estudiante.forEach(element => {


        est.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.nombre}</td>
                <td>${element.codigo}</td>
                <td>${element.direccion}</td>
                <td>${element.activo}</td>
                <td>${element.createdAt}</td>
                <td>${element.updatedAt}</td>
            </tr>`;

    });

}

function llenarFormularioDesdeTabla(e){
 
    form3.childNodes[1].value = e.path[1].childNodes[1].outerText;
    form3.childNodes[3].value = e.path[1].childNodes[3].outerText;
    form3.childNodes[5].value = e.path[1].childNodes[5].outerText;
    form3.childNodes[7].value = e.path[1].childNodes[7].outerText;

}

function enviarData(e) {
    const url = 'https://uniguajira.herokuapp.com/crear/estudiante';

    console.log({nombre:form1.childNodes[1].value,	codigo: form1.childNodes[3].value,	direccion: form1.childNodes[5].value});

    fetch(url,{
        method: 'POST',
        body: JSON.stringify({nombre:form1.childNodes[1].value,	codigo: form1.childNodes[3].value,	direccion: form1.childNodes[5].value}),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(resp => 
            resp.json()
            
        
        )
        .then(data => location.reload())
        .catch(err => console.log(err))
}

function updateData(e) {
    const url = `https://uniguajira.herokuapp.com/update/estudiante/${form3.childNodes[1].value}`;

    fetch(url,{
        method: 'PATCH',
        body: JSON.stringify({nombre:form3.childNodes[3].value,	codigo: form3.childNodes[5].value,	direccion: form3.childNodes[7].value}),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(resp => 
            resp.json()
            
        
        )
        .then(data => location.reload())
        .catch(err => console.log(err))
}

function buscarId(e) {
    console.log(form2.childNodes[1].value);
    const url = `https://uniguajira.herokuapp.com/mostrar/estudiante/${form2.childNodes[1].value}`;
    
    fetch(url)
        .then(resp => 
            resp.json()
            
        
        )
        .then((data) => {
            estudiante.innerHTML = `
            <li class="list-group-item"><b>ID:</b> ${data.estudiante.id}</li>
            <li class="list-group-item"><b>Nombre:</b> ${data.estudiante.nombre}</li>
            <li class="list-group-item"><b>Código:</b> ${data.estudiante.codigo}</li>
            <li class="list-group-item"><b>Dirección:</b> ${data.estudiante.direccion}</li>`;
        })
        .catch(err => console.log(err))
}

function eliminarId(e) {
    console.log(form2.childNodes[1].value);
    const url = `https://uniguajira.herokuapp.com/delete/estudiante/${form2.childNodes[1].value}`;
    
    fetch(url,{
        method: 'PATCH',
        headers: {
            "Content-type": "application/json"
        }
        })
        .then(resp => 
            resp.json()
            
        
        )
        .then((data) => {
            location.reload()           
        })
        .catch(err => console.log(err))
}


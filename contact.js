const contacto = [{
    id: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    ubicaciones: {
        ciudad: "",
        direccion: ""
    }
}]

const contactos = [contacto];

function nuevoContacto(contacto){
    contactos.push(contacto);
}

nuevoContacto({
    id: "1000",
    nombres: "Sandra",
    apellidos: "Milena",
    telefono: "3206557819",
    ubicaciones: {
        ciudad: "Curumaní",
        direccion: "Calle 10"
    }
});

function borrarContacto(){
    contactos.pop();
}

borrarContacto();

console.log(contactos);
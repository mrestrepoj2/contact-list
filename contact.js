const contactos=["María Alejandra", "Daniel Restrepo", "Belén López"];

function agregarContacto($){
    contactos.push($);
}

agregarContacto("Daniel");

function borrarContacto(){
    contactos.pop();
}

borrarContacto();

console.log(contactos);

for (let i = 0; i < contactos.length; i++) {
    const element = contactos[i];
    console.log(element);
    
}
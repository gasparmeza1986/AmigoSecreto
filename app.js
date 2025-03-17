// Declarar un array para almacenar los nombres de los amigos
let listaDeAmigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y al final

    // Validar la entrada: asegurarse de que no esté vacía
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    listaDeAmigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista en la interfaz
    actualizarLista();
}
    function actualizarLista() {
        // Obtener el elemento de la lista
        const listaHTML = document.getElementById("listaAmigos");
    
        // Limpiar la lista existente
        listaHTML.innerHTML = "";
    
        // Iterar sobre el arreglo amigos y crear elementos <li> para cada uno
        for (let i = 0; i < listaDeAmigos.length; i++) {
            const li = document.createElement("li");
            li.textContent = listaDeAmigos[i]; // Asignar el nombre del amigo al <li>
            listaHTML.appendChild(li); // Agregar el elemento <li> a la lista
        }
    }

    function sortearAmigo() {
        // Validar que haya amigos en la lista
        if (listaDeAmigos.length === 0) {
            alert("No hay amigos en la lista para sortear.");
            return;
        }
    
        // Generar un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    
        // Obtener el nombre sorteado
        const amigoSorteado = listaDeAmigos[indiceAleatorio];
    
        // Mostrar el resultado en el HTML
        const resultadoHTML = document.getElementById("resultado");
        resultadoHTML.innerHTML = `<li>${amigoSorteado}</li>`;
    }
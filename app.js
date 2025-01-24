let listaAmigos = [];
//agregar amigo a la lista
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim().toLowerCase();
    amigo = amigo.replace(/[^a-z0-9\s]/gi, '');
    if(amigo == '') {
        alert("El nombre no puede estar vacio.")
        return;
    }else if(listaAmigos.includes(amigo)){
        alert('El amigo ya esta en la lista');
        limpiarInput();
        return;
    }else{
        listaAmigos.push(amigo);
        document.getElementById('ButtonLimpiar').removeAttribute('disabled');
        limpiarInput();
        limpiarAmigos();
        limpiarResultado();

        for(let nombre of listaAmigos){
            let li = document.createElement('li');
            li.textContent = nombre;
            document.getElementById('listaAmigos').appendChild(li);
            
        }
    }   
}
//sortear ganador
function sortearAmigo() {
    if(listaAmigos == 0){
        alert('No hay amigos en la lista');
        return;
    }else{
        limpiarAmigos();
        let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        limpiarResultado();
        let li = document.createElement('li');
        li.textContent = `Tu amigo secreto es: ${amigoSorteado}`;
        document.getElementById('resultado').appendChild(li);
        reiniciarJuego();
    }
}
//Verificar si la lista esta vacia
function verificarLista(){
    if (listaAmigos.length === 0){
    let li = document.createElement('li');
    li.textContent = 'Lista vacia';
    document.getElementById('listaAmigos').appendChild(li);
    document.getElementById('ButtonLimpiar').setAttribute('disabled', true);
    return false;
    }
}
//Reiniciar juego
function reiniciarJuego(){
    listaAmigos = [];
    limpiarAmigos();
    verificarLista();

}

//Limpiar textos
function limpiarAmigos() {
    document.getElementById('listaAmigos').innerHTML = '';
}

function limpiarInput() {
    document.getElementById('amigo').value = '';
}


function limpiarResultado(){
    document.getElementById('resultado').innerHTML = '';
}

//eventos
document.getElementById('amigo').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});



verificarLista();
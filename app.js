let listaAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
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
        for (let i = 0; i < listaAmigos.length; i++) {
            let li = document.createElement('li');
            li.textContent = listaAmigos[i];
            document.getElementById('listaAmigos').appendChild(li);
        }
    }   
}

function sortearAmigo() {
    if(listaAmigos == 0){
        alert('No hay amigos en la lista');
    }else{
        limpiarAmigos();
        let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        document.getElementById('resultado').innerHTML = '';
        let li = document.createElement('li');
        li.textContent = `Tu amigo secreto es: ${amigoSorteado}`;
        document.getElementById('resultado').appendChild(li);
        reiniciarJuego();
    }
}



function verificarLista(){
    if (listaAmigos.length === 0){
    let li = document.createElement('li');
    li.textContent = 'Lista vacia';
    document.getElementById('listaAmigos').appendChild(li);
    document.getElementById('ButtonLimpiar').setAttribute('disabled', true);
    return false;
    }
}

function reiniciarJuego(){
    listaAmigos = [];
    limpiarAmigos();
    verificarLista();

}

function eventoEnter() {
    document.getElementById('amigo').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            agregarAmigo();
        }
    });
}

function limpiarAmigos() {
    document.getElementById('listaAmigos').innerHTML = '';
}

function limpiarInput() {
    document.getElementById('amigo').value = '';
}


function limpiarResultado(){
    document.getElementById('resultado').innerHTML = '';
}

verificarLista();
eventoEnter();
// act1
function ejer1() {
    function act1() {
        const urlActual = document.getElementById("info");
        urlActual.textContent = window.location.href;

        const agenteUser = document.getElementById("user");
        agenteUser.textContent = window.navigator.userAgent;

        const anchoAlto = document.getElementById("tam");
        anchoAlto.textContent = window.screen.availWidth + " " + window.screen.availHeight;

        const lengua = document.getElementById("Idioma")
        lengua.textContent = window.navigator.language

    }

    act1();
}

function ejer2(){
    function act2() {
    const ventanaAncho = window.outerWidth;
    const ventanaAlto = window.outerHeight;
    const visibleAncho = window.innerWidth;
    const visibleAlto = window.innerHeight;
    window.alert("Dimensiones de la ventana:\n" + 
        "Ancho exterior: " + ventanaAncho + "\n" + 
        "Alto exterior: " + ventanaAlto + "\n" + 
        "Ancho visible: " + visibleAncho + "\n" + 
        "Alto visible: " + visibleAlto);
}
}

function act3(){
    function volver(){
    window.history.back();
}

function reload(){
    window.location.reload();
}}

function iniciar(){

}

const contador = setInterval(()=> {
    if(segundos > 0){
    console.log("Quedan: " + segundos + " segundos");
    segundos--;
    }
    else{
        clearInterval(contador);
        window.alert(mensaje)
        }
    }, 1000);
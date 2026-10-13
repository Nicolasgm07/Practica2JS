// act1
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

// act2
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

// act3
    function volver(){
    window.history.back();
}

function reload(){
    window.location.reload();
};

// act4
let segundos = 30;
let temporizador = null;
document.getElementById("iniciar").onclick = iniciar;
document.getElementById("detener").onclick = detener;

function iniciar(){
    if(temporizador == null && segundos > 0){
        temporizador = setInterval(function(){
            segundos--;
            document.getElementById("tiempo").textContent = segundos + " segundos";

            if(segundos == 0){
                clearInterval(temporizador);
                temporizador = null;
                alert("El tiempo ha terminado");
            }
        }, 1000);
    }
}

function detener(){
    clearInterval(temporizador);
    temporizador = null;


}

//  act5
    function abrirVentana(){
    window.open("https://google.com");
}

function cerrarVentana(){
    window.close();
}

// Act6

function cambiarFondo(){
    let fondo = window.confirm("Deseas cambiar el fondo?");
    if(fondo == true){
        let color = window.prompt("Que color deseas aplicar?");
        if(color != null){
        switch(color){
        case "Rojo":
        document.body.style.backgroundColor = "red"
        break;

        case "Amarillo":
        document.body.style.backgroundColor = "yellow"
        break;

        case "Verde":
        let url = window.prompt("Introduce un enlace");
        document.body.style.backgroundColor = "green"
        break;

        case "Azul":
        const urlActual = window.location.href;
        document.body.style.backgroundColor = "blue"
        break;

        case "Rosa":
        document.body.style.backgroundColor = "pink"
        break;

        case "Negro":
        document.body.style.backgroundColor = "black"
        break;

        default:
            window.alert("Color no valido")
        }}
        else{
            window.alert("Color no valido")
        }
    }
}

// act7
function mostrarInformacion(){
    let usuario = window.prompt("Introduce tu nombre");
    if(usuario === null || usuario === ""){
        window.alert("No has introducido un nombre");
    }else{
        window.alert("Bienvenido " + usuario);
    }
}

// act8
function comprobarTamaño(){
    const anchoVentana = window.innerWidth;
    if(anchoVentana < 768){
        window.alert("Ventana pequeña, el tamaño actual es: " + anchoVentana);
    }
    else{
        window.alert("Ventana grande, el tamaño actual es: " + anchoVentana);
    }
}
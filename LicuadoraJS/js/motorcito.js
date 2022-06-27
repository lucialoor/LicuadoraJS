var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");

var botonLicuadora = document.getElementById("blender-button-sound");



function controlarLicuadora() {

    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        licuadora.classList.add("active");

        /* console.log("encendida"); */
    } else {
        estadoLicuadora = "apagada";
        licuadora.classList.remove("active");
    }

    
}

function hacerBrrBrr(){
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
    }else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0; 
    }
}
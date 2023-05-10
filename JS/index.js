//VARIABLES
const Entrada = document.querySelector("#Entrada");
const Salida = document.querySelector("#Salida");
const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesencriptar = document.querySelector("#btnDesencriptar")
const btnCopiar = document.querySelector("#btnCopiar")

//DATOS BLOQUE2 A OCULTAR
const titulo = document.querySelector("#titulo");
const parrafo = document.querySelector("#parrafo");
const muneco = document.querySelector("#muneco");

//DATOS BLOQUE2 A MOSTRAR 
const muneco2 = document.querySelector("#muneco2");
const titulo2 = document.querySelector("#titulo2");


//Letras a desencriptar
const letrasNoEncriptadas = ["e","i","a","o","u"];
//Letras a encriptar
const letrasEncriptadas = ["enter","imes","ai","ober","ufat"]

//Funcion para convertir las letras mayusculas a minusculas
function encriptador(mensaje, forma) {
    mensaje = mensaje.toLowerCase();

    if (forma == 1){
        for (let i = 0; i <letrasNoEncriptadas.length; i ++) {
            mensaje = mensaje.replaceAll(letrasNoEncriptadas[i], letrasEncriptadas[i]);
        }
    }

    else if (forma == 2){
        for (let i = 0;i <letrasNoEncriptadas.length; i ++){
            mensaje = mensaje.replaceAll(letrasEncriptadas[i],letrasNoEncriptadas[i]);
        }
        }
    return mensaje;
}

//Funcion para ocultar  bloque2
function ocultarBranding() {
    titulo.classList.add("hide")
    parrafo.classList.add("hide")
    muneco.classList.add("hide")
	titulo2.classList.remove("hide")
    Salida.classList.remove("hide")
    btnCopiar.classList.remove("hide")
	muneco2.classList.remove("hide")
}

//Funcion para mostrar bloque2
function mostrarBranding() {
    titulo.classList.remove("hide")
    parrafo.classList.remove("hide")
    muneco.classList.remove("hide")
	titulo2.classList.add("hide")
    Salida.classList.add("hide")
    btnCopiar.classList.add("hide")
	muneco2.classList.add("hide")
}

//Boton encriptar
btnEncriptar.addEventListener("click",
    () => {
        if (Entrada.value !== "") {
            ocultarBranding();
            let mensaje = encriptador(Entrada.value, 1);
            Entrada.value = "";
            Salida.value = mensaje;
			window.alert('ENCRIPTADO!!')

        }
        else {
            window.alert('INGRESAR DATOS!!')
            
        }
    }
);

//Boton desencriptar
btnDesencriptar.addEventListener("click",
    () => {
        if (Entrada.value !== "") {
            ocultarBranding();
            let mensaje = encriptador(Entrada.value, 2);
            Entrada.value = "";
            Salida.value = mensaje;
			window.alert('DESENCRIPTADO!!')

        }
        else {
            window.alert('INGRESAR DATOS!!')
        }
    }
);

// Boton copiar
btnCopiar.addEventListener("click",
    () => {
        mostrarBranding();
        Entrada.value = Salida.value;
        Salida.value = ""; 
		window.alert('COPIADO!!')
    }
);



function loguear(loguin){

    let usuario = loguin.usuario
    let clave =  loguin.pass


    if (usuario.value == "prueba1" && clave.value =="12345"){

        return true
        
    }
    else
    {
        alert("Usuario o contraseña incorrectos")
    }

    return false

}
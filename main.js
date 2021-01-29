//USANDO EL SWITCH
let usuario = prompt('Por favor ingrese su nombre de usuario')
switch(usuario){
    case 'Hersain':
        console.log(acceso_correcto());
        break;
    case 'Juli':
        console.log(acceso_denegado());
        break;
    default:
        console.log(matar());
        break;
}

//OPCION DEL PROFESOR
let key = prompt('Ingrese una opcion');
switch(key){
    case '1':
        console.log('Opcion uno');
        break;
    case "2":
        console.log('Opcion dos');
        break;
    default:
        console.log('Opcion incorrecta');
        break;
}

function acceso_correcto(){
    return 'Acceso permitido';
}
function matar(){
    return 'KO. Perdiste tu pportunidad.';
}
function acceso_denegado(){
    return 'Acceso no permitido';
}


var urlLogin = "https://api-integracion-sistema.herokuapp.com/login";

function autenticar(){
    console.log("comienza llamada");
    
    $.ajax({
        url : urlLogin,
        contentType: "application/json; charset=utf-8",
        dataType : "json",
        cache : false,
        crossDomain : true,
        data : JSON.stringify({
            "usuario": $("#inputUsuario").val(),
            "password": $("#inputPassword").val()
        }),
        type : "POST",
        success :
            function(respuesta){
                console.log("llamada correcta");
            //conexion correcta, se redirecciona según cargo
            cargo = respuesta.cargo;
            console.log(respuesta.glosa);
            alert(cargo);
        }
    }).catch(function(errormsg){
        console.log("catched");
        console.log(errormsg);
        alert(errormsg.responseJSON.glosa);
    
       });
    
}

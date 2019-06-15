var urlUsuarios = "https://api-integracion-sistema.herokuapp.com/usuario";
function crearUsuario(){
    console.log("comienza llamada");
    
    $.ajax({
        url : urlUsuarios,
        contentType: "application/json; charset=utf-8",
        dataType : "json",
        cache : false,
        crossDomain : true,
        data : JSON.stringify({
            "nombre": $("#nombre").val(),
            "apellido": $("#apellido").val(),
            "cargo": $("#cargo").val(),
            "usuario": $("#usuario").val(),
            "password": $("#password").val()
            }),
        type : "POST",
        success :
            function(respuesta){
                console.log("llamada correcta");
                console.log(respuesta.glosa);
                alert(respuesta.glosa);
        }
    }).catch(function(errormsg){
        console.log("catched");
        console.log(errormsg);
        alert(errormsg.responseJSON.glosa);
        }
    );

}

function eliminarUsuario(){
    console.log("comienza llamada");
    
    $.ajax({
        url : urlUsuarios,
        contentType: "application/json; charset=utf-8",
        dataType : "json",
        cache : false,
        crossDomain : true,
        data : JSON.stringify(
            {
            "id": $("#idDel").val()
            }
        ),
        type : "DELETE",
        success :
            function(respuesta){
                console.log("llamada correcta");
                //conexion correcta, se redirecciona según cargo
                
                console.log(respuesta.glosa);
                alert(respuesta.glosa);
        }
    }).catch(function(errormsg){
        console.log("catched");
        console.log(errormsg);
        alert(errormsg.responseJSON.glosa);
        }
    );
}

function modificarUsuario(){
    console.log("comienza llamada");
    
    $.ajax({
        url : urlUsuarios,
        contentType: "application/json; charset=utf-8",
        dataType : "json",
        cache : false,
        crossDomain : true,
        data : JSON.stringify(
            {
                "nombre":$("#nombreMod").val(),
                "apellido":$("#apellidoMod").val(),
                "cargo":$("#cargoMod").val(),
                "usuario":$("#usuarioMod").val(),
                "password":$("#passwordMod").val(),
                "id": $("#idMod").val()
            }
        ),
        type : "PUT",
        success :
            function(respuesta){
                console.log("llamada correcta");
                console.log(respuesta.glosa);
                alert(respuesta.glosa);
        }
    }).catch(function(errormsg){
        console.log("catched");
        console.log(errormsg);
        alert(errormsg.responseJSON.glosa);
        }
    );
}

function listarUsuarios(){
    $.ajax({
        url : urlUsuarios,
        contentType: "application/json; charset=utf-8",
        dataType : "json",
        cache : false,
        crossDomain : true,
        type : "GET",
        success :
            function(respuesta){
                console.log("llamada correcta");
                console.log(respuesta.glosa);
                for (let index = 0; index < respuesta.data.length; index++) {
                    alert("usuario: "+respuesta.data[index].usuario+", \nid: "+respuesta.data[index].id+", \nnombre completo: "+ respuesta.data[index].nombre +" "+ respuesta.data[index].apellido);
                }
            }
    }).catch(function(errormsg){
        console.log("catched");
        console.log(errormsg);
        alert(errormsg.responseJSON.glosa);
        }
    );
}

function validarDatosUsuario(){

}
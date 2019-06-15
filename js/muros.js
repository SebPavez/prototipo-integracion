var urlMuros = "https://api-integracion-sistema.herokuapp.com/muro";

function crearMuro(){
    console.log("comienza llamada");
    
    $.ajax({
        url : urlMuros,
        contentType: "application/json; charset=utf-8",
        dataType : "json",
        cache : false,
        crossDomain : true,
        data : JSON.stringify({
            "direccion": $("#direccion").val(),
            "comuna":    $("#comuna").val()
        }),
        type : "POST",
        success :
            function(respuesta){
                console.log("llamada correcta");
                console.log(respuesta.glosa);
                alert("Muro creado con éxito");
        }
    }).catch(function(errormsg){
        console.log("catched");
        console.log(errormsg);
        alert(errormsg.responseJSON.glosa);
        }
    );
}

function modificarMuro(){
    console.log("comienza llamada");
    
    $.ajax({
        url : urlMuros,
        contentType: "application/json; charset=utf-8",
        dataType : "json",
        cache : false,
        crossDomain : true,
        data : JSON.stringify({
            "id": $("#idMuroMod").val(),
            "direccion": $("#direccionMod").val(),
            "comuna":    $("#comunaMod").val()
        }),
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



function deshabilitarMuro(){
    console.log("comienza llamada");
    
    $.ajax({
        url : urlMuros,
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

function habilitarMuro(){
    console.log("comienza llamada");
    
    $.ajax({
        url : urlMuros+"-habilitar",
        contentType: "application/json; charset=utf-8",
        dataType : "json",
        cache : false,
        crossDomain : true,
        data : JSON.stringify(
            {
            "id": $("#idHabilitar").val()
            }
        ),
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

function listarMuros(){
    $.ajax({
        url : urlMuros+"/all",
        contentType: "application/json; charset=utf-8",
        dataType : "json",
        cache : false,
        crossDomain : true,
        type : "GET",
        success : procesarListado
            
    }).catch(function(errormsg){
        console.log("catched");
        console.log(errormsg);
        alert(errormsg.responseJSON.glosa);
        }
    );
}

function procesarListado(respuesta){
    console.log("llamada correcta");
    console.log(respuesta.glosa);
    for (let index = 0; index < respuesta.data.length; index++) {
        
            alert(
                "idMuro: "+respuesta.data[index].id+
                "\ndireccion: "+respuesta.data[index].direccion+
                "\ncomuna: "+respuesta.data[index].comuna+
                "\nhabilitado "+ respuesta.data[index].habilitado
                );
        
        
    }
}

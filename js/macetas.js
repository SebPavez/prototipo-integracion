var urlMacetas = "https://api-integracion-sistema.herokuapp.com/maceta";
function crearMaceta(){
    console.log("comienza llamada");
    
    $.ajax({
        url : urlMacetas,
        contentType: "application/json; charset=utf-8",
        dataType : "json",
        cache : false,
        crossDomain : true,
        data : JSON.stringify({
            "id_muro": $("#idMuro").val(),
            "estado_sustrato": $("#estadoSustrado").val(),
            "estado_maceta": $("#estadoMaceta").val()
        }),
        type : "POST",
        success :
            function(respuesta){
                console.log("llamada correcta");
                console.log(respuesta.glosa);
                alert("maceta creada con éxito");
        }
    }).catch(function(errormsg){
        console.log("catched");
        console.log(errormsg);
        alert(errormsg.responseJSON.glosa);
        }
    );

}

function deshabilitarMaceta(){
    console.log("comienza llamada");
    
    $.ajax({
        url : urlMacetas,
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

function listarMacetasMuro(){
    $.ajax({
        url : urlMacetas+"/"+$("#idMuroListar").val(),
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

function listarMacetas(){
    $.ajax({
        url : urlMacetas+"/all",
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
        for (let subIndex = 0; subIndex < respuesta.data[index].macetas.length; subIndex++) {
            alert(
                "idMuro: "+respuesta.data[index].id_muro+
                "\nid maceta: "+respuesta.data[index].macetas[subIndex].id+
                "\nestado sustrato: "+respuesta.data[index].macetas[subIndex].estado_sustrato+
                "\nestado maceta: "+ respuesta.data[index].macetas[subIndex].estado_maceta);
        }
        
    }
}

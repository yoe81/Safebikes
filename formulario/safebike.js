$(document).ready(principal);

function principal() {
	//Captura el evento del botón
	$('#enviar').on('click',verificar);
}

//Consultar si el usuario ya está registrado
function verificar() {
	//Capturar los datos para enviarlos a la base de datos
	var ced = $("#cedula").val();
	var nom = $("#nombre").val();
	var ape = $("#apellido").val();
	var email = $("#email").val();
	var com = $("#comentario").val();
	
	//Valida si los campos no están vacíos
	if(ced==''||nom==''||ape==''||email==''||com==''){
		//Si hay alguno vacío le muestra el mensaje al usuario
		alert("Debe llenar todos los campos");
		
		//Resalta con fondo rojo los campos que hace falta llenar
		if(ced==''){
			$("#cedula").addClass("error");
		}
		if(nom==''){
			$("#nombre").addClass("error");
		}
		if(ape==''){
			$("#apellido").addClass("error");
		}
		if(email==''){
			$("#email").addClass("error");
		}
		if(com==''){
			$("#comentario").addClass("error");
		}
	}else{
		//Enviar datos por medio del metodo post
		$.post("verificarRegistro.php",{cedula:ced},function (rta) {
			if(rta == "0"){
				//Si no existe se registra
				registrar(ced, nom, ape, email, com);
			}else if(rta == "1"){
				//Si existe se le indica al usuario que ya está registrado
				alert("Lo sentimos, el usuario ya está registrado");
			}else{
				//Si hay un error al conectar con la base de datos se le indica al usuario
				alert("Error al conectar con la base de datos");
			}
		});
	}
}

//Registrar el usuario en la base de datos
function registrar(ced, nom, ape, email, com) {
	//Enviar datos por medio del metodo post
	$.post("guardarRegistro.php",{cedula:ced, nombre:nom, apellido:ape, email:email, comentario:com}, function (resultado){
		if(resultado == "1"){
			alert("Se ha registrado con éxito.");
		}else{
			//Si hay un error al conectar con la base de datos se le indica al usuario
			alert("Se ha generado un error al crear el registro.");
		}
	});
}

function remueveError(objeto) {
	//Remueve la clase error del campo que recibe el foco.
	$(objeto).removeClass("error");
}

<?php
	//Se capturan los valores de las variables que llegan por el metodo POST
	$ced = $_POST['cedula'];
	$nom = $_POST['nombre'];
	$ape = $_POST['apellido'];
	$email = $_POST['email'];
	$com = $_POST['comentario'];

	//Se establece conexión con la base de datos
	$enlace = mysqli_connect("localhost", "root", "", "BD_rifa");

	//Si hay un error de conexion se retorna -1 al programa principal
	if (!$enlace) {
	    echo "-1";
	    exit;
	}

	//Se ejecuta la sentencia para insertar un nuevo registro en la base de datos.
	$resultado = mysqli_query($enlace, "INSERT INTO usuarios(cedula, nombre, apellido, direccion, comentario) VALUES ('$ced', '$nom', '$ape', '$email', '$com')");

	if($resultado){
		//retorna 1 si la insercion fue satisfactoria.
		echo "1";
	}else{
		//retorna 0 si la insercion fue fallida.
		echo "0";
	}

	//se cierra la conexion a la base de datos.
	mysqli_close($enlace);
?>
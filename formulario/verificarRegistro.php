<?php
	//Se captura el numero de cedula que llega por el metodo post
	$cedula = $_POST['cedula'];

	//se conecta con la base de datos
	$enlace = mysqli_connect("localhost", "root", "", "BD_rifa");

	//Se retorna -1 si no se pudo conectar con la base de datos.
	if (!$enlace) {
	    echo "-1";
	    exit;
	}

	//Se realiza la consulta para verificar si ya se ha registrado el documento de identidad
	$resultado = mysqli_query($enlace, "SELECT * FROM usuarios WHERE cedula = '$cedula'");

	if( mysqli_num_rows($resultado)>0){
		//Se retorna 1 si la cédula ya esta registrada
		echo "1";
	}else{
		//Se retorna 0 si la cédula no está registrada.
		echo "0";
	}

	//Se cierra la conexion a la base de datos.
	mysqli_close($enlace);
?>
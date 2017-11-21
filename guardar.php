<?php
	$conectar=mysqli_connect('localhost','root','','incripcion');
		if(!$conectar){
		echo"No se pudo conectar con el servidor"; 
		}
			else{
			$db=mysqli_select_db($conectar,'$incripcion');
		if(!$base){
			echo"No se encontro la Base de Datos";
				}
		}
		$nombre=$_POST['nombre'];
		$apellido=$_POST['apellido'];
		$correo=$_POST['correo'];
		$comentario=$_POST['comentario'];
		$sql="INSERT INTO datos VALUES('$nombre',
									'$apellido', 
                                    '$correo',
                                    '$comentario')"; 
		$ejecutar=mysqli_query($conectar,$sql);
		if(!$ejecutar){
			echo"Hubo algún ERROR";
					}
			else{
				echo"Datos guardados correctamente <br> <a href='SAFEBIKE.html'>Volver</a>";
			}
?>
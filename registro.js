function RevisarCredenciales() {
  const correo = document.getElementById("correo").value;
  const contrasena1 = document.getElementById("contrasena1").value;
  const contrasena2 = document.getElementById("contrasena2").value;

  if (contrasena1 != contrasena2) {
    window.alert("Las contraseñas no coinciden");
  } else {
    window.alert(
      "Su correo es: " + correo + " y su contraseña es: " + contrasena1
    );  
  }
}

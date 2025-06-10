function mostrar(){
    var nombre=document.getElementById("nombre").value;
    var apellidop=document.getElementById("apellidop").value;
    var apellidom=document.getElementById("apellidom").value;
    var email=document.getElementById("email").value;
    var fechanacimiento=document.getElementById("start").value;
    var telefono=document.getElementById("telefono").value;
    var localidad=document.getElementById("localidad").value;
    var cp=document.getElementById("cp").value;
    var usuario=document.getElementById("usuario").value;
    var contraseña=document.getElementById("contraseña").value;

    let sexo = "";
    if(document.getElementById("Hombre").cheked){
        sexo = "Hombre";
    } else if(document.getElementById("Mujer").cheked){
        sexo = "Mujer";
    }else if(document.getElementById("No Binario").cheked){
        sexo = "No Binario";
    }
    let Pasatiempos = [];
    if(document.getElementById("Dormir").cheked){
        Pasatiempos.push("Dormir");
    }
    if(document.getElementById("Leer").cheked){
        Pasatiempos.push("Leer");
    }
    if(document.getElementById("Video Juegos").cheked){
        Pasatiempos.push("Video Juegos");
    }
    if(document.getElementById("Ver Peliculas").cheked){
        Pasatiempos.push("Ver Peliculas");
    }
    if(document.getElementById("Escuchar Musica").cheked){
        Pasatiempos.push("Escuchar Musica");
    }
    if(document.getElementById("Pasear").cheked){
        Pasatiempos.push("Pasear");
    }
    if(document.getElementById("Otro").cheked){
        Pasatiempos.push("Otro");
    }


}
alert("Nombre: "+ nombre)
alert("Apellido Paterno: "+ apellidop)
alert("Apellido Materno: "+ apellidom)
alert("email: "+ email)
alert("Fecja de Nacimiento: "+ fechanacimiento)
alert("Telefono: "+ telefono)
alert("Localidad: "+ localidad)
alert("cp: "+ cp)
alert("Usuario: "+ usuario)
alert("Contraseña: "+ contraseña)   

function eliminarDatos(){
    document.getElementById("formulario").reset();
document.getElementById("resultado").innerHTML = "";

}
function validar() {

    var usuario = document.getElementById("campo1").value;

    var contrasena = document.getElementById("campo2").value;

    var usuarioValido = 70;

    var contrasenaValida = 123;

    if (usuario == usuarioValido && contrasena == contrasenaValida) {

        // document.getElementById("miContenedor").innerHTML = `<img src="imagenes/dentro.webp" alt="foto verde" style="width:80px;">`;

        location.replace("menu.html");

    } else {
        document.getElementById("miContenedor").innerHTML = `<h5 style="color:red;"> Datos incorrectos</h5>`;

        //opcional. Este código limpia los caampos del form en caso de equivocarnos

        document.getElementById("campo1").value = " ";

        document.getElementById("campo2").value = " ";

    }



}

function calcular() {

    var metros = document.getElementById("campo3").value;



    var resultado = metros * 39.3701;

    if (metros == " ") {} else {
        metros = document.getElementById("campo3").value;

        resultado = metros * 39.3701;

        document.getElementById("mimuestra").innerHTML = `${metros} Metros = ${resultado} Pulgadas `;

        if (metros <= 1) {
            document.getElementById("imagenes").innerHTML = `<img src=" https://media.gettyimages.com/photos/pau-gasol-of-the-los-angeles-lakers-poses-for-a-portrait-prior-to-the-picture-id80057159" alt="" class="fotoAltura">`;

        } else if ( metros > 1) {
            document.getElementById("imagenes").innerHTML = `<img src="https://www.laguiadelvaron.com/wp-content/uploads/2021/09/Portada-post-FB-Las-10-personas-mas-altas-de-la-historia-que-podrian-haber-visto-a-los-basquetbolistas-como-hormiguitas.png" alt="" class="fotoAltura">`;
        } else {

            document.getElementById("imagenes").innerHTML = `<img src="3.webp" alt="" class="fotoAltura">`;

        }
    }


}
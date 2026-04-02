// Aseguramos que el código se ejecute cuando el documento esté listo
$(document).ready(function() {

    // ==============================
    // 1️⃣ Redimensionar imagen con doble clic
    // ==============================
    let originalWidth, originalHeight;
    let enlarged = false; // Estado: false = tamaño original

    // Guardamos el tamaño original cuando la imagen ya ha cargado
    $("#multimedia").on("load", function() {
        originalWidth = $(this).width();
        originalHeight = $(this).height();
    }).each(function() {
        // Esto asegura que funcione incluso si la imagen ya estaba cargada antes
        if(this.complete) $(this).trigger("load");
    });

    // Evento: doble clic en el botón "Redimensionar imagen"
    $("#resizeImg").dblclick(function() {
        if (!enlarged) {
            $("#multimedia").width(originalWidth * 2);
            $("#multimedia").height(originalHeight * 2);
            enlarged = true;
        } else {
            $("#multimedia").width(originalWidth);
            $("#multimedia").height(originalHeight);
            enlarged = false;
        }
    });

    // ==============================
    // 2️⃣ Borde rojo al pasar el ratón
    // ==============================
    $("#setBorderRed").hover(
        function() { // Cuando entra el ratón
            $("#multimedia").css("border", "3px solid red");
        },
        function() { // Cuando sale
            $("#multimedia").css("border", "none");
        }
    );

    // ==============================
    // 3️⃣ Fade in/out al hacer clic
    // ==============================
    $("#fadeImg").click(function() {
        $("#multimedia").fadeToggle(); // Alterna fadeIn y fadeOut automáticamente
    });

});
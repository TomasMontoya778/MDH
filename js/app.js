const API_URL = "https://app-3e112ab4-f0df-498c-9cb3-6948901fb7bc.cleverapps.io/proyecto/backend";
$(document).ready(function(){
    $("#btnMenu").click(function(){
        $("#navbarNav").toggleClass("show");
    });

    $("#contactoForm").validate({
        rules: {
            nombre: {
                required: true
            },
            apellido: {
                required: true
            },
            correo: {
                required: true,
                email: true
            },
            telefono: {
                required: true
            },
        },
        messages: {
            nombre: {
                required: "Por favor, escribe tu nombre"
            },
            apellido: {
                required: "Por favor, escribe tu apellido"
            },
            correo: {
                required: "Por favor, escribe tu correo",
                email: "Por favor, escribe un correo válido"
            },
            telefono: {
                required: "Por favor, escribe tu teléfono"
            },
        },
        submitHandler: function(form) {
            $.ajax({
                url: API_URL+"/contacto/",
                type: "POST",
                data: $(form).serialize(),
                success: function(data) {
                    limpiarFormulario();
                    $(".isSuccess").removeClass("d-none");
                    setTimeout(function() {
                        $(".isSuccess").addClass("d-none");
                    }, 3000);
                }
            });
        }
    });
});

function limpiarFormulario(){
    $("#nombre").val("");
    $("#apellido").val("");
    $("#email").val("");
    $("#telefono").val("");
    $("#asunto").val("");
    $("#mensaje").val("");
}
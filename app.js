$(function() {
    $("form[name='registration']").validate({
      // reglas para la validacion
      rules: {
        nombre: {
            required: true,
            minlength: 2,
            maxlenght:20,
        },
        email: {
          required: true,
          email: true
        },
        telefono: {
            required: true,
            minlength: 9,
            maxlength:9,
          }
        },
        // se especifica si hay errores
        messages: {
          nombre: "Porfavor Ingresa tu nombre",
          telefono: "Ingresa numero de telefono valido",
          email: "Porfavor ingresa un correo valido"
        },

      submitHandler: function(form) {
        form.submit();
      }
    });
});

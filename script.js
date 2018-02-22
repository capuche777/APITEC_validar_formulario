var pass = document.getElementById('pass_contra').value;

function ValidarFormulario() {
  
}

function validarNombre() {
        var _nombre = document.getElementById('txt_nombre').value;
        if (_nombre.length > 0) {
                _nombre = _nombre.split('');
                for (var i = 0; i < _nombre.length; i++) {
                        var codigo = _nombre[i].charCodeAt(0);
                        if (!((codigo >= 97 && codigo <= 122)
                          || (codigo >= 65 && codigo <= 90)
                          || (codigo == 32))) {
                                  alert('solo se permiten letras y espacios');
                          }
                }
        } else {
                return 'El nombre no puede estar vacio';
        }
        return 'Nombre correcto';
}
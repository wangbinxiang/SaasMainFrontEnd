if (module.hot) {
    module.hot.accept()
}

import 'foundation-sites'
$(document).foundation();
Foundation.Abide.defaults.patterns['psw_complexity'] = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
// ^                         Start anchor
// (?=.*[A-Z].*[A-Z])        Ensure string has two uppercase letters.
// (?=.*[!@#$&*])            Ensure string has one special case letter.
// (?=.*[0-9].*[0-9])        Ensure string has two digits.
// (?=.*[a-z].*[a-z].*[a-z]) Ensure string has three lowercase letters.
// .{8}                      Ensure string is of length 8.
// $                         End anchor.

$('#formReg').on('click', () => {
    $('#formReg').foundation('validateForm');
    if($('#codeInput').is('[data-invalid]')){    
        $('#formReg').foundation('addErrorClasses', $('#codeInput'));
    }
    if($('[data-invalid]').length > 0){
        fetch('https://davidwalsh.name/submit-json', {
            method: 'post',
            body: JSON.stringify({
                mobil: $('[name="cellPhone"]').val(),
                password: $('[name="password"]').val(),
                password: $('[name="code"]').val()
            })
        });
    } else{
        return false;
    }
    return false;
})

require.ensure([], function(require) {

})




//Dropzone.options.drop = {
//    paramName: "file", // The name that will be used to transfer the file
//    maxFilesize: 2, // MB
//    accept: function(file, done) {
//        if (file.name == "justinbieber.jpg") {
//            done("Naha, you don't.");
//        }
//        else { done(); }
//    }
//};
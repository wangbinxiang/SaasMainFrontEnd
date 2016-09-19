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

$('#btnCode').on('click', () => {
    $('#formReg').foundation('validateInput', $('#cellPhone'));
    if($('#cellPhone').is('[data-invalid]')){    
        $('#formReg').foundation('addErrorClasses', $('#cellPhone'));
    } else{
        var request = '/register/verification-code/?cellPhone=' + $('#cellPhone').val()
        fetch(request, {
            method: 'get',
            credentials: 'include'
        }).then(function(response) {
            console.log(response['status'])
            return response.json();
            $('#codeSentNote').show()
        }).then(function(data){
            console.log(data['success'])
        }).catch(function(error) {
            console.log(error)
        })
    }
})

$('#btnReg').on('click', () => {
    $('#formReg').foundation('validateForm');
    if($('#codeInput').is('[data-invalid]')){    
        $('#formReg').foundation('addErrorClasses', $('#codeInput'));
    }
    if($('[data-invalid]').length === 0){
        fetch('/register', {
            method: 'post',
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/JSON'
            }),
            body: JSON.stringify({
                cellPhone: $('[name="cellPhone"]').val(),
                password: $('[name="password"]').val(),
                rePassword: $('[name="rePassword"]').val(),
                code: $('[name="code"]').val()
            })
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data['success'])
            if(data['success']){
                $('#formSuccess').show();
            } else {
                $('#formCallout').show();
            }
        }).catch(function(err) {
            $('#formCallout').show();
            //$('#codeInputNote span').toggleClass('blkHide')
            //$('#formReg').foundation('addErrorClasses', $('#codeInput'));
        })
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
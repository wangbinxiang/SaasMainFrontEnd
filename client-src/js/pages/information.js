if (module.hot) {
    module.hot.accept()
}

import 'foundation-sites'

$(document).foundation();
Foundation.Abide.defaults.patterns['telephone'] = /^1[0-9]{10}$/;
Foundation.Abide.defaults.patterns['mobilephone'] = /^1[3|4|5|7|8]\d{9}$/;
Foundation.Abide.defaults.patterns['idcard'] = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;

$('#auditType').on('change', function(){
    $('.hideforone, .hideforagency').toggle();
    if($('#one-show').hasClass('hideforagency')){
        $('#agency-show input').removeAttr('required');
    } else{
        $('#agency-show input').attr('required');
    }
})

require.ensure([], function(require) {
    let masonry11 = require('../../../client/js/vendors/masonry.pkgd.min');
    let dropzone = require('../../../client/js/vendors/dropzone');  
    //var myDropzone = new dropzone("#drop", { url: "/file/post", dictDefaultMessage: "Drag Here"});
    
    dropzone.autoDiscover = false;

    $('.dropzone').each(function(index){
        $(this).dropzone({
            url: '/upload',
            paramName: 'postedFile',
            maxFilesize: 5,
            //addRemoveLinks: true,
            dictDefaultMessage: '拖拽文件或者点击此处上传',
            accept: function(file, done) {
                if (file.name == "justinbieber.jpg") {
                    done("Naha, you don't.");
                }
                else { done(); }
            }
        })
    });
})

require.ensure([], function(require) {
    let area =  require('../vendors/area/area-1');
    for (let province in area){
        $('#province').append('<option value="' + province + '">' + area[province].name + '</option>')
    }
});

$('#province').on('change', () => {
    $('#city option:gt(0)').remove();
    let city =  require('../vendors/area/area-' + $('#province').val());
    for (let c in city){
        $('#city').append('<option value="' + c + '">' + city[c].name + '</option>')
    }
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
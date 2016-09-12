if (module.hot) {
    module.hot.accept()
}

import 'foundation-sites'



$(document).foundation();

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
            url: '/file/post',
            paramName: 'postedFile',
            maxFilesize: 0.1,
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
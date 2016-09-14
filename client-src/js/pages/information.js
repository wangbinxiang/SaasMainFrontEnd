if (module.hot) {
    module.hot.accept()
}

import 'foundation-sites'

$(document).foundation();
Foundation.Abide.defaults.patterns['telephone'] = /^1[0-9]{10}$/;
Foundation.Abide.defaults.patterns['mobilephone'] = /^1[3|4|5|7|8]\d{9}$/;
Foundation.Abide.defaults.patterns['idcard'] = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;

$('#auditType').on('change', function(){
    if($("input[name='pokemon']:checked").val() === "personal"){
        $('.hideforone').hide();
        $('.hideforone input').removeAttr('required')
        $('.hideforagency').show();
        $('.hideforagency input').attr('required', 'required')
    } else{
        $('.hideforone').show()
        $('.hideforone input').attr('required', 'required');
        $('.hideforagency').hide()
        $('.hideforagency input').removeAttr('required');
    }
    console.log($('.hideforagency input').length)
})

require.ensure([], function(require) {
    let masonry11 = require('../../../client/js/vendors/masonry.pkgd.min');
    let dropzone = require('../../../client/js/vendors/dropzone');  
    dropzone.prototype.defaultOptions.dictDefaultMessage = "拖拽文件或者点击此处上传";
    dropzone.prototype.defaultOptions.dictFallbackMessage = "您的浏览器不支持拖拽文件上传";
    dropzone.prototype.defaultOptions.dictFallbackText = "Please use the fallback form below to upload your files like in the olden days.";
    dropzone.prototype.defaultOptions.dictFileTooBig = "文件太大({{filesize}}MiB). 最大文件:{{maxFilesize}}MiB.";
    dropzone.prototype.defaultOptions.dictInvalidFileType = "您不能上传此类型的文件";
    dropzone.prototype.defaultOptions.dictResponseError = "服务器响应代码{{statusCode}}";
    dropzone.prototype.defaultOptions.dictCancelUpload = "取消上传";
    dropzone.prototype.defaultOptions.dictCancelUploadConfirmation = "确定取消该文件的上传?";
    dropzone.prototype.defaultOptions.dictRemoveFile = "移除文件";
    dropzone.prototype.defaultOptions.dictMaxFilesExceeded = "您不能上传更多文件";
    
    dropzone.autoDiscover = false;

    $('.dropzone').each(function(index, element){
        $(this).dropzone({
            url: '/upload',
            paramName: 'postedFile',
            maxFilesize: 4,
            addRemoveLinks: true,
            acceptedFiles: '.jpg, .png, .gif, .jpeg, .bmp',
            maxFiles: 1,
            init:function() {
                var mockFile = { name: "banner2.jpg", size: 12345 };
                this.files.push(mockFile);
                //this.options.addedfile.call(this, mockFile); 
                //this.options.thumbnail.call(this, mockFile, "http://www.shiver.cn/media/20100124YuliaBrodskayaPaperGraphic.jpg");
                //mockFile.previewElement.classList.add('dz-success')
                //mockFile.previewElement.classList.add('dz-complete')

                this.emit("addedfile", mockFile);
                this.emit("thumbnail", mockFile, "http://www.shiver.cn/media/20100124YuliaBrodskayaPaperGraphic.jpg");
                this.emit("complete", mockFile);
                var existingFileCount = 1; // The number of files already uploaded
                this.options.maxFiles = this.options.maxFiles - existingFileCount;
                
                this.on('success', function(file, response){
                    //console.log(response, response.attachmentList[0].id);
                    console.log($(element).next());
                    $(element).next().val(response.attachmentList[0].id);
                })
                this.on('removedfile', function(){
                    $(element).next().val("");
                })
            }
            //accept: function(file, done) {
            //    if (file.name == "justinbieber.jpg") {
            //        done("Naha, you don't.");
            //    }
            //    else { done(); }
            //}
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
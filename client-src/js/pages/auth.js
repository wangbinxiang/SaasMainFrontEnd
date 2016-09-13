if (module.hot) {
    module.hot.accept()
}

import 'foundation-sites'
$(document).foundation();
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
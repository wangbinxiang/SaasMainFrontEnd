import 'foundation-sites'

if (module.hot) {
    module.hot.accept()
}

$(document).foundation();
require.ensure([], function(require) {
    let masonry = require('../../../client/js/vendors/masonry.pkgd.min')
    let contacts = require('../../../client/js/vendors/dropzone')
})

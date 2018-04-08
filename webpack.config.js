const path = require('path')

module.exports = {
    mode : 'none',
    entry : './docs/test.js',
    output : {
        path : path.join(__dirname, 'docs/build'),
        filename : 'build.test.js'
    }
}

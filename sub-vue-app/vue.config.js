const path = require('path')
const outputBase = './dist'
const bundleBase = 'vue-static'
module.exports={
    outputDir:path.join(__dirname,outputBase),
    configureWebpack:{
        output:{
            library:'singleVue',
            libraryTarget:'window',
            filename:path.join(bundleBase,'js/[name].js'),
            chunkFilename:path.join(bundleBase,'js/[id].js')
        }
    }
}
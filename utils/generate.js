const fs = require('fs')
const path = require('path')
const { JSDOM } = require('jsdom')
const grabData = require('./grabdata')
const template = require('./template')

function generate() {
    const index = []
    JSDOM.fromURL('https://www.w3.org/TR/dpub-aria-1.0/').then(dom => {
        grabData(dom.window.document).forEach(item => {
            const role = item.role
            const filename = (role === 'index'? 'docindex' : role.toLowerCase()) + '.js'
            const filepath = path.resolve(process.cwd(), 'lib', filename)
            if(fs.existsSync(filepath)) {
                fs.writeFileSync(filepath, template(item))
            }
            index.push(`export * from './${ filename }'`)
            console.log('Write successfully: ' + filename)
        })
        const indexpath = path.resolve(process.cwd(), 'lib', 'index.js')
        if(fs.existsSync(indexpath)) {
            fs.writeFileSync(indexpath, index.sort().join('\n') + '\n')
        }
    })
}

generate()

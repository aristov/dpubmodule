module.exports = function grabData(document) {
    const items = document.querySelectorAll('.notoc')
    const abstractroles = ['Section', 'Landmark', 'SectionHead']
    return Array.prototype.map.call(items, item => {
        const summary = item.querySelector('.role-description p').textContent
        const superrole = item.querySelector('.role-parent code').textContent
        let role = item.querySelector('.role-name code').textContent.substr(4)
        let superclass = superrole.charAt(0).toUpperCase() + superrole.substr(1)

        if(role === 'biblioentry') role = 'biblioEntry'
        if(role === 'biblioref') role = 'biblioRef'
        if(role === 'glossref') role = 'glossRef'
        if(role === 'noteref') role = 'noteRef'
        if(role === 'pagelist') role = 'pageList'
        if(role === 'pullquote') role = 'pullQuote'

        if(superrole === 'sectionhead') superclass = 'SectionHead'
        if(superrole === 'listitem') superclass = 'ListItem'

        return {
            role,
            roleclass : role.charAt(0).toUpperCase() + role.substr(1),
            superclass,
            summary,
            abstract : abstractroles.includes(superclass) 
        }
    })
}

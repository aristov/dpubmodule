module.exports = function grabData(document) {
    const items = document.querySelectorAll('.notoc')
    return Array.prototype.map.call(items, item => {
        const role = item.querySelector('.role-name code').textContent.substr(4)
        const roleclass = role.charAt(0).toUpperCase() + role.substr(1)
        const summary = item.querySelector('.role-description p').textContent
        const superrole = item.querySelector('.role-parent code').textContent
        let superclass = superrole.charAt(0).toUpperCase() + superrole.substr(1)
        if(superclass === 'Sectionhead') superclass = 'SectionHead'
        if(superclass === 'Listitem') superclass = 'ListItem'
        return { role, roleclass, superclass, summary }
    })
}

module.exports = function template({
    role,
    roleclass,
    superclass,
    summary,
    abstract
}) {
return `import { ${ superclass } } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary ${ summary }
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-${ role.toLowerCase() }
 */
export class ${ roleclass } extends ${ superclass } {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }` + (abstract? `
    
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }` : '') + `
}

/**
 * @param {*} [init]
 * @returns {${ roleclass }}
 */
export function ${ role }(...init) {
    return new ${ roleclass }(...init)
}
`
}

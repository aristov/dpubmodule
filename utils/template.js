module.exports = function template({
    role,
    roleclass,
    superclass,
    summary
}) {
return `import { ${ superclass } } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary ${ summary }
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-${ role }
 */
export class ${ roleclass } extends ${ superclass } {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
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

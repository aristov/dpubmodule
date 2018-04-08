import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A major structural division in a work that contains a set of related sections dealing with a particular subject, narrative arc or similar encapsulated theme.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-part
 */
export class Part extends Landmark {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
    
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} [init]
 * @returns {Part}
 */
export function part(...init) {
    return new Part(...init)
}

import { Section } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary An inscription at the front of the work, typically addressed in tribute to one or more persons close to the author.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-dedication
 */
export class Dedication extends Section {
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
 * @returns {Dedication}
 */
export function dedication(...init) {
    return new Dedication(...init)
}

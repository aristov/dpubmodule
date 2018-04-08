import { Section } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A short summary of the principle ideas, concepts and conclusions of the work, or of a section or excerpt within it.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-abstract
 */
export class Abstract extends Section {
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
 * @returns {Abstract}
 */
export function abstract(...init) {
    return new Abstract(...init)
}

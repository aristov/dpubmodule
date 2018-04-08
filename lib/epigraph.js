import { Section } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A quotation set at the start of the work or a section that establishes the theme or sets the mood.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-epigraph
 */
export class Epigraph extends Section {
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
 * @returns {Epigraph}
 */
export function epigraph(...init) {
    return new Epigraph(...init)
}

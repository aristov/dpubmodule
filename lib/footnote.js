import { Section } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary Ancillary information, such as a citation or commentary, that provides additional context to a referenced passage of text.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-footnote
 */
export class Footnote extends Section {
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
 * @returns {Footnote}
 */
export function footnote(...init) {
    return new Footnote(...init)
}

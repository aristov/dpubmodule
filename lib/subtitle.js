import { SectionHead } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary An explanatory or alternate title for the work, or a section or component within it.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-subtitle
 */
export class Subtitle extends SectionHead {
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
 * @returns {Subtitle}
 */
export function subtitle(...init) {
    return new Subtitle(...init)
}

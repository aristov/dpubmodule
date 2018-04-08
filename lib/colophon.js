import { Section } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A short section of production notes particular to the edition (e.g., describing the typeface used), often located at the end of a work.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-colophon
 */
export class Colophon extends Section {
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
 * @returns {Colophon}
 */
export function colophon(...init) {
    return new Colophon(...init)
}

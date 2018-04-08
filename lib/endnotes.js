import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A collection of notes at the end of a work or a section within it.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-endnotes
 */
export class Endnotes extends Landmark {
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
 * @returns {Endnotes}
 */
export function endnotes(...init) {
    return new Endnotes(...init)
}

import { Link } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A reference to a bibliography entry.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-biblioref
 */
export class BiblioRef extends Link {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {BiblioRef}
 */
export function biblioRef(...init) {
    return new BiblioRef(...init)
}

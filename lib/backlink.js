import { Link } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A link that allows the user to return to a related location in the content (e.g., from a footnote to its reference or from a glossary definition to where a term is used).
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-backlink
 */
export class Backlink extends Link {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Backlink}
 */
export function backlink(...init) {
    return new Backlink(...init)
}

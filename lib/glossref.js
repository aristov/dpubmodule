import { Link } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A reference to a glossary definition.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-glossref
 */
export class Glossref extends Link {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Glossref}
 */
export function glossref(...init) {
    return new Glossref(...init)
}

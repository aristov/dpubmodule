import { Note } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary Helpful information that clarifies some aspect of the content or assists in its comprehension.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-tip
 */
export class Tip extends Note {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Tip}
 */
export function tip(...init) {
    return new Tip(...init)
}

import { Section } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary An acknowledgment of the source of integrated content from third-party sources, such as photos. Typically identifies the creator, copyright and any restrictions on reuse.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-credit
 */
export class Credit extends Section {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Credit}
 */
export function credit(...init) {
    return new Credit(...init)
}

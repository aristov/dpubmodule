import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A list of external references cited in the work, which may be to print or digital sources.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-bibliography
 */
export class Bibliography extends Landmark {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Bibliography}
 */
export function bibliography(...init) {
    return new Bibliography(...init)
}

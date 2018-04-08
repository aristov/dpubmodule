import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A collection of credits.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-credits
 */
export class Credits extends Landmark {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Credits}
 */
export function credits(...init) {
    return new Credits(...init)
}

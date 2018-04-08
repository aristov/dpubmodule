import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A preliminary section that typically introduces the scope or nature of the work.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-introduction
 */
export class Introduction extends Landmark {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Introduction}
 */
export function introduction(...init) {
    return new Introduction(...init)
}

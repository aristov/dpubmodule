import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A set of corrections discovered after initial publication of the work, sometimes referred to as corrigenda.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-errata
 */
export class Errata extends Landmark {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Errata}
 */
export function errata(...init) {
    return new Errata(...init)
}

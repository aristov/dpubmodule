import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A section of supplemental information located after the primary content that informs the content but is not central to it.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-appendix
 */
export class Appendix extends Landmark {
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
 * @returns {Appendix}
 */
export function appendix(...init) {
    return new Appendix(...init)
}

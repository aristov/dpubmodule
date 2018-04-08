import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A concluding section or statement that summarizes the work or wraps up the narrative.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-conclusion
 */
export class Conclusion extends Landmark {
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
 * @returns {Conclusion}
 */
export function conclusion(...init) {
    return new Conclusion(...init)
}

import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary An introductory section that precedes the work, typically not written by the author of the work.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-foreword
 */
export class Foreword extends Landmark {
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
 * @returns {Foreword}
 */
export function foreword(...init) {
    return new Foreword(...init)
}

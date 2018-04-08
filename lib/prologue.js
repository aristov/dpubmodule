import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary An introductory section that sets the background to a work, typically part of the narrative.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-prologue
 */
export class Prologue extends Landmark {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Prologue}
 */
export function prologue(...init) {
    return new Prologue(...init)
}

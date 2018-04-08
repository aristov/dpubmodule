import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A section or statement that acknowledges significant contributions by persons, organizations, governments and other entities to the realization of the work.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-acknowledgments
 */
export class Acknowledgments extends Landmark {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Acknowledgments}
 */
export function acknowledgments(...init) {
    return new Acknowledgments(...init)
}

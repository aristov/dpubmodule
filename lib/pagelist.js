import { Navigation } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A navigational aid that provides a list of links to the pagebreaks in the content.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-pagelist
 */
export class Pagelist extends Navigation {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Pagelist}
 */
export function pagelist(...init) {
    return new Pagelist(...init)
}

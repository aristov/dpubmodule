import { Navigation } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A navigational aid that provides a detailed list of links to key subjects, names and other important topics covered in the work.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-index
 */
export class Index extends Navigation {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Index}
 */
export function index(...init) {
    return new Index(...init)
}

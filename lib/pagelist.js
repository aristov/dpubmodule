import { Navigation } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A navigational aid that provides a list of links to the pagebreaks in the content.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-pagelist
 */
export class PageList extends Navigation {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {PageList}
 */
export function pageList(...init) {
    return new PageList(...init)
}

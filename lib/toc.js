import { Navigation } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A navigational aid that provides an ordered list of links to the major sectional headings in the content. A table of contents may cover an entire work, or only a smaller section of it.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-toc
 */
export class Toc extends Navigation {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Toc}
 */
export function toc(...init) {
    return new Toc(...init)
}

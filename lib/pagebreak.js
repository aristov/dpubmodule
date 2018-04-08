import { Separator } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A separator denoting the position before which a break occurs between two contiguous pages in a statically paginated version of the content.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-pagebreak
 */
export class Pagebreak extends Separator {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Pagebreak}
 */
export function pagebreak(...init) {
    return new Pagebreak(...init)
}

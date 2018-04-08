import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A major thematic section of content in a work.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-chapter
 */
export class Chapter extends Landmark {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Chapter}
 */
export function chapter(...init) {
    return new Chapter(...init)
}

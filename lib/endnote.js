import { ListItem } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary One of a collection of notes that occur at the end of a work, or a section within it,
					that provides additional context to a referenced passage of text.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-endnote
 */
export class Endnote extends ListItem {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Endnote}
 */
export function endnote(...init) {
    return new Endnote(...init)
}

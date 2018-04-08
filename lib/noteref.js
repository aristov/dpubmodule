import { Link } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A reference to a footnote or endnote, typically appearing as a superscripted number or symbol in the main body of text.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-noteref
 */
export class NoteRef extends Link {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {NoteRef}
 */
export function noteRef(...init) {
    return new NoteRef(...init)
}

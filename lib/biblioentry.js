import { ListItem } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A single reference to an external source in a bibliography. A biblioentry typically provides more detailed
					information than its reference(s) in the content (e.g., full title, author(s), publisher, publication date, etc.).
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-biblioentry
 */
export class BiblioEntry extends ListItem {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {BiblioEntry}
 */
export function biblioEntry(...init) {
    return new BiblioEntry(...init)
}

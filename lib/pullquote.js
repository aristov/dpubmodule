import { None } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A distinctively placed or highlighted quotation from the current content designed to draw attention to a topic or highlight a key point.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-pullquote
 */
export class PullQuote extends None {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {PullQuote}
 */
export function pullQuote(...init) {
    return new PullQuote(...init)
}

import { Note } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary Notifies the user of consequences that might arise from an action or event. Examples include warnings, cautions and dangers.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-notice
 */
export class Notice extends Note {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Notice}
 */
export function notice(...init) {
    return new Notice(...init)
}

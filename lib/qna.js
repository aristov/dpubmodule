import { Section } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A section of content structured as a series of questions and answers, such as an interview or list of frequently asked questions.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-qna
 */
export class Qna extends Section {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
    
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} [init]
 * @returns {Qna}
 */
export function qna(...init) {
    return new Qna(...init)
}

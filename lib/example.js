import { Section } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary An illustratration of a key concept of the work, such as a code listing, case study or problem.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-example
 */
export class Example extends Section {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Example}
 */
export function example(...init) {
    return new Example(...init)
}

import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A closing statement from the author or a person of importance, typically providing insight into how the content came to be written, its significance, or related events that have transpired since its timeline.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-afterword
 */
export class Afterword extends Landmark {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Afterword}
 */
export function afterword(...init) {
    return new Afterword(...init)
}

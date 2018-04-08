import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A brief dictionary of new, uncommon or specialized terms used in the content.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-glossary
 */
export class Glossary extends Landmark {
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
 * @returns {Glossary}
 */
export function glossary(...init) {
    return new Glossary(...init)
}

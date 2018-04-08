import { Img } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary An image that sets the mood or tone for the work and typically includes the title and author.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-cover
 */
export class Cover extends Img {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Cover}
 */
export function cover(...init) {
    return new Cover(...init)
}

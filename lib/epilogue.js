import { Landmark } from 'ariamodule'
import { DPUB_ROLE_PREFIX } from './const'

/**
 * @summary A concluding section of narrative that wraps up or comments on the actions and events of the work, typically from a future perspective.
 * @see https://www.w3.org/TR/dpub-aria-1.0/#doc-epilogue
 */
export class Epilogue extends Landmark {
    /**
     * @returns {String}
     */
    static get role() {
        return DPUB_ROLE_PREFIX + super.role
    }
}

/**
 * @param {*} [init]
 * @returns {Epilogue}
 */
export function epilogue(...init) {
    return new Epilogue(...init)
}

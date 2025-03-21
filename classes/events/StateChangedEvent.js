﻿const HTMLCustomElement = require("../../abstract/HTMLCustomElement");
const CustomWebComponentCustomEvent = require("./CustomWebComponentCustomEvent");

/**
 * @class 
 * @classdesc Evènement lorsqu'un élément HTMLCustomElement change d'état
 * @template T
 * @extends CustomWebComponentCustomEvent<T>
 */
class StateChangedEvent extends CustomWebComponentCustomEvent {
    #state = null;
    /**
     * Données de l'évènement
     * 
     * @param {string | boolean} state nouvel état
     * @param {T} caller Node HTMLCustomElement
     */
    constructor(state, caller) {
        super(StateChangedEvent.TAG, caller);

        this.#state = state;
    }

    /**
     * @type {string | boolean}
     * @readonly
     */
    get state() {
        return this.#state;
    }

    /**
     * Si l'état est visible dans les attributs du caller ou non
     * @type {boolean}
     * @readonly
     */
    get stateVisible() {
        return this.caller.attr(HTMLCustomElement.ATTRIBUTE_STATE) === this.state; 
    }

    /**
     * @type {string}
     * @readonly
     * @static
     */
    static get TAG() {
        return 'state.changed';
    }
}


module.exports = StateChangedEvent;
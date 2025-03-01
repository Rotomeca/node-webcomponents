
/**
 * @class 
 * @classdesc Evènement de base pour les élément HTMLCUstomElement et dérivés
 * @template T
 * @extends CustomEvent
 */
class CustomWebComponentCustomEvent extends CustomEvent {
  /**
   * @private
   * @type {T}
   */
  #caller = null;

  /**
   * Initialise la classe
   * @param {string} type Type d'évènement 
   * @param {T} caller Element qui envoi cet évènement
   */
  constructor(type, caller) {
    super(`${CustomWebComponentCustomEvent.BaseType}:${type}`);

    this.#caller = caller;
  }

  /**
   * @type {T}
   * @readonly
   */
    get caller() {
      return this.#caller;
  }

  /**
   * @type {string}
   * @readonly
   * @static
   */
  static get BaseType() {
    return 'custom:event';
  }
}

module.exports = CustomWebComponentCustomEvent;
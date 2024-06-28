import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  static validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw TypeError('currency must be a Currency');
    }
    return true;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (this.validateCurrency(currency)) {
      this._currency = currency;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }
}

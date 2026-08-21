export default class Email {
  private constructor(readonly value: string) {
    this.value = value;
  }

  static create(email: string) {
    return new Email(email);
  }

  validade() {
    return !! this.value.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  }
}

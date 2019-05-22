export class Message {
  constructor(private message: string, private color) {}

  getMessage() {
    return this.message;
  }

  getColor() {
    return this.color;
  }
}

export class Message {
  constructor(private message: string, private color: string) {}

  getMessage() {
    return this.message;
  }

  getColor() {
    return this.color;
  }
}

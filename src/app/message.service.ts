import { Injectable } from '@angular/core';
import {Message} from './Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: any[] = [];

  constructor() { }

  addMessage(message: Message) {
    this.message.push(message);
  }

  getAllMessage() {
    console.log(this.message);
    return this.message;
  }
  cleanMessage() {
    this.message = [];
  }
}

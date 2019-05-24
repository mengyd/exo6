import {async, TestBed} from '@angular/core/testing';
import { MessageService } from './message.service';
import {Message} from './Message';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  test('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });


  test('should create message', async(() => {
      const service: MessageService = TestBed.get(MessageService);
      const message: Message = new Message('Test', 'Green');
      service.addMessage(message);
      expect(expect.arrayContaining([message])).toEqual(service.message);
    }));

  test('should return message', async(() => {
      const service: MessageService = TestBed.get(MessageService);
      service.addMessage(new Message('Test', 'Green'));
      expect(service.getAllMessage()).toEqual(service.message);
    }));

  test('should clean message', async(() => {
      const service: MessageService = TestBed.get(MessageService);
      service.addMessage(new Message('Test', 'Green'));
      service.cleanMessage();
      expect(service.message).toEqual([]);
      }));
});


import {async, TestBed} from '@angular/core/testing';
import {Message} from './Message';

describe('Message', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  test('should be created', () => {
    const message: Message = TestBed.get(new Message('message', 'color'));
    expect(message).toBeTruthy();
  });
});

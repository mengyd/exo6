import {async, TestBed} from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  test('should be created', async (() => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  }));
});

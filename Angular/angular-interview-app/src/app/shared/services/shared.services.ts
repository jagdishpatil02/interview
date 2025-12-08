import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // BehaviorSubject holds the latest value and emits it to new subscribers

  private messageSource = new BehaviorSubject<string>('default message');

  // Observable that components can subscribe to
  currentMessage = this.messageSource.asObservable();

  // Method to update the message
  updateMessage(newMessage: string) {
    this.messageSource.next(newMessage);
  }
}

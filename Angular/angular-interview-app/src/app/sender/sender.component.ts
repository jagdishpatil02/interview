import { Component } from '@angular/core';
import { SharedService } from '../shared/services/shared.services';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.scss',
})
export class SenderComponent {
  message = '';

  constructor(private sharedService: SharedService) {}

  sendMessage() {
    this.sharedService.updateMessage(this.message);
  }
}

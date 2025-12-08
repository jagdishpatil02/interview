import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.services';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.scss',
})
export class ReceiverComponent implements OnInit {
  message = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentMessage.subscribe((msg) => {
      this.message = msg;
    });
  }
}

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-home-child',
  standalone: true,
  imports: [],
  templateUrl: './home-child.component.html',
  styleUrl: './home-child.component.scss',
})
export class HomeChildComponent implements OnChanges {
  @Input() user: any;
  @Output() messageEvent = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('user', changes['user'].currentValue);
  }

  sendMessage() {
    this.messageEvent.emit('hello parent');
  }
}

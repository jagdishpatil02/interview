import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  constructor() {
    effect(() => {
      console.log('Total changed:', this.total());
    });
  }
  counter = signal(0);

  quantity = signal(2);
  price = signal(100);

  total = computed(() => this.quantity() * this.price());

  incrementCounter() {
    this.counter.update((value) => value + 1);
  }

  reset() {
    this.counter.set(0);
  }
}

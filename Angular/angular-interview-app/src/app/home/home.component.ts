import { Component } from '@angular/core';
import {
  UpperCasePipe,
  SlicePipe,
  CurrencyPipe,
  TitleCasePipe,
  LowerCasePipe,
  CommonModule,
  NgTemplateOutlet,
} from '@angular/common';
import { ReversePipe } from '../shared/pipes/reversePipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighLightDirective } from '../shared/directives/highlight.directive';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    UpperCasePipe,
    SlicePipe,
    TitleCasePipe,
    LowerCasePipe,
    ReversePipe,
    CurrencyPipe,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HighLightDirective,
    NgTemplateOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  users: any;
  constructor(private homeservice: HomeService) {
    this.homeservice.getUserData().subscribe((res) => {
      this.users = res;
    });
  }
  count: number = 0;
  displayP = true;
  isActive = true;
  isRed = true;
  role = 'admin';

  user = {
    name: '',
    email: '',
  };

  items = [
    {
      name: 'jagdish',
      age: 30,
    },
    {
      name: 'sachin',
      age: 34,
    },
  ];

  setCount() {
    this.count += 1;
  }
}

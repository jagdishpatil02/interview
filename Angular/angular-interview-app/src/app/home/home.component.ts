import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
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
import { HomeChildComponent } from './home-child/home-child.component';
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
    HomeChildComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnInit {
  @ViewChild('myinput') input!: ElementRef;
  users: any;
  count: number = 0;
  displayP = true;
  isActive = true;
  isRed = true;
  role = 'admin';
  parentUser = 'jagdish';
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
  constructor(
    private homeservice: HomeService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.homeservice.getUserData().subscribe((res) => {
      this.users = res;
    });
  }

  ngOnInit(): void {
    const paragraph = this.el.nativeElement.querySelector('#renderer');
    this.renderer.setStyle(paragraph, 'color', 'blue');
    this.renderer.setStyle(paragraph, 'font-size', '22px');
  }

  setCount() {
    this.count += 1;
  }

  getValue(value: string) {
    console.log('value accessed using global var', value);
  }

  receivedMessage(msg: string) {
    console.log('msg', msg);
  }

  ngAfterViewInit(): void {
    console.log(
      'this.input.nativeElement.value',
      this.input.nativeElement.value
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './http.component.html',
  styleUrl: './http.component.scss',
})
export class HttpComponent implements OnInit {
  response: any;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getUsers().subscribe((data) => (this.response = data));
  }

  trackbyUserId(index: number, item: any) {
    return item.id;
  }
}

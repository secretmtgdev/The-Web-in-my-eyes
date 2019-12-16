import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  title: String = "How a webpage works"
  constructor() { }

  ngOnInit() {
  }

}

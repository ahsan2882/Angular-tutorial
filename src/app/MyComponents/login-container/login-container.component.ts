import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'section [app-login-container]',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {
  page: string = "";
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.page = this.location.path().slice(1)
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();
  userEmail: string = "ahsan@gmail.com";
  userPass: string = "password123";
  constructor() {

  }

  ngOnInit(): void {
  }
  submitForm() {
    let emailField: HTMLInputElement = document.getElementById("email") as HTMLInputElement;
    let passField: HTMLInputElement = document.getElementById("password") as HTMLInputElement;
    if (emailField.value === this.userEmail && passField.value === this.userPass) {
      console.log("Logged in")
    } else {
      alert("Wrong username or password");
    }
  }
  showPassword() {
    // let passField = document.querySelector("#password");
    // let passIcon = document.getElementsByClassName("showPass")[0];
    // if (passField.type === "password") {
    // 	passField.type = "text";
    // 	passIcon.classList.remove("fa-eye");
    // 	passIcon.classList.add("fa-eye-slash");
    // } else {
    // 	passField.type = "password";
    // 	passIcon.classList.remove("fa-eye-slash");
    // 	passIcon.classList.add("fa-eye");
    // }
    console.log("Showing password");
  }
}

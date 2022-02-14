import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail: string = "ahsan@gmail.com";
  userPass: string = "password123"
  constructor() {

  }

  ngOnInit(): void {
  }
  submitForm() {
    // console.log(this.userEmail, this.userPass);
    // let emailVal = document.getElementById("email").value;
    // let passVal = document.getElementById("password").value;
    // if (emailVal === this.userEmail && passVal === this.userPass) {
    //   console.log("Logged in")
    // } else {
    //   alert("Wrong username or password");
    // }
    // console.log(emailVal, passVal);
    console.log("submitting form")
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

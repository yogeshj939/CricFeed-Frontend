import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /*These variables are for authentication purpose*/
  username = 'abcd'
  password = 'abcd'
  invalidLogin = false
  form: FormGroup; //FormGroup contains all the variables from form of login input.
//FormGroup contains all the variables from form of login input.

  constructor(private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginServices :LoginServiceService
    ) {
      this.form = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(2)]],
        password: ['', [Validators.required, Validators.minLength(2)]]
      });
    }

  ngOnInit(): void {
  }
  submitForm() {
    console.log(this.form.value);
    // (this.login.authenticate(this.form.value).subscribe(
    //   data => {

    //   },
    //   error => {
    //   }
    // )
    // );
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  message: string;

  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password)
      .then(
        response => {
          this.message = '';
          confirm('Sign in successfully!');
          this.router.navigate(['/']);
        }
      )
      .catch(
        error => {
          console.log(error);
          if (error.code === 'auth/user-not-found') {
            this.message = 'You have not signed up yet.';
            // this.router.navigate(['../signup'], {relativeTo: this.route});
          } else if (error.code === 'auth/invalid-email' || 'auth/wrong-password') {
            this.message = 'Invalid email/password.';
          }
        }
      );
  }

}

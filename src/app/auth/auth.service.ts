import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signinUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          // confirm('Sign in successfully!');
          // this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            // tslint:disable-next-line:semicolon
            );
        }
      );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token; // might expired, try again
  }

  isAuthenticated() {
    // console.log(this.token);
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    confirm('You are logged out!');
    this.router.navigate(['/']);
  }
}

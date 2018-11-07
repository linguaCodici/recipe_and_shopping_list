import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDGxHhHqUhK1eFnwl-1I22vWYSfQtaX_JQ',
      authDomain: 'recipe-book-66dce.firebaseapp.com'
    });
  }
}

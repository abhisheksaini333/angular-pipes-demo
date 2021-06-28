import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-demo';
  title2 = 'pIpE-DeMo2';

  dob = new Date();

  money = 100;

  listOfProducts = [
    { name: 'iPhone', price: '$999' },
    { name: 'iMac', price: '$1999' },
    { name: 'iWatch', price: '$399' },
    { name: 'iPad', price: '$299' }
  ];

  testDataString = 'Welcome to Edureka !';

  students = [
    { name: 'Abhishek', grade: 'A' },
    { name: 'Abdul', grade: 'B' },
    { name: 'Anand', grade: 'C' },
    { name: 'Devin', grade: 'D' },
    { name: 'Durga', grade: 'A' },
    { name: 'Hasan', grade: 'B' },
    { name: 'Kalyani', grade: 'C' },
    { name: 'Kiran', grade: 'D' },
    { name: 'Shubham', grade: 'A' },
    { name: 'Vipin', grade: 'A' },
  ]
}

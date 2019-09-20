import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp';

  name ="akul tripathi";

  emp=["akul", "sumit", "rohit", "himanshu"];

  emps=[
    {"name":"akul", "des":"trainer", "city":"meerut"},
    {"name":"akul", "des":"trainer", "city":"meerut"},
    {"name":"akul", "des":"trainer", "city":"meerut"},
    {"name":"akul", "des":"trainer", "city":"meerut"},
  ]
}
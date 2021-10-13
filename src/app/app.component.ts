import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hide-option-in-dropdown';
  students = [
    {
      id: 1,
      name: 'Praveen',
      subject: '',
    },
    {
      id: 2,
      name: 'Kumar',
      subject: '',
    },
    {
      id: 3,
      name: 'Dipak',
      subject: '',
    },
  ];
  subjects = [
    {
      id: 1,
      name: 'Telugu',
    },
    {
      id: 2,
      name: 'English',
    },
    {
      id: 3,
      name: 'Hindi',
    },
    {
      id: 4,
      name: 'Sanskrit',
    },
  ];

  selectedSubject(event : any) {
    console.log(event.target.value);
  }
}

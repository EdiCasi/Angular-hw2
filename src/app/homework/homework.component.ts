import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

listOfStrings:string[]=
[
  'sTriNg: 0',
  'string: 1',
  'string: 2',
  'string: 3',
  'string: 4',
  'string: 5'
]

listOfDates:Date[]=
[
  new Date(2021,0,0),
  new Date(2021,0,1),
  new Date(2021,0,2),
  new Date(2021,0,3),
  new Date(2021,0,4),
  new Date(2021,0,5)
]

text:string="bla bla";






  constructor() { }

  ngOnInit(): void {
  }

}

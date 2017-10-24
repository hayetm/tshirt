import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  selectedValue: string;
  selectedValue1: string;
  selectedValue2: number;

   sizes = [
     {value: '', viewValue: 'ALL'},
     {value: 'S', viewValue: 'Small'},
     {value: 'M', viewValue: 'Medium'},
     {value: 'L', viewValue: 'Large'}
   ];
   colors = [
     {value: '', viewValue: 'ALL'},
     {value: 'WHITE', viewValue: 'Blanc'},
     {value: 'BLACK', viewValue: 'Noir'},
     {value: 'BLUE', viewValue: 'Bleu'},
     {value: 'GREEN', viewValue: 'Vert'}
   ];
   prices = [
     {value: null, viewValue: 'ALL'},
     {value: 10, viewValue: 10},
     {value: 20, viewValue: 20},
     {value: 30, viewValue: 30}
   ];

   constructor() {}

   ngOnInit() {
   }
}

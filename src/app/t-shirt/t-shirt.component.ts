import { Component, OnInit, Input } from '@angular/core';

import { ContainerComponent } from '../container/container.component';

export class Item {

  name: string;
  sizes: string;
  colors: string;
  prices: number;
  img: string;
}

const ITEMS : Item[] = [
  {prices: 10, name: 'Top à bretelles', sizes: 'S', colors: 'WHITE', img:'../assets/images/top.jpg'},
  {prices: 30, name: 'Chemises à broderies', sizes: 'M', colors: 'BLUE', img:'../assets/images/coeurs.jpg'},
  {prices: 20, name: 'Chemisier à ceinture', sizes: 'S', colors: 'GREEN', img:'../assets/images/ceinture.jpg'},
  {prices: 30, name: 'Robe pull', sizes: 'L', colors: 'WHITE', img:'../assets/images/pull.jpg'},
  {prices: 10, name: 'Chemisier à fleurs', sizes: 'M', colors: 'BLACK', img:'../assets/images/noir.jpg'},
  {prices: 10, name: 'Chemisier blanc à imprimés', sizes: 'S', colors: 'WHITE', img:'../assets/images/fleurs.jpg'},
  {prices: 30, name: 'Chemise à motifs', sizes: 'L', colors: 'WHITE', img:'../assets/images/motifs.jpg'},
  {prices: 20, name: 'Chemisier', sizes: 'M', colors: 'WHITE', img:'../assets/images/blanc.jpg'}
]


@Component({
  selector: 'app-t-shirt',
  templateUrl: './t-shirt.component.html',
  styleUrls: ['./t-shirt.component.scss']
})
export class TShirtComponent implements OnInit {

// je declare un el de ma class TShirtComponent cet element peut etre affiché dans le html, cet el a copmme type tableau d'objet de type Item
items: Item[];
// je créé une variable qui va contenir la valeur test que je veux filtrer
@Input() filterSize: string;
@Input() filterColor: string;
@Input() filterPrice: number;

constructor() {}

ngOnInit() {
  //this.items fait reference a items, je met this car je suis dans une methode de ma class
  this.items = ITEMS;
  //this.filterSize = 's';
}

}

import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  tiles: Tile[] = [
    {text: '', cols: 1, rows: 7, color: ''},
    {text: 'Titre', cols: 3, rows: 1, color: ''},
    {text: 'Graph', cols: 3, rows: 4, color: 'lightblue'},
    {text: 'card01', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'card02', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'card03', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Footer', cols: 3, rows: 2, color: ''},

  ];
}

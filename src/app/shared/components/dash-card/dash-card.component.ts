import { Component, OnInit } from '@angular/core';
import { cardInfo } from '../../const/card-details';
import { figmacard } from '../../model/cardInfo';

@Component({
  selector: 'app-dash-card',
  templateUrl: './dash-card.component.html',
  styleUrls: ['./dash-card.component.scss']
})
export class DashCardComponent implements OnInit {

  cardDetails: Array<figmacard> = cardInfo;


  constructor() { }

  ngOnInit(): void {
  }

}

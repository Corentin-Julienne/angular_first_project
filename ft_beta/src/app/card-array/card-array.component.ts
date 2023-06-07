import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-card-array',
  templateUrl: './card-array.component.html',
  styleUrls: ['./card-array.component.scss']
})
export class CardArrayComponent implements OnInit {

  cardsArr!: Card[];
  
  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.cardsArr = this.cardsService.cardArr;
  }
}

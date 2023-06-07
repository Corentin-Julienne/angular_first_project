import { Component, Input } from '@angular/core';
import { Card } from '../models/card.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  
  @Input() card!: Card;

  onPressLike()
  {
    if (this.card.likeText === 'Like !')
    {
      this.card.numLikes++;
      this.card.likeText = 'Unlike !';
    }
    else
    {
      this.card.numLikes--;
      this.card.likeText = 'Like !';
    }
  }
}

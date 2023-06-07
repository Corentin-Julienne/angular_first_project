import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cardArr: Card[] = [
    {
      id: 1,
      title: 'new card 1',
      date: new Date(),
      imgUrl: 'https://undertheradarsffbooks.files.wordpress.com/2020/12/951b489c.jpg',
      imgAlt: 'warhammer 40k',
      numLikes: 6,
      likeText: 'Like !'
    },
    {
      id: 2,
      title: 'new card 1',
      date: new Date(),
      imgUrl: 'https://undertheradarsffbooks.files.wordpress.com/2020/12/951b489c.jpg',
      imgAlt: 'warhammer 40k',
      numLikes: 6,
      likeText: 'Like !'   
    }
  ]
}

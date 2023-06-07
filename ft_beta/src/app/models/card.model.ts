export class Card {
	constructor(public id: number,
				public title: string,
			    public date: Date,
				public imgUrl : string,
  				public imgAlt : string,
  				public numLikes : number,
  				public likeText : string) {
	}
}

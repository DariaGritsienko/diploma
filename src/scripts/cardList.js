class CardList {
    constructor(place, card) {
        this.card = card;
        this.place = place;
    }

    render(array) {
        array.forEach(res => {
            const info = {source:res.source.name, description: res.description, publishedAt: res.publishedAt, title: res.title, urlToImage: res.urlToImage};
            this.place.appendChild(this.card.create(info));
        })
    }
    renderCommit(array) {
        array.forEach(res => {
            const infoCommit = {name: res.commit.committer.name, email: res.commit.committer.email, date: res.commit.committer.date, message: res.commit.message, avatar_url: res.author.avatar_url };
            this.place.appendSlide(this.card.createCommit(infoCommit));
        })
    }
}
import {swiper} from './swiper'
import {card} from './card.js';
export const newsList = new CardList(document.querySelector(".news-list"), card);
export const commitsList = new CardList(swiper, card);


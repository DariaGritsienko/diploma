class CardList {
    constructor(place, card) {
        this.card = card;
        this.place = place;
    }

    render(articles) {
        articles.forEach(article => {
            const info = {source:article.source.name, description: article.description, publishedAt: article.publishedAt, title: article.title, urlToImage: article.urlToImage};
            this.place.appendChild(this.card.create(info));
        })
    }
    renderCommit(articles) {
        articles.forEach(article => {
            const infoCommit = {name: article.commit.committer.name, email: article.commit.committer.email, date: article.commit.committer.date, message: article.commit.message, avatar_url: article.author.avatar_url };
            this.place.appendSlide(this.card.createCommit(infoCommit));
        })
    }
}
import {swiper} from './swiper'
import {card} from './card.js';
export const newsList = new CardList(document.querySelector(".news-list"), card);
export const commitsList = new CardList(swiper, card);


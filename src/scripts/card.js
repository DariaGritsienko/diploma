class Card {
    create(news) {
        const newsCard = document.createElement("div");
        newsCard.classList.add("news-card");
        newsCard.innerHTML = `
            <div class="news-card__image"></div>
            <p class="news-card__date"></p>
            <h3 class="news-card__title"></h3>
            <p class="news-card__text"></p>
            <h4 class="news-card__source"></h4>`;
        newsCard.querySelector(".news-card__image").style.backgroundImage = `url(${news.urlToImage})`;
        newsCard.querySelector(".news-card__title").textContent = news.title;
        newsCard.querySelector(".news-card__date").textContent = news.publishedAt;
        newsCard.querySelector(".news-card__text").textContent = news.description;
        newsCard.querySelector(".news-card__source").textContent = news.source;

        return newsCard;
    }
    createCommit(data){
        return `
        <div class="news-slide swiper-slide">
            <p class="news-slide__date">${data.date}</p>
            <div class="news-slide__container">
                <div class="news-slide__image"  style="background-image: url(${data.avatar_url})"></div>
                <div>
                    <h3 class="news-slide__title">${data.name}</h3>
                    <p class="news-slide__mail">${data.email}</p>
                </div>
            </div>
            <p class="news-slide__text">${data.message}</p>
        </div>`;
    }
}

export const card = new Card();
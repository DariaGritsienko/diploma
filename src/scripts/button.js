class Button{
    constructor(spinner, newsList){
        this.spinner = spinner;
        this.newsList = newsList;
    }

    renderLoading(isLoading){
        if(isLoading){
            this.spinner.classList.add('spinner_visible');
        }else{
            this.spinner.classList.remove('spinner_visible');
        }
    }

    notFound(isFound){
        
        if (!isFound) {
            newsError.classList.add('news_error_active');
            newsResult.classList.remove('news_result_active');
        }else{
            newsError.classList.remove('news_error_active');
            newsResult.classList.add('news_result_active');
        }
    }

    error(isError){

        if (!isError) {
            newsErrorUps.classList.add('news_error-ups_active');
            newsResult.classList.remove('news_result_active');
        }else{
            newsErrorUps.classList.remove('news_error-ups_active');
            newsResult.classList.add('news_result_active');
        }

    }

    showMore(){
        const newCard = 3;
        let newCardPos = cardChecker + newCard;
        newsContainer.classList.remove('news-list_height')
        this.newsList.render((JSON.parse(localStorage.getItem('articles'))).slice(cardChecker,newCardPos))
        cardChecker = newCardPos;
        if(JSON.parse(localStorage.getItem('articles')).length <= document.querySelector('.news-list').childNodes.length){
            newsResultButton.classList.add('news__result-button_none')
            cardChecker = 6;
        }
    }
}
import {api} from './api'
import {newsList} from './cardList'
const spinner = document.querySelector('.news_loader');
export const button = new Button(spinner, newsList);
const newsError = document.querySelector('.news_error');
const newsErrorUps = document.querySelector('.news_error-ups');
const newsResult = document.querySelector('.news_result');
const newsContainer = document.querySelector('.news-list');
const newsResultButton = document.querySelector('.news__result-button');
let cardChecker = 6;
const firstGroupCard = 6;

if(localStorage.getItem('titleNews') !== null){
    if(localStorage.getItem('titleNews').length !== 0){
        document.querySelector('#news').value = localStorage.getItem('titleNews')
    }
}
document.querySelector('.header__finder').addEventListener('submit', function (e) {
    e.preventDefault();

    button.renderLoading(true);
    
    api.getInfo()
        .then((result) => {
            button.notFound(true);
            document.querySelectorAll('.news-card').forEach(news => {news.remove()})
            newsList.render(result.articles.slice(0,firstGroupCard));
            newsResultButton.classList.remove('news__result-button_none')
            localStorage.setItem('articles', JSON.stringify(result.articles));
            if (result.articles.length === 0){
                button.notFound(false);
            }
        })
        .catch((err) => {
            button.error(false);
            console.error(`Ошибка: ${err}`);
        })
        .finally((res) =>{
            button.renderLoading(false);
        });
    
});

if(localStorage.getItem('articles') !== null){
    if(localStorage.getItem('articles').length !== 0){
        newsResult.classList.add('news_result_active')
        newsList.render((JSON.parse(localStorage.getItem('articles'))).slice(0,firstGroupCard));
    }
}

newsResultButton.addEventListener('click', function () {
    button.showMore();
});

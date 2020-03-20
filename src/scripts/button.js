class Button{
    constructor(spinner){
        this.spinner = spinner;
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
            newsError.classList.add('news_loader_error');
            newsResult.classList.remove('news_result_active');
        }else{
            newsError.classList.remove('news_loader_error');
            newsResult.classList.add('news_result_active');
        }
    }

    showMore(){
        counter += 1;
        let heightCard;
        if(window.screen.width <= 650){
            counter += 1
            heightCard = 484;
        }else{
            heightCard = 758;
        }
        
        let indexHeight = heightCard*counter;
        if(newsContainer.offsetHeight >= newsContainer.scrollHeight){
            newsResultButton.classList.add('news__result-button_none');
        }
        newsContainer.style.setProperty('--max-height', indexHeight + 'px')
    }
}
import {api} from './api'
import {newsList} from './cardList'
const spinner = document.querySelector('.news_loader');
export const button = new Button(spinner);
const newsError = document.querySelector('.news_error');
const newsResult = document.querySelector('.news_result');
const newsContainer = document.querySelector('.news-list');
const newsResultButton = document.querySelector('.news__result-button');
let counter = 2;

if(sessionStorage.getItem('articles').length !== 0){
    newsResult.classList.add('news_result_active')
    newsList.render(JSON.parse(sessionStorage.getItem('articles')));
}
if(sessionStorage.getItem('titleNews').length !== 0){
    document.querySelector('#news').value = sessionStorage.getItem('titleNews')
}

document.querySelector('.header__finder').addEventListener('submit', function (e) {
    e.preventDefault();

    button.renderLoading(true);
    
    api.getInfo()
        .then((result) => {
            button.notFound(true);
            document.querySelectorAll('.news-card').forEach(news => {news.remove()})
            newsList.render(result.articles);
            sessionStorage.setItem('articles', JSON.stringify(result.articles));
            if (result.articles.length === 0){
                button.notFound(false);
            }
        })
        .catch((err) => {
            button.notFound(false);
            console.error(`Ошибка: ${err}`);
        })
        .finally((res) =>{
            button.renderLoading(false);
        });
    
});

newsResultButton.addEventListener('click', function () {
    button.showMore();
});

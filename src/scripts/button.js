class Button{

    renderLoading(isLoading){
        if(isLoading){
            spinner.classList.add('spinner_visible');
        }else{
            spinner.classList.remove('spinner_visible');
        }
    }

    notFound(isFound){
        if (!isFound) {
            document.querySelector('.news_error').classList.add('news_loader_error');
            document.querySelector('.news_result').classList.remove('news_result_active');
        }else{
            document.querySelector('.news_error').classList.remove('news_loader_error');
            document.querySelector('.news_result').classList.add('news_result_active');
        }
    }

    showMore(){
        document.querySelector('.news-list').classList.remove('news-list_height');
        document.querySelector('.news__result-button').classList.add('news__result-button_none')
    }
}
import {api} from './api'
import {newsList} from './cardList'
export const button = new Button();
const spinner = document.querySelector('.news_loader');
document.querySelector('.header__finder').addEventListener('submit', function (e) {
    e.preventDefault();

    button.renderLoading(true);

    api.getInfo()
        .then((result) => {
            button.notFound(true);
            newsList.render(result.articles);
            sessionStorage.setItem('articles', JSON.stringify(result.articles));
        })
        .catch((err) => {
            button.notFound(false);
            console.error(`Ошибка: ${err}`);
        })
        .finally((res) =>{
            button.renderLoading(false);
        });

    document.querySelector('.header__finder').reset();
});

document.querySelector('.news__result-button').addEventListener('click', function () {
    button.showMore();
});

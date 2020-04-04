const articles = JSON.parse(localStorage.getItem('articles'));
const titleNews = localStorage.getItem('titleNews');
const month = localStorage.getItem('month');
let index = 0;
let indexPrev = 7;
const indexWeek = 7;
const newArrayArticles = [];

document.querySelector('#header__week-news').textContent = `${articles.length}`;
document.querySelector('#header__title').textContent = `«${titleNews}»`;
document.querySelector('#days__month').textContent = `(${month})`;

for (let index = 1; index <= indexWeek; index += 1){
    document.querySelector(`#days_${index}`).textContent = localStorage.getItem(`weekDay_${indexPrev}`);
    indexPrev -= 1;
}

articles.forEach(article => {
    if (article.title.toLowerCase().includes(titleNews.toLowerCase())){
        newArrayArticles[index] = article;
        index += 1;
    }
});

document.querySelector('#header__checked-news').textContent = `${index}`;

for (let index = 1; index <= indexWeek; index += 1){
    let check = 0;
    newArrayArticles.forEach(article => {
        if(JSON.stringify(article.publishedAt).split('"')[1].split('T')[0].split('-')[2].includes(document.querySelector(`#days_${index}`).textContent.split(', ')[0])) {
            check += 1;
        }
    });
    document.querySelector(`#progress_${index}`).value = check;
    document.querySelector(`#check_${index}`).textContent = check;
}


const data = JSON.parse(sessionStorage.getItem('articles'));
const titleNews = sessionStorage.getItem('titleNews');
const month = sessionStorage.getItem('month');
let index = 0;
let indexPrev = 7;
const indexWeek = 7;
let newArrayNews = [];

document.querySelector('#header__week-news').textContent = `${data.length}`;
document.querySelector('#header__title').textContent = `«${titleNews}»`;
document.querySelector('#days__month').textContent = `(${month})`;

for (let index = 1; index <= indexWeek; index += 1){
    document.querySelector(`#days_${index}`).textContent = sessionStorage.getItem(`weekDay_${indexPrev}`);
    indexPrev -= 1;
}

data.forEach(dataNews => {
    if (dataNews.title.toLowerCase().includes(titleNews.toLowerCase())){
        newArrayNews[index] = dataNews;
        index += 1;
    }
});

document.querySelector('#header__checked-news').textContent = `${index}`;

for (let index = 1; index <= indexWeek; index += 1){
    let check = 0;
    newArrayNews.forEach(news => {
        if(JSON.stringify(news.publishedAt).split('"')[1].split('T')[0].includes(document.querySelector(`#days_${index}`).textContent.split(', ')[0])) {
            check += 1;
        }
    });
    document.querySelector(`#progress_${index}`).value = check;
    document.querySelector(`#check_${index}`).textContent = check
}


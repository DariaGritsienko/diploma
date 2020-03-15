const data = JSON.parse(sessionStorage.getItem('articles'));
const titleNews = sessionStorage.getItem('titleNews');
const month = sessionStorage.getItem('month');
let index = 0;
let indexPrev = 7;
let arr = [];

document.getElementById('header__week-news').textContent = `${data.length}`;
document.getElementById('header__title').textContent = `«${titleNews}»`;
document.getElementById('days__month').textContent = `(${month})`;

for (let index = 1; index <= 7; index += 1){
    document.getElementById(`days_${index}`).textContent = sessionStorage.getItem(`weekDay_${indexPrev}`);
    indexPrev -= 1;
}

data.forEach(news => {
    if (news.title.toLowerCase().includes(titleNews.toLowerCase())){
        arr[index] = news;
        index += 1;
    }
});

document.getElementById('header__checked-news').textContent = `${index}`;

for (let index = 1; index <= 7; index += 1){
    let check = 0;
    arr.forEach(news => {
        if(JSON.stringify(news.publishedAt).split('"')[1].split('T')[0].includes(document.getElementById(`days_${index}`).textContent.split(', ')[0])) {
            check += 1;
        }
    });
    document.getElementById(`progress_${index}`).value = check;
    document.getElementById(`check_${index}`).textContent = check
}


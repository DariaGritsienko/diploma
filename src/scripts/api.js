class Api {

    getInfo(){
        let title = document.getElementById('news').value;
        localStorage.setItem('titleNews', title);
        return fetch(`https://newsapi.org/v2/everything?q=${title}&from=${param}&language=ru&pageSize=100&apiKey=20521388801e47aeb05ce2f35e262116`)
            .then((res) => {
                if(res.ok){
                    return res.json();
                } else{
                    return Promise.reject(res.status);
                }
            })
    }
    getCommit(){
        return fetch(`https://api.github.com/repos/DariaGritsienko/diploma/commits`)
            .then((res) => {
                if(res.ok){
                    return res.json();
                } else{
                    return Promise.reject(res.status);
                }
            })
    }
}

export const api = new Api();
const days = 7;
let date = new Date(); // сегодня
let dtms = date.valueOf();
const newdate = new Date(dtms - ((24 * 60 * 60 * 1000) * days));
const param = JSON.stringify(newdate).split('"')[1].split('T')[0];

for (let index = 7; index >= 1; index -= 1){

    let newdate = new Date(dtms - ((24 * 60 * 60 * 1000) * index));
    let param = JSON.stringify(newdate).split('"')[1].split('T')[0];

    localStorage.setItem(`weekDay_${index}`, `${param.split('-')[2]}, ${getWeekDay(newdate)[0]}`);
    localStorage.setItem('month', getWeekDay(newdate)[1]);

}

function getWeekDay(date) {
    date = date || new Date();
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let day = date.getDay();
    let month = date.getMonth();
    return [days[day], months[month]];
}

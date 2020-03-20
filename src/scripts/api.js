class Api {

    getInfo(){
        let title = document.querySelector('#news').value;
        return fetch(`https://newsapi.org/v2/everything?q=${title}&from=${param}&language=ru&pageSize=100&apiKey=20521388801e47aeb05ce2f35e262116`)
            .then((res) => {
                if(res.ok){
                    sessionStorage.setItem('titleNews', title);
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
const date = new Date(); // сегодня
const dtms = date.valueOf();
const indexWeek = 7;
const newdate = new Date(dtms - ((24 * 60 * 60 * 1000) * days));
const param = JSON.stringify(newdate).split('"')[1].split('T')[0];

for (let index = indexWeek; index >= 1; index -= 1){

    const newdate = new Date(dtms - ((24 * 60 * 60 * 1000) * index));
    const param = JSON.stringify(newdate).split('"')[1].split('T')[0];

    sessionStorage.setItem(`weekDay_${index}`, `${param.split('-')[2]}, ${getWeekDay(newdate)[0]}`);
    sessionStorage.setItem('month', getWeekDay(newdate)[1]);

}

function getWeekDay(date) {
    date = date || new Date();
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const day = date.getDay();
    const month = date.getMonth();
    return [days[day], months[month]];
}

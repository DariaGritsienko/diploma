class CommitsLoader{
    constructor(api, commitsList, swiper){
        this.api = api;
        this.commitsList = commitsList;
        this.swiper = swiper;
    }
    loadData(){
        this.api.getCommit()
            .then((result) => {
                this.commitsList.renderCommit(result);
            })
            .catch((err) => {
                console.error(`Ошибка: ${err}`);
            })
    }
}

import {api} from './api'
import {commitsList} from './cardList'
import {swiper} from './swiper'

export const commits = new CommitsLoader(api, commitsList, swiper);

commits.loadData();
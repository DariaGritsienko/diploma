class Commits{
    constructor(api, commitsList){
        this.api = api;
        this.commitsList = commitsList;
    }
    loadData(){
        this.api.getCommit()
        .then((result) => {
            this.commitsList.renderCommit(result)
        })
        .catch((err) => {
            console.error(`Ошибка: ${err}`);
        })
    }
}

import {api} from './api'
import {commitsList} from './cardList'

export const commits = new Commits(api, commitsList);

commits.loadData();
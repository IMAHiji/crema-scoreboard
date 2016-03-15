import alt from '../libs/alt';

class SlackleteStore{
    constructor(){
        this.slackletes=[]
    };
}

export default alt.createStore(SlackleteStore, 'SlackleteStore');

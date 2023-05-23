import {action, makeObservable, observable} from 'mobx';

class studyStores {
    imageUrl = 'https://i.scdn.co/image/ab6761610000e5eb006ff3c0136a71bfb9928d34';
    userName = 'iu';
    constructor() {
        makeObservable(this, {
            imageUrl: observable,
            userName: observable,
            changeName: action
        });
    }
    changeName = () => {
        if (this.userName == 'iu') {
            this.userName = '是我的李知恩';
        } else {
            this.userName = 'iu';
        }
    };
}
const studyStore = new studyStores();
export default studyStore;

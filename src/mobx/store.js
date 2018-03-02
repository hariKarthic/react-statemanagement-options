import {observable, autorun} from 'mobx';

//Denote this as `observable` , makes it open to `listening`
let appStore = observable({

    _count: 0,

    get count() {
        return this._count;
    },

    increment() {
        this._count++
    },

    decrement() {
        this._count--;
    }

});

//listening to changes, whenever any observable stuff is used , it runs
autorun(() => {
    console.log("Count changed", appStore.count);
});

export default appStore;



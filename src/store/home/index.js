import { observable, action, autorun, computed } from 'mobx'
class Homestore {
    @observable num = 0
    constructor() {
        this.num = 0;
    }
    @computed get total() {
        return this.num
    }
    set tol(value) {
        this.num = 10
    }
    @action add() {
        this.num += 1;
    }
}
autorun(() => {
    console.log(Homestore.prototype.num);
});
export default Homestore;
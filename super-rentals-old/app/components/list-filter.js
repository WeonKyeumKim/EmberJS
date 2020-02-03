import Component from '@ember/component';

export default Component.extend({
    classNames: ['list-filter'],
    /* value: cityInput */
    value: '',

    init() {
        /*
            super function 은 필요할 수 있는 많은 optional paramter 들을
            encapsulate 한다.
        */
        this._super(...arguments);
        /*
            closure actions 으로 알려진 pattern
            filter function 
                1.calling object 에 의하여 pass 되어진다.
                2.asynchronous function 의 result 를 represent 하는 
                  JacaScript object 인 promise 를 return 한다. 
                3.then 은 filter function calling 의 result 에서 불려진다.
            controllers/rentals.js
                city 에 의한 rentals 의 actual filter 를 하기 위한 filter function 을
                implement 하기 위하여, route 이름과 같은 controller 를 만든다.
                그것은 action 과 properties 를 contain 한다. 
        */
        this.filter('').then((results) => this.set('results', results));
    },

    actions: {
        // filtering data based on input
        handleFilterEntry() {
            /*
                list-filter.hbs 의 {{input}} 으로 부터 enter 되어진 this.value
            */
            // let filterInputvalue = this.value;  // entered city from template
            // let filterAction = this.filter;     // filter 는 route controller 의 action
            /*
                rentals 의 list 로 search item filter 를 apply 하고, 
                results 라는 component attribute 를 set 한다.
            */
            this.filter(this.value).then((filterResults) => this.set('results', filterResults));
            // filterAction(filterInputvalue).then((filterResults) => this.set('results', filterResults));
        }
    }
});
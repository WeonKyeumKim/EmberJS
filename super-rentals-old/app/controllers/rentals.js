import Controller from '@ember/controller';
/*
    city 에 의한 rentals 의 actual filter 를 하기 위한 filter function 을
    implement 하기 위하여, route 이름과 같은 controller 를 만든다.
    그것은 action 과 properties 를 contain 한다. 
*/
export default Controller.extend({
    actions: {
        /*
            value property 를 take 하고, data store 안에 records 에 대한
            rental data 를 filter 한다.
        */
        filterByCity(param) {
            if (param !== '') {
                return this.store.query('rental', {city: param});
            } else {
                return this.store.findAll('rental');
            }
        }
    }
});

import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        //* Ember Data 는 store object 를 사용하여 model rental 을 
        //* findAll method 를 사용하여 모든 records 를 fetch 한다.
        //* adapter application.js (for all models) 을 통해서
        //* data 의 장소를 알려준다.
        return this.store.findAll('rental');
    }
});

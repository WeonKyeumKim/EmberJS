import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        //store: fetch data from Ember Data thru adapter
        //findAll('model name')
        return this.store.findAll('post');
    }    
});

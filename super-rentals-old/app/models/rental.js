import DS from 'ember-data';

export default DS.Model.extend({
    /* 
        define attributes of mirage/config.js 
        do not include type and id
    */
    title: DS.attr(),
    owner: DS.attr(),
    city: DS.attr(),
    category: DS.attr(),
    image: DS.attr(),
    bedrooms: DS.attr(),
    description: DS.attr()
});

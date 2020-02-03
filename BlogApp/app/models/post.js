import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
    userid: attr("string"),
    title: attr("string"),
    body: attr("string")
});

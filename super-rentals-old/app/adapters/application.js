import DS from 'ember-data';

//* RestAdapter 는 외부의 url 에서 fetch 할 때 사용한다.
//* JSONAPIAdapter 는 mirage 에서 fetch 할 때 사용한다. (default)

export default DS.JSONAPIAdapter.extend({
        //* prefix api 를 자동으로 완성 한다.
        //* user 가 /rentals 을 request 하면 /api/rentals 로 만들어 준다.
        namespace: 'api'
});

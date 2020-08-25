import queryString from 'query-string';

import './them/default.less';

const type = queryString.parse(location.search).type;

if (type === 'blue') {
    import(/* webpackChunkName: "blue" */ './them/blue.less');
} else if (type === 'red') {
    import(/* webpackChunkName: "red" */ './them/red.less');
}

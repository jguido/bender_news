const AtomComponent = require('./AtomComponent');

class JsInfo extends AtomComponent
{
    feed() {
        return 'https://news.js.org/feed/';
    }
}

module.exports = JsInfo;



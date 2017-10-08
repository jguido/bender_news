const AtomComponent = require('./AtomComponent');

class PhpInfo extends AtomComponent
{

    feed() {
        return 'http://www.planet-php.net/atom/';
    }
}

module.exports = PhpInfo;



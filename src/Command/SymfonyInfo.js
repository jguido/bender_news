const AtomComponent = require('./AtomComponent');

class SymfonyInfo extends AtomComponent
{

    feed() {
        return 'http://feeds.fabien.potencier.org/aidedecamp?format=xml';
    }
}

module.exports = SymfonyInfo;



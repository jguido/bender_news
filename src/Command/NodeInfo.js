const AtomComponent = require('./AtomComponent');

class NodeInfo extends AtomComponent
{
    feed() {
        return 'http://fetchrss.com/rss/59d2b6b68a93f8930a8b4567667751764.atom';
    }
}

module.exports = NodeInfo;



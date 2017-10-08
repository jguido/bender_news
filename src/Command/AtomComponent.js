const Component = require('./Component');
const AtomReader = require('../Reader/AtomReader');

class AtomComponent extends Component
{
    feed(){};

    /**
     *
     * @param body
     * @return {Promise}
     */
    render(body) {
        return AtomReader(this.feed(), 10);
    }
}

module.exports = AtomComponent;



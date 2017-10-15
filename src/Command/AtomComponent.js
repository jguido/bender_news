const Component = require('./Component');
const AtomReader = require('../Reader/AtomReader');

class AtomComponent extends Component
{
    feed(){};

    /**
     *
     * @return {Promise}
     */
    render() {
        return AtomReader(this.feed(), 10);
    }
}

module.exports = AtomComponent;



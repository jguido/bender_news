const Component = require('./Component');

class Unknown extends Component
{
    /**
     *
     * @param body
     * @return {Promise}
     */
    render(body) {
        return new Promise((resolve, reject) => resolve(new Error('Command not yet learned...')));
    }
}

module.exports = Unknown;

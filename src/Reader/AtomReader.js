const request = require('request');
const FeedParser = require('feedparser');

const AtomReader = (feed, max = 10) => {
    return new Promise((resolve, reject) => {

        const req = request(feed);
        let news = [];
        let feedparser = new FeedParser();

        req.on('error', error => {
            throw error
        });

        req.on('response', (res) => {
            let stream = req; // `this` is `req`, which is a stream

            if (res.statusCode !== 200) {
                req.emit('error', new Error('Bad status code'));
            }
            else {
                stream.pipe(feedparser);
            }
        });

        feedparser.on('error', (error) => {
            throw error;
        });

        feedparser.on('readable', () => {
            // This is where the action is!
            let stream = feedparser; // `this` is `feedparser`, which is a stream
            let meta = feedparser.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
            let item;

            while (item = stream.read()) {
                news.push(item)
            }
        });
        if (news.length >= max) {
            resolve(news);
        }

        feedparser.on('end', () => resolve(news));
    });
};

module.exports = AtomReader;
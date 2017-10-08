const AtomComponent = require('./AtomComponent');

class InfosecInfo extends AtomComponent
{
    feed(){
        return 'https://www.darkreading.com/rss_simple.asp?f_n=645&f_ln=Application%20Security';
    };
}

module.exports = InfosecInfo;



const Unknown = require('./Unknown');
const JsInfo = require('./JsInfo');
const InfosecInfo = require('./InfosecInfo');
const NodeInfo = require('./NodeInfo');
const PhpInfo = require('./PhpInfo');
const ScalaInfo = require('./ScalaInfo');
const SymfonyInfo = require('./SymfonyInfo');


const commandFactory = (type) => new Promise((resolve, reject) => {
  if (!type) {
      throw new Error('news type is mandatory');
  }

  const command = resolveInfoParameters(type);

  resolve(command.generateResponse(body));
});

const resolveInfoParameters = (cmd) => {
    switch(cmd) {
        case 'infosec':
            return new InfosecInfo();
        case 'node':
            return new NodeInfo();
        case 'js':
            return new JsInfo();
        case 'php':
            return new PhpInfo();
        case 'symfony':
            return new SymfonyInfo();
        case 'scala':
            return new ScalaInfo();
        default:
            return new Unknown();

    }
};

module.exports = commandFactory;

exports.log = function log(message) {
    console.log('[!!!DEMESIO!!!] ' + message);
  }

  const logger = require('./logger');

logger.log('Action is coming');
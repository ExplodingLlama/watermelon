const dauria = require('dauria');

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
      if (!hook.data.uri && hook.params.file){
          const file = hook.params.file;
          const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);
          hook.data = {uri: uri};
      }
  };
};

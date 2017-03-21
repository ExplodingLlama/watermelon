'use strict';

// src/services/uploads/hooks/upload_fix_result.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {

  return function(hook) {
      var url = '/images/' + hook.result.id;
      var size = hook.result.size;
      hook.result = {url: url, size: size};
      return hook;
  };
};

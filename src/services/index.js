'use strict';
const authentication = require('./authentication');
const user = require('./user');
const uploads = require('./uploads');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(uploads);
};

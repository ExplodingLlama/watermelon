'use strict';

const uploadFixResult = require('./upload_fix_result');

const covertToDatauri = require('./covert_to_datauri');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [

  ],
  find: [],
  get: [],
  create: [covertToDatauri()],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [uploadFixResult()],
  update: [],
  patch: [],
  remove: []
};

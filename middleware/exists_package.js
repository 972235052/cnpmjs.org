/**!
 * Copyright(c) fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var packageService = require('../services/package');

module.exports = function* (next) {
  var name = this.params.name || this.params[0];
  var pkg = yield packageService.getLatestModule(name);
  if (pkg) {
    return yield* next;
  }
  this.status = 404;
  this.body = {
    error: 'not_found',
    reason: 'document not found'
  };
};

/**
 * @license tbd - something open.
 * see: https://github.com/UWNetworksLab/freedom
 */
(function (global) {
  'use strict';
  (function freedom() {
    var freedom_src = '(function (global) {\'use strict\';(' + freedom + ')();})(this);';

    var context,
        setup;

    /* jshint -W069 */
    if (typeof global['freedom'] !== 'undefined') {
      return;
    }

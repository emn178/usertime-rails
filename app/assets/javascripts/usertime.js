/*
 * usertime.js v0.1.1
 * https://github.com/emn178/usertime.js
 *
 * Copyright 2015, emn178@gmail.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
;(function($, window, document, undefined) {
  'use strict';

  var TAG = 'usertime';
  var FORMAT = 'format';

  window.UserTime = {
    DefaultFormat: 'YYYY-MM-DD HH:mm:ss'
  };

  function convert() {
    var element = $(this);
    var time = element.text();
    if(!time) {
      return;
    }
    time = /^[0-9]+$/.test(time) ? parseInt(time) : time;
    time = new Date(time);
    if(time.toString() == 'Invalid Date') {
      return;
    }
    time = moment(time);
    var format = element.attr(FORMAT);
    if(format === undefined) {
      format = UserTime.DefaultFormat;
    }
    element.replaceWith(time.format(format));
  }

  function convertAll() {
    $(TAG).each(convert);
  }

  $(document).on('ready page:load', convertAll);
})(jQuery, window, document);

/**
 * [usertime.js]{@link https://github.com/emn178/usertime.js}
 *
 * @version 0.1.2
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2016
 * @license MIT
 */
(function ($) {
  'use strict';

  var TAG = 'usertime';
  var FORMAT = 'format';
  var MUTATION = window.MutationObserver !== undefined;

  window.UserTime = {
    DefaultFormat: 'YYYY-MM-DD HH:mm:ss',
    convert: convert
  };

  function convert() {
    var element = $(this);
    var time = element.text();
    if (!time) {
      return;
    }
    time = /^[0-9]+$/.test(time) ? parseInt(time) : time;
    time = new Date(time);
    if (time.toString() == 'Invalid Date') {
      return;
    }
    time = moment(time);
    var format = element.attr(FORMAT);
    if (format === undefined) {
      format = UserTime.DefaultFormat;
    }
    element.replaceWith(time.format(format));
  }

  function convertAll() {
    $(TAG).each(convert);
  }

  if (MUTATION) {
    var observer = new MutationObserver(function (records) {
      records.forEach(function (record) {
        if (!record.addedNodes.length) {
          return;
        }
        Array.from(record.addedNodes).forEach(function (node) {
          if (node.tagName == 'USERTIME') {
            convert.call(node);
          }
        });
      });
    });
    observer.observe(document, { 
      childList: true, 
      subtree: true
    });
  }

  $(document).on('ready page:load', convertAll);
})(jQuery);

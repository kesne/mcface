'use strict';

var strand = require('strands').strand;
var capitalizeFirstChar = require('capitalize-first-char');
var f = require('the-letter-f');
var a = require('the-letter-a');
var c = require('the-letter-c');
var e = require('the-letter-e');
var m = require('the-letter-m');
var y = require('the-letter-y');
var space = require('the-letter-space');

module.exports = function McFace(thing) {
  var word = strand('', '', '');

  word(capitalizeFirstChar(thing));
  word(y);
  word(space);
  word(capitalizeFirstChar(m));
  word(c);
  word(capitalizeFirstChar(thing));
  word(f);
  word(a);
  word(c);
  word(e);

  return word.toString();
};

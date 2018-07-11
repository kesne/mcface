'use strict';

var strand = require('strands').strand;
var capitalizeFirstChar = require('capitalize-first-char');
var f = require('@characters/f');
var a = require('@characters/a');
var c = require('@characters/c');
var e = require('@characters/e');
var M = require('@characters/m-uppercase');
var y = require('@characters/y');
var space = require('@characters/space');

module.exports = function McFace(thing) {
  var word = strand('', '', '');

  word(capitalizeFirstChar(thing));
  word(y);
  word(space);
  word(M);
  word(c);
  word(capitalizeFirstChar(thing));
  word(f);
  word(a);
  word(c);
  word(e);

  return word.toString();
};

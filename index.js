'use strict';

module.exports = function McFace(thing) {
  return ''.concat(
    require('capitalize-first-char')(thing),
    require('./constants/y.js'),
    require('./constants/space.js'),
    require('./constants/Mc.js'),
    require('capitalize-first-char')(thing),
    require('./constants/face.js')
  );
};

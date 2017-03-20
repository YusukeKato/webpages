'use strict';

var wid, hei, delta = 30;

function init() {
  var canvas = document.getElementById('field');
  wid = canvas.width / delta;
  hei = canvas.height / delta;
  points = canvas.getContext( '2d' );
  points.font = "20px sans-serif";
}

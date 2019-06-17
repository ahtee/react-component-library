'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

// Button.js

function Button(_ref) {
  var type = _ref.type,
      onClick = _ref.onClick,
      data = _ref.data;
  React.createElement("button", {
    type: type,
    onClick: onClick
  }, data);
}

// Card.js

function Card(_ref) {
  var title = _ref.title,
      data = _ref.data;
  React.createElement("div", null, React.createElement("h1", null, title), React.createElement("p", null, data));
}

exports.Button = Button;
exports.Card = Card;

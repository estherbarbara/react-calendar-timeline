"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultGroupRowRenderer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultGroupRowRenderer = function defaultGroupRowRenderer(_ref) {
  var onContextMenu = _ref.onContextMenu,
      onDoubleClick = _ref.onDoubleClick,
      className = _ref.className,
      style = _ref.style;
  return _react["default"].createElement("div", {
    onContextMenu: onContextMenu,
    onDoubleClick: onDoubleClick,
    className: className,
    style: style
  });
};

exports.defaultGroupRowRenderer = defaultGroupRowRenderer;
defaultGroupRowRenderer.propTypes = {
  onContextMenu: _propTypes["default"].func,
  onDoubleClick: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  group: _propTypes["default"].array,
  timelineContext: _propTypes["default"].object,
  getLeftOffsetFromDate: _propTypes["default"].func
};
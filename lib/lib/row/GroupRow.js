"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PreventClickOnDrag = _interopRequireDefault(require("../interaction/PreventClickOnDrag"));

var _defaultGroupRowRenderer = require("./defaultGroupRowRenderer");

var _TimelineStateContext = require("../timeline/TimelineStateContext");

var _HeadersContext = require("../headers/HeadersContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var passThroughPropTypes = {
  onDoubleClick: _propTypes["default"].func.isRequired,
  onContextMenu: _propTypes["default"].func.isRequired,
  isEvenRow: _propTypes["default"].bool.isRequired,
  style: _propTypes["default"].object.isRequired,
  clickTolerance: _propTypes["default"].number.isRequired,
  group: _propTypes["default"].object.isRequired,
  horizontalLineClassNamesForGroup: _propTypes["default"].func,
  rowRenderer: _propTypes["default"].func
};

var GroupRow =
/*#__PURE__*/
function (_Component) {
  _inherits(GroupRow, _Component);

  function GroupRow() {
    _classCallCheck(this, GroupRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(GroupRow).apply(this, arguments));
  }

  _createClass(GroupRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onContextMenu = _this$props.onContextMenu,
          onDoubleClick = _this$props.onDoubleClick,
          isEvenRow = _this$props.isEvenRow,
          style = _this$props.style,
          onClick = _this$props.onClick,
          clickTolerance = _this$props.clickTolerance,
          horizontalLineClassNamesForGroup = _this$props.horizontalLineClassNamesForGroup,
          group = _this$props.group,
          rowRenderer = _this$props.rowRenderer,
          getLeftOffsetFromDate = _this$props.getLeftOffsetFromDate,
          getTimelineState = _this$props.getTimelineState,
          timeSteps = _this$props.timeSteps;
      var classNamesForGroup = [];

      if (horizontalLineClassNamesForGroup) {
        classNamesForGroup = horizontalLineClassNamesForGroup(group);
      }

      var timelineState = getTimelineState();
      var timelineContext = {
        timelineWidth: timelineState.width,
        visibleTimeStart: timelineState.visibleTimeStart,
        visibleTimeEnd: timelineState.visibleTimeEnd,
        canvasTimeStart: timelineState.canvasTimeStart,
        canvasTimeEnd: timelineState.canvasTimeEnd,
        timelineUnit: timelineState.timelineUnit,
        timeSteps: timeSteps
      };
      return _react["default"].createElement(_PreventClickOnDrag["default"], {
        clickTolerance: clickTolerance,
        onClick: onClick
      }, rowRenderer({
        onContextMenu: onContextMenu,
        onDoubleClick: onDoubleClick,
        className: (isEvenRow ? 'rct-hl-even ' : 'rct-hl-odd ') + (classNamesForGroup ? classNamesForGroup.join(' ') : ''),
        style: style,
        group: group,
        timelineContext: timelineContext,
        getLeftOffsetFromDate: getLeftOffsetFromDate
      }));
    }
  }]);

  return GroupRow;
}(_react.Component);

_defineProperty(GroupRow, "propTypes", _objectSpread({}, passThroughPropTypes, {
  getLeftOffsetFromDate: _propTypes["default"].func.isRequired,
  getTimelineState: _propTypes["default"].func.isRequired,
  timeSteps: _propTypes["default"].object.isRequired
}));

_defineProperty(GroupRow, "defaultProps", {
  rowRenderer: _defaultGroupRowRenderer.defaultGroupRowRenderer
});

var GroupRowWrapper = function GroupRowWrapper(props) {
  return _react["default"].createElement(_TimelineStateContext.TimelineStateConsumer, null, function (_ref) {
    var getLeftOffsetFromDate = _ref.getLeftOffsetFromDate,
        getTimelineState = _ref.getTimelineState;
    return _react["default"].createElement(_HeadersContext.TimelineHeadersConsumer, null, function (_ref2) {
      var timeSteps = _ref2.timeSteps;
      return _react["default"].createElement(GroupRow, _extends({
        getLeftOffsetFromDate: getLeftOffsetFromDate,
        getTimelineState: getTimelineState,
        timeSteps: timeSteps
      }, props));
    });
  });
};

var _default = GroupRowWrapper;
exports["default"] = _default;
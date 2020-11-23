"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _tooltip = _interopRequireDefault(require("../tooltip"));

var _useCombinedRefs = _interopRequireDefault(require("../_util/hooks/useCombinedRefs"));

var SliderTooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var visible = props.visible;
  var innerRef = React.useRef(null);
  var tooltipRef = (0, _useCombinedRefs["default"])(ref, innerRef);
  var rafRef = React.useRef(null);

  function cancelKeepAlign() {
    window.cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  }

  function keepAlign() {
    rafRef.current = window.requestAnimationFrame(function () {
      tooltipRef.current.forcePopupAlign();
      rafRef.current = null;
      keepAlign();
    });
  }

  React.useEffect(function () {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }

    return cancelKeepAlign;
  }, [visible]);
  return /*#__PURE__*/React.createElement(_tooltip["default"], (0, _extends2["default"])({
    ref: tooltipRef
  }, props));
});
var _default = SliderTooltip;
exports["default"] = _default;
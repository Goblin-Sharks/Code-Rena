import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as React from 'react';
import { LastIndexContext } from '.';
var spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};
export default function Item(_ref) {
  var className = _ref.className,
      direction = _ref.direction,
      index = _ref.index,
      size = _ref.size,
      marginDirection = _ref.marginDirection,
      children = _ref.children,
      split = _ref.split;

  var _a;

  var latestIndex = React.useContext(LastIndexContext);

  if (children === null || children === undefined) {
    return null;
  }

  var style = index >= latestIndex ? {} : _defineProperty({}, direction === 'vertical' ? 'marginBottom' : marginDirection, ((_a = typeof size === 'string' ? spaceSize[size] : size) !== null && _a !== void 0 ? _a : 0) / (split ? 2 : 1));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, children), index < latestIndex && split && /*#__PURE__*/React.createElement("span", {
    className: "".concat(className, "-split"),
    style: style
  }, split));
}
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _ref = require("../ref");

function useCombinedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  var targetRef = React.useRef();
  React.useEffect(function () {
    refs.forEach(function (ref) {
      if (!ref) return;
      (0, _ref.fillRef)(ref, targetRef.current);
    });
  }, [refs]);
  return targetRef;
}

var _default = useCombinedRefs;
exports["default"] = _default;
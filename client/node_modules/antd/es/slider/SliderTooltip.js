import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import Tooltip from '../tooltip';
import useCombinedRefs from '../_util/hooks/useCombinedRefs';
var SliderTooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var visible = props.visible;
  var innerRef = React.useRef(null);
  var tooltipRef = useCombinedRefs(ref, innerRef);
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
  return /*#__PURE__*/React.createElement(Tooltip, _extends({
    ref: tooltipRef
  }, props));
});
export default SliderTooltip;
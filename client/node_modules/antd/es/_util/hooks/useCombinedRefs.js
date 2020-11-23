import * as React from 'react';
import { fillRef } from '../ref';

function useCombinedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  var targetRef = React.useRef();
  React.useEffect(function () {
    refs.forEach(function (ref) {
      if (!ref) return;
      fillRef(ref, targetRef.current);
    });
  }, [refs]);
  return targetRef;
}

export default useCombinedRefs;
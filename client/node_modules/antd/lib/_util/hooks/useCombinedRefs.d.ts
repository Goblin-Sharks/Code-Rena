import * as React from 'react';
declare function useCombinedRefs<T>(...refs: Array<React.MutableRefObject<T> | ((instance: T) => void) | null>): React.MutableRefObject<T | undefined>;
export default useCombinedRefs;

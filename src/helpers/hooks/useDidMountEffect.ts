import { useEffect, useRef } from "react";

const useDidMountEffect = (func: () => void, dependencies: any[]): void => {
  const didMount = useRef(false);

  useEffect(() => {
    didMount.current ? func() : (didMount.current = true);
  }, dependencies);
}

export default useDidMountEffect;

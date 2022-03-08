import { useEffect } from "react";

type Element = HTMLElement;
type ElementType = keyof HTMLElementEventMap;
type Callback = (element?: any) => void;

export function useEventListener(
  element: Element | undefined | null,
  type: ElementType,
  callback?: Callback
) {
  useEffect(() => {
    const callbackIsFn = typeof callback === "function";
    console.log("element", element);
    callbackIsFn && element?.addEventListener(type, callback);

    return () => {
      callbackIsFn && element?.removeEventListener(type, callback);
    };
  }, [element, type, callback]);
}

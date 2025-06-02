import { useState, useEffect, useRef, RefObject } from "react";

type ScrollDirection = "up" | "down" | null;
type ScrollElement = HTMLElement | Window;

interface UseScrollTrackerResult {
  scrollDirection: ScrollDirection;
  isScrollEnd: boolean;
}

const useScrollTracker = (
  elementRef?: RefObject<HTMLElement>
): UseScrollTrackerResult => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [isScrollEnd, setIsScrollEnd] = useState<boolean>(false);
  const prevScrollY = useRef<number>(0);
  const ticking = useRef<boolean>(false);

  useEffect(() => {
    const element: ScrollElement = elementRef?.current || window;

    const handleScroll = (): void => {
      const currentScrollY: number =
        element === window
          ? window.scrollY
          : (element as HTMLElement).scrollTop;

      // Check scroll direction
      if (currentScrollY > prevScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < prevScrollY.current) {
        setScrollDirection("up");
      }

      prevScrollY.current = currentScrollY;

      // Check if reached end of scroll
      if (element === window) {
        const isAtBottom: boolean =
          window.innerHeight + currentScrollY >= document.body.offsetHeight;
        setIsScrollEnd(isAtBottom);
      } else {
        const scrollElement = element as HTMLElement;
        const isAtBottom: boolean =
          scrollElement.scrollHeight - scrollElement.scrollTop <=
          scrollElement.clientHeight + 1;
        setIsScrollEnd(isAtBottom);
      }

      ticking.current = false;
    };

    const throttledHandleScroll = (): void => {
      if (!ticking.current) {
        window.requestAnimationFrame(handleScroll);
        ticking.current = true;
      }
    };

    element.addEventListener("scroll", throttledHandleScroll);

    return (): void => {
      element.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [elementRef]);

  return { scrollDirection, isScrollEnd };
};

export default useScrollTracker;

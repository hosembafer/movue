import { onBeforeUnmount } from 'vue';

export type IntersectionHandler = (entries: IntersectionObserverEntry[]) => void;

export interface UseIntersectionObserverOptions extends IntersectionObserverInit {}

export const useIntersectionObserver = (
  handler: IntersectionHandler,
  options?: UseIntersectionObserverOptions,
) => {
  let observer: IntersectionObserver | null = null;

  const stop = () => {
    if (!observer) {
      return;
    }
    observer.disconnect();
    observer = null;
  };

  const observe = (target: Element | null, overrideOptions?: UseIntersectionObserverOptions) => {
    stop();

    if (!target || typeof window === 'undefined') {
      return;
    }

    observer = new IntersectionObserver(handler, overrideOptions ?? options);
    observer.observe(target);
  };

  onBeforeUnmount(() => {
    stop();
  });

  return {
    observe,
    stop,
  };
};

export type UseIntersectionObserverReturn = ReturnType<typeof useIntersectionObserver>;

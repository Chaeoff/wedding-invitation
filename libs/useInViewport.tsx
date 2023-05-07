export default function useIsInViewport(elem: HTMLDivElement | null) {
  if (elem !== null) {
    const element = elem.getBoundingClientRect();
    return (
      element.top >= 0 &&
      element.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}

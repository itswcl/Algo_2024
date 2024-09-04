export default function debounce(func, wait) {
  let timeoutId;

  return function (...args) {
    timeoutId = setTimeout(() => {
      timeoutId = null;
      func.apply(this, args);
    }, wait);
  };
}

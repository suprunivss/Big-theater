export function debounce(callback, timeout) {
  let flag = false;

  const decorator = (...arg) => {
    if (flag) return;

    callback(...arg);

    flag = true;

    setTimeout(() => {
      flag = false;
    }, timeout)
  }
  return decorator;
}

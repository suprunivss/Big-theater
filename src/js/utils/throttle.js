export function throttle(callback, timeout) {
  let flag = false;
  let savedArguments = null;

  const decorator = (...currentArguments) => {
    if (flag) {
      savedArguments = currentArguments;
      return;
    }

    callback(...currentArguments);
    flag = true;

    setTimeout(() => {
      flag = false;

      if (savedArguments) {
        decorator(...savedArguments);
        savedArguments = null;
      }
    }, timeout)

  }

  return decorator;
}

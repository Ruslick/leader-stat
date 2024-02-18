export const localStorageObserver = () => {
  const originalSetItem = localStorage.setItem;
  const originalRemoveItem = localStorage.removeItem;
  // eslint-disable-next-line func-names
  localStorage.setItem = function (...args) {
    dispatchEvent(new Event("onStorageChange"));
    originalSetItem.apply(this, args);
  };

  // eslint-disable-next-line func-names
  localStorage.removeItem = function (...args) {
    dispatchEvent(new Event("onStorageChange"));
    originalRemoveItem.apply(this, args);
  };
};

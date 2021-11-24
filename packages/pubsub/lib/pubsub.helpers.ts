export type Callback<T> = (quote: T) => void;

export const subscriber = <T>(channelName: string, callback: Callback<T>) => {
  const subscribe = function subscribeHandler(args: unknown) {
    const { detail } = args as { detail: T }
    callback(detail);
  };

  window.addEventListener(channelName, subscribe, false);
  return function unsubscribe() {
    window.removeEventListener(channelName, subscribe, false);
  }
}

export const publish = <T>(channelName: string, message: T) => {
  const event = new CustomEvent(channelName, { detail: message });
  dispatchEvent(event);
}
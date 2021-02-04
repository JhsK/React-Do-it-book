import React from "react";

export default function (loadingMessage = "로딩 중") {
  return function withLoading(WrappedComponent) {
    const { displayName, name: ComponentName } = WrappedComponent;
    const wrappedComponentName = displayName || ComponentName;

    function WithLoading({ isLoading, ...otherProps }) {
      if (isLoading) return loadingMessage;

      return <WrappedComponent {...otherProps} />;
    }
    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    return WithLoading;
  };
}

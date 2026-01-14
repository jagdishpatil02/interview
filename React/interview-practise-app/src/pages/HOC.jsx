import React from "react";

const HOC = (WrappedComponent) => {
  return function AuthComponent(props) {
    const isAuthenticated = true;

    if (!isAuthenticated) {
      return <p>Please login</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default HOC;

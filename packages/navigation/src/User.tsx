import * as React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

const User: React.VFC = (props) => {
  console.log("props111 from user", props);
  return (
    <div
      style={{
        width: "100%",
        background: "#20232a",
        color: "#61dafb",
        padding: "2rem",
        minHeight: "100px",
        fontWeight: "bold",
      }}
    >
      User is dumb
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </div>
  );
};

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: User,
  errorBoundary(err, info, props) {
    console.log("error ", err, info, props);

    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  },
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

export default User;

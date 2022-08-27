import React, { useMemo, createRef } from "react";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

const { registerApplication, start } = require("single-spa");

const ApiContent: React.VFC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        background: "#20232a",
        color: "#61dafb",
        padding: "2rem",
        minHeight: "100px",
        fontSize: 32,
        fontWeight: "bold",
      }}
    >
      Home {users.length}
      {users.map((user, index) => (
        // @ts-ignore
        <div
          ref={(refObj) => {
            console.log("assigning", refObj, index);
            import("home-nav/User").then((app) => {
              registerApplication(`apiItems:${index}`, app, () => true, {
                domElement: refObj,
              });
            });
            start();
          }}
          key={index}
        >
          {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        </div>
      ))}
      {/* {users?.map((user) => {
        return (
          <div>
          </div>
        );
      })} */}
    </div>
  );
};

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ApiContent,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

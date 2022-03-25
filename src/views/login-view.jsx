import React from "react";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { checkIsLogin } from "../lib/auth-utils";

const LoginView = () => {
  useEffect(() => {
    alert("Mantul");
    const isLogin = checkIsLogin();
    console.log(isLogin);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <p>
        <FormattedMessage
          id="loading-title"
          defaultMessage="Loading..."
          description="Loading title"
        />
      </p>
    </div>
  );
};
export default LoginView;

import { getDomain } from "../lib/cookie-util";

export function checkIsLogin() {
  const isLogin = Cookies.get(AUTH_CRED, getDomain());

  return !!isLogin;
}

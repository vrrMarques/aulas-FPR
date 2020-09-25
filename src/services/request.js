import fetch from "isomorphic-unfetch";
import { timeout } from "../helpers/fetch";

function request(uri, options = {}) {
  console.log(`Request on: ${uri}`);

  return timeout(
    options.timeout || 100000,
    fetch(uri, {
      ...options,
      headers: {
        ...options.headers,
      },
    }).then((res) => {
      if (!res.ok) throw res;
      return res;
    })
  );
}

export default request;

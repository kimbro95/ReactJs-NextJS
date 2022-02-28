import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello NextJS {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
    </div >
    /*
      #1.2 Static Per Rendering
        NextJS는 앱에 있는 페이지들이 미리 렌더링된다.

        - create react app : CSR( Client Side Render )
        브라우저가 유저가 보는 UI를 만드는 모든 것을 한다.
        브라우저가 자바스크립트, React 등 모든 것을 fetch 한 후에야 UI가 보인다.

        - NextJS : SSR ( Server Side Render )
        CSR가 다르게 유저는 기본 HTML UI는 볼 수 있다.
        HTML를 가져온 후 자바스크립트, React, API 등 가져올 동안 유저는 기본적인 HTML로된 UI는 볼 수 있다.
    */
  );
}
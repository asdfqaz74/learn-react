import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const data = {
  greetingMessage: ["hello!", "react."],
  message:
    "리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다.",
};

const createApp = (data) => {
  return (
    <div id="app">
      <h1>
        {data.greetingMessage[0].toUpperCase()}
        {/* 해킹이 아니라, 명시적으로 JSX 구문에서 공백을 설정하는 방법 */}{" "}
        {/* <br /> */}
        {data.greetingMessage[1].toUpperCase()}
      </h1>
      <p>{data.message}</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(createApp(data));

import React from "react";
import { createRoot } from "react-dom/client";

// React.Component Type 1 :: class syntax
class App {
  render() {
    return (
      <div id="app" lang="en">
        <h1>React Application</h1>
      </div>
    );
  }
}

// React.Component Type 2 :: function syntax
function createApp() {
  return (
    <div id="app" lang="en">
      <h1>React Application</h1>
    </div>
  );
}

const domElement = document.getElementById("root");

if (domElement) {
  const reactDomRoot = createRoot(domElement);
  // 컴포넌트(component, class) = 생성 => 인스턴스(instance, element, object)
  // 클래스 구문
  // const app = new App().render(); // app ????
  // 함수 구문
  const app = createApp();
  console.log(app);
  reactDomRoot.render(app);
}

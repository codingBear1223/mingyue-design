import React, { useEffect, useState } from "react";
import axios from "axios";
import Upload from "./components/Upload/upload";

function App() {
  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/1", {
        headers: {
          "Content-Type": "application/json", // 自定义头
          "X-Requested-With": "XMLHttpRequest", // 自定义头
          "X-Custom-Header": "mingyue", // 自定义头
          "Access-Control-Allow-Origin": "*", // 允许跨域
        },
        responseType: "json", // 指定响应类型
      })
      .then((res) => {
        const { data, status, headers, config } = res;
        console.log(res);
      });
  }, []);
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Upload action="https://jsonplaceholder.typicode.com/posts" />
      </header>
    </div>
  );
}

export default App;

import { useState } from "react";

const UseStateHook = () => {
    const [initialData, setInitialData] = useState(0);
  return (
    <>
        <div className="center_div">
        <p>{initialData}</p>
        <div
          className="button2"
          onClick={() => {
            setInitialData(initialData + 1);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
        <div
          className="button2"
          onClick={() => {
            initialData > 0 ? setInitialData(initialData - 1) : setInitialData(0);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECREMENT
        </div>
      </div>
    </>
  )
}

export default UseStateHook

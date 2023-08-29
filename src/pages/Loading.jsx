import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Oval color="#8e8e8e" height={100} width={100} />
    </div>
  );
};

export default Loading;

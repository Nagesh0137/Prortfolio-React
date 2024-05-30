import React from "react";

export default function HeadTitle(props) {
  return (
    <>
      <p className="fs-1">
        <i className="dot fs-2 me-2 bi bi-square-fill"></i>
        {props.title}
      </p>
    </>
  );
}

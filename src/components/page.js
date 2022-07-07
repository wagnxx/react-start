import React from "react";

export default function page(props) {
  const {title, children} = props;
  return (
    <div className="page">
      <h2 className="page__title">当前页面： {title}</h2>
      <div className="page__content">{children}</div>
    </div>
  );
}

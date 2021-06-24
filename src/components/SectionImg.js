import React from "react";

const SectionImg = (props) => {
  return (
    <section
      id={props.tag}
      style={{ background: `url(${props.img}) no-repeat center /cover` }}
    >
      <h1>{props.title}</h1>
    </section>
  );
};

export default SectionImg;

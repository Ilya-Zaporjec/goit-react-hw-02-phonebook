import React from "react";
import PropsTypes from "prop-types";

export default function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.PropsTypes = {
  title: PropsTypes.string.isRequired,
  children: PropsTypes.node.isRequired,
};
